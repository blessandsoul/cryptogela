import { NextRequest, NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";
const API_KEY = process.env.CHANGENOW_API_KEY || "";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const amount = searchParams.get("amount");

    if (!from || !to || !amount) {
        return NextResponse.json(
            { error: "Missing from, to, or amount parameter" },
            { status: 400 }
        );
    }

    try {
        // Try to get network fee from estimate endpoint which includes it
        const res = await fetch(
            `${CHANGENOW_API}/exchange-amount/${amount}/${from}_${to}?api_key=${API_KEY}`
        );

        if (!res.ok) {
            // Return null networkFee if estimate fails - not critical
            return NextResponse.json({ networkFee: null });
        }

        const data = await res.json();

        // ChangeNow v1 API returns networkFee in the estimate response
        return NextResponse.json({
            networkFee: data.networkFee || null,
            estimatedAmount: data.estimatedAmount
        });
    } catch {
        // Network fee is optional, return null instead of error
        return NextResponse.json({ networkFee: null });
    }
}

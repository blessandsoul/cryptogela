import { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";

const CHANGENOW_API = "https://api.changenow.io/v1";
const API_KEY = env.CHANGENOW_API_KEY;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { from, to, amount, address, refundAddress, extraId, refundExtraId } = body;

        if (!from || !to || !amount || !address) {
            return NextResponse.json(
                { error: "Missing required parameters: from, to, amount, address" },
                { status: 400 }
            );
        }

        const res = await fetch(`${CHANGENOW_API}/transactions/${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                from,
                to,
                amount,
                address,
                refundAddress,
                extraId,
                refundExtraId,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Transaction creation failed" },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Server error" },
            { status: 500 }
        );
    }
}

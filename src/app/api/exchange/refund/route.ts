import { NextRequest, NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";
const API_KEY = process.env.CHANGENOW_API_KEY || "";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, address, extraId } = body;

        if (!id || !address) {
            return NextResponse.json(
                { error: "Missing id or address parameter" },
                { status: 400 }
            );
        }

        const res = await fetch(
            `${CHANGENOW_API}/transactions/${id}/refund/${API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    address,
                    extraId,
                }),
            }
        );

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Refund failed" },
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

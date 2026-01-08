import { NextRequest, NextResponse } from "next/server";


const CHANGENOW_API = "https://api.changenow.io/v1";


export async function GET(request: NextRequest) {
    const apiKey = process.env.CHANGENOW_API_KEY;
    if (!apiKey) {
        return NextResponse.json(
            { error: "API key not configured" },
            { status: 500 }
        );
    }

    const { searchParams } = request.nextUrl;
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json(
            { error: "Missing transaction id" },
            { status: 400 }
        );
    }

    try {
        const res = await fetch(
            `${CHANGENOW_API}/fiat-transactions/${id}/${apiKey}`
        );

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Failed to fetch status" },
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

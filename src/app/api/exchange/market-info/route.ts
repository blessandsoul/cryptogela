import { NextRequest, NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const ticker = searchParams.get("ticker");

    try {
        let url = `${CHANGENOW_API}/market-info/currencies`;
        if (ticker) {
            url += `?ticker=${ticker}`;
        }

        const res = await fetch(url, {
            next: { revalidate: 300 },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch market info");
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

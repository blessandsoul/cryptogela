import { NextRequest, NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    try {
        // If specific pair requested, check if it's available
        let url = `${CHANGENOW_API}/market-info/available-pairs`;
        if (from && to) {
            url += `?from=${from}&to=${to}`;
        }

        const res = await fetch(url, {
            next: { revalidate: 300 },
        });

        if (!res.ok) {
            throw new Error("Failed to fetch pairs");
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

import { NextRequest, NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";

export async function GET(request: NextRequest) {
        const apiKey = process.env.CHANGENOW_apiKey;
        if (!apiKey) {
            return NextResponse.json(
                { error: "API key not configured" },
                { status: 500 }
            );
        }

    const { searchParams } = request.nextUrl;
    const limit = searchParams.get("limit") || "100";
    const offset = searchParams.get("offset") || "0";
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const status = searchParams.get("status");

    try {
        let url = `${CHANGENOW_API}/transactions/${apiKey}?limit=${limit}&offset=${offset}`;

        if (from) url += `&from=${from}`;
        if (to) url += `&to=${to}`;
        if (status) url += `&status=${status}`;

        const res = await fetch(url);

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Failed to fetch exchanges" },
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

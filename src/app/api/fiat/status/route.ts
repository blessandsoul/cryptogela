import { NextRequest, NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";
const API_KEY = process.env.CHANGENOW_API_KEY || "";

export async function GET(request: NextRequest) {
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
            `${CHANGENOW_API}/fiat-transactions/${id}/${API_KEY}`
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

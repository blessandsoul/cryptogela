import { NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";

export async function GET() {
    try {
        const res = await fetch(`${CHANGENOW_API}/market-info/fiat-currencies`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error("Failed to fetch fiat currencies");
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

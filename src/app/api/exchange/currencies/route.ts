import { NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";

export async function GET() {
    try {
        const res = await fetch(`${CHANGENOW_API}/currencies?active=true`, {
            headers: { "Content-Type": "application/json" },
            next: { revalidate: 300 }, // Cache for 5 minutes
        });

        if (!res.ok) {
            throw new Error("Failed to fetch currencies");
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

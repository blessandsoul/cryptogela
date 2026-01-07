import { NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";

export async function GET() {
    try {
        const res = await fetch(`${CHANGENOW_API}/fiat-status`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error("Fiat service unavailable");
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

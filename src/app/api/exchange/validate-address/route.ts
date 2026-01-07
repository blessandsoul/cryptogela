import { NextRequest, NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const currency = searchParams.get("currency");
    const address = searchParams.get("address");

    if (!currency || !address) {
        return NextResponse.json(
            { error: "Missing currency or address parameter" },
            { status: 400 }
        );
    }

    try {
        const res = await fetch(
            `${CHANGENOW_API}/validate/address?currency=${currency}&address=${encodeURIComponent(address)}`
        );

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Validation failed" },
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

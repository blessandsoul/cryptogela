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
            `${CHANGENOW_API}/validate/address?currency=${currency}&address=${encodeURIComponent(address)}&apiKey=${apiKey}`
        );

        if (!res.ok) {
            // If 404, validation is not available for this currency - skip validation
            if (res.status === 404) {
                return NextResponse.json({ result: null, message: "Validation not available for this currency" });
            }
            
            let errorMessage = "Validation failed";
            const contentType = res.headers.get("content-type");
            
            if (contentType?.includes("application/json")) {
                try {
                    const error = await res.json();
                    errorMessage = error.message || errorMessage;
                } catch {
                    errorMessage = "Invalid address format";
                }
            } else {
                errorMessage = "Invalid address format";
            }
            
            return NextResponse.json(
                { error: errorMessage },
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

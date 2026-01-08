import { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";

const CHANGENOW_API = "https://api.changenow.io/v1";
const API_KEY = env.CHANGENOW_API_KEY;

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const fromFiat = searchParams.get("fromFiat");
    const toCrypto = searchParams.get("toCrypto");
    const amount = searchParams.get("amount");

    if (!fromFiat || !toCrypto || !amount) {
        return NextResponse.json(
            { error: "Missing fromFiat, toCrypto, or amount parameter" },
            { status: 400 }
        );
    }

    try {
        const res = await fetch(
            `${CHANGENOW_API}/fiat-exchange-amount?fiat_from=${fromFiat}&crypto_to=${toCrypto}&fiat_amount=${amount}&api_key=${API_KEY}`
        );

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Estimate failed" },
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

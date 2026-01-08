import { NextRequest, NextResponse } from "next/server";
import { env } from "@/lib/env";

const CHANGENOW_API = "https://api.changenow.io/v1";
const API_KEY = env.CHANGENOW_API_KEY;

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const fromFiat = searchParams.get("fromFiat");
    const toCrypto = searchParams.get("toCrypto");
    const fromCrypto = searchParams.get("fromCrypto");
    const toFiat = searchParams.get("toFiat");
    const amount = searchParams.get("amount");

    if (!amount) {
        return NextResponse.json(
            { error: "Missing amount parameter" },
            { status: 400 }
        );
    }

    try {
        let url: string;

        if (fromFiat && toCrypto) {
            // Fiat to Crypto
            url = `${CHANGENOW_API}/fiat-market-info/fiat-to-crypto?fiat=${fromFiat}&crypto=${toCrypto}&fiat_amount=${amount}&api_key=${API_KEY}`;
        } else if (fromCrypto && toFiat) {
            // Crypto to Fiat  
            url = `${CHANGENOW_API}/fiat-market-info/crypto-to-fiat?crypto=${fromCrypto}&fiat=${toFiat}&crypto_amount=${amount}&api_key=${API_KEY}`;
        } else {
            return NextResponse.json(
                { error: "Provide either fromFiat+toCrypto or fromCrypto+toFiat" },
                { status: 400 }
            );
        }

        const res = await fetch(url);

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Market estimate failed" },
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

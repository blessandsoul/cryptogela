import { NextRequest, NextResponse } from "next/server";


const CHANGENOW_API = "https://api.changenow.io/v1";


export async function POST(request: NextRequest) {
    const apiKey = process.env.CHANGENOW_API_KEY;
    if (!apiKey) {
        return NextResponse.json(
            { error: "API key not configured" },
            { status: 500 }
        );
    }

    try {
        const body = await request.json();
        const {
            fromFiat,
            toCrypto,
            amount,
            address,
            extraId,
            refundAddress,
            refundExtraId,
            paymentMethod,
        } = body;

        if (!fromFiat || !toCrypto || !amount || !address) {
            return NextResponse.json(
                { error: "Missing required parameters" },
                { status: 400 }
            );
        }

        const res = await fetch(`${CHANGENOW_API}/fiat-transactions/${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fiat_from: fromFiat,
                crypto_to: toCrypto,
                fiat_amount: amount,
                address,
                extraId,
                refundAddress,
                refundExtraId,
                paymentMethod,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Transaction creation failed" },
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

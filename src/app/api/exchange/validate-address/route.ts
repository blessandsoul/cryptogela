import { NextRequest, NextResponse } from "next/server";

const CHANGENOW_API = "https://api.changenow.io/v1";
const API_KEY = "5f4e8f94ef991026a2e24c823c62b3fd661009d58ab0aeb1cad86e88b6e87857";

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
        // Client-side validation since ChangeNOW API v1 doesn't provide address validation endpoint
        let isValid = false;
        let message = "Invalid address format";

        // Normalize currency to lowercase for comparison
        const currencyLower = currency.toLowerCase();

        // Validation rules for different cryptocurrencies
        if (currencyLower === "sol" || currencyLower === "usdcsol") {
            // Solana addresses: 32-44 characters, base58 encoded (no 0, O, I, l)
            isValid = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
            message = isValid ? "Valid Solana address" : "Invalid Solana address format";
        } else if (currencyLower === "btc") {
            // Bitcoin addresses: Legacy (1...), SegWit (3...), or Bech32 (bc1...)
            isValid = /^(1|3|bc1)[a-zA-HJ-NP-Z0-9]{25,62}$/.test(address);
            message = isValid ? "Valid Bitcoin address" : "Invalid Bitcoin address format";
        } else if (currencyLower === "eth" || currencyLower.includes("erc20")) {
            // Ethereum addresses: 0x followed by 40 hexadecimal characters
            isValid = /^0x[a-fA-F0-9]{40}$/.test(address);
            message = isValid ? "Valid Ethereum address" : "Invalid Ethereum address format";
        } else if (currencyLower === "xrp") {
            // Ripple addresses: r followed by 25-34 alphanumeric characters
            isValid = /^r[1-9A-HJ-NP-Za-km-z]{25,34}$/.test(address);
            message = isValid ? "Valid Ripple address" : "Invalid Ripple address format";
        } else if (currencyLower === "ltc") {
            // Litecoin addresses: L, M, or ltc1
            isValid = /^(L|M|ltc1)[a-zA-HJ-NP-Z0-9]{26,62}$/.test(address);
            message = isValid ? "Valid Litecoin address" : "Invalid Litecoin address format";
        } else if (currencyLower === "trx" || currencyLower.includes("trc20")) {
            // Tron addresses: T followed by 33 alphanumeric characters
            isValid = /^T[a-zA-HJ-NP-Za-km-z1-9]{33}$/.test(address);
            message = isValid ? "Valid Tron address" : "Invalid Tron address format";
        } else if (currencyLower === "bnb" || currencyLower.includes("bep20") || currencyLower.includes("bsc")) {
            // BSC/BNB addresses: Same format as Ethereum (0x + 40 hex chars)
            isValid = /^0x[a-fA-F0-9]{40}$/.test(address);
            message = isValid ? "Valid BSC/BNB address" : "Invalid BSC/BNB address format";
        } else if (currencyLower === "doge") {
            // Dogecoin addresses: D followed by 33 alphanumeric characters
            isValid = /^D[5-9A-HJ-NP-U][1-9A-HJ-NP-Za-km-z]{32}$/.test(address);
            message = isValid ? "Valid Dogecoin address" : "Invalid Dogecoin address format";
        } else if (currencyLower === "ada") {
            // Cardano addresses: addr1 followed by alphanumeric characters
            isValid = /^addr1[a-z0-9]{53,}$/.test(address);
            message = isValid ? "Valid Cardano address" : "Invalid Cardano address format";
        } else {
            // Generic validation for other currencies: minimum length check
            isValid = address.length >= 26 && address.length <= 120;
            message = isValid ? "Address format appears valid" : "Address is too short or too long";
        }

        return NextResponse.json({
            result: isValid,
            message: message
        });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Server error" },
            { status: 500 }
        );
    }
}

"use client";

import { create } from "zustand";

// Types for ChangeNow API
export interface Currency {
    ticker: string;
    name: string;
    image: string;
    hasExternalId: boolean;
    isFiat: boolean;
    featured: boolean;
    isStable: boolean;
    supportsFixedRate: boolean;
    network: string;
    tokenContract: string | null;
    buy: boolean;
    sell: boolean;
}

export interface EstimateResult {
    estimatedAmount: number;
    transactionSpeedForecast: string;
    warningMessage: string | null;
    rateId?: string;
}

export interface MinAmountResult {
    minAmount: number;
}

export interface ExchangeTransaction {
    id: string;
    payinAddress: string;
    payoutAddress: string;
    payinExtraId?: string;
    fromCurrency: string;
    toCurrency: string;
    amount: number;
    refundAddress?: string;
    refundExtraId?: string;
}

export interface TransactionStatus {
    id: string;
    status: string;
    payinHash: string | null;
    payoutHash: string | null;
    payinAddress: string;
    payoutAddress: string;
    payinExtraId: string | null;
    fromCurrency: string;
    toCurrency: string;
    amountSend: number | null;
    amountReceive: number | null;
    networkFee: number | null;
    expectedSendAmount: number;
    expectedReceiveAmount: number;
    updatedAt: string;
}

export interface AddressValidation {
    result: boolean;
    message?: string;
}

// Exchange step enum
export type ExchangeStep = "input" | "confirm" | "deposit" | "processing" | "complete";

// Store interface
interface ExchangeStore {
    // Currencies
    currencies: Currency[];
    currenciesLoading: boolean;
    currenciesError: string | null;

    // Selected currencies
    fromCurrency: string;
    toCurrency: string;

    // Amount
    amount: string;
    estimatedAmount: number | null;
    estimateLoading: boolean;
    estimateError: string | null;

    // Min/Max amounts
    minAmount: number | null;

    // Network fee
    networkFee: number | null;

    // Address validation
    addressValid: boolean | null;
    addressValidating: boolean;
    addressError: string | null;

    // Transaction
    recipientAddress: string;
    refundAddress: string;
    transaction: ExchangeTransaction | null;
    transactionStatus: TransactionStatus | null;
    transactionLoading: boolean;
    transactionError: string | null;

    // Step
    step: ExchangeStep;

    // Actions
    setFromCurrency: (currency: string) => void;
    setToCurrency: (currency: string) => void;
    setAmount: (amount: string) => void;
    setRecipientAddress: (address: string) => void;
    setRefundAddress: (address: string) => void;
    swapCurrencies: () => void;
    setStep: (step: ExchangeStep) => void;

    // API actions
    fetchCurrencies: () => Promise<void>;
    fetchEstimate: () => Promise<void>;
    fetchMinAmount: () => Promise<void>;
    fetchNetworkFee: () => Promise<void>;
    validateAddress: () => Promise<void>;
    createTransaction: () => Promise<void>;
    fetchTransactionStatus: (id: string) => Promise<void>;
    reset: () => void;
}

const API_BASE = "/api/exchange";

export const useExchangeStore = create<ExchangeStore>((set, get) => ({
    // Initial state
    currencies: [],
    currenciesLoading: false,
    currenciesError: null,

    fromCurrency: "btc",
    toCurrency: "sol",

    amount: "0.1",
    estimatedAmount: null,
    estimateLoading: false,
    estimateError: null,

    minAmount: null,
    networkFee: null,

    addressValid: null,
    addressValidating: false,
    addressError: null,

    recipientAddress: "",
    refundAddress: "",
    transaction: null,
    transactionStatus: null,
    transactionLoading: false,
    transactionError: null,

    step: "input",

    // Setters
    setFromCurrency: (currency) => {
        set({ fromCurrency: currency, estimatedAmount: null, minAmount: null, networkFee: null });
        get().fetchMinAmount();
        get().fetchEstimate();
    },

    setToCurrency: (currency) => {
        set({ toCurrency: currency, estimatedAmount: null, minAmount: null, networkFee: null, addressValid: null });
        get().fetchMinAmount();
        get().fetchEstimate();
    },

    setAmount: (amount) => {
        set({ amount });
    },

    setRecipientAddress: (address) => {
        set({ recipientAddress: address, addressValid: null, addressError: null });
    },

    setRefundAddress: (address) => set({ refundAddress: address }),

    swapCurrencies: () => {
        const { fromCurrency, toCurrency } = get();
        set({
            fromCurrency: toCurrency,
            toCurrency: fromCurrency,
            estimatedAmount: null,
            minAmount: null,
            networkFee: null,
            addressValid: null,
        });
        get().fetchMinAmount();
        get().fetchEstimate();
    },

    setStep: (step) => set({ step }),

    // API Actions
    fetchCurrencies: async () => {
        set({ currenciesLoading: true, currenciesError: null });
        try {
            const res = await fetch(`${API_BASE}/currencies`);
            if (!res.ok) throw new Error("Failed to fetch currencies");
            const data = await res.json();
            set({ currencies: data, currenciesLoading: false });
        } catch (error) {
            set({
                currenciesError: error instanceof Error ? error.message : "Unknown error",
                currenciesLoading: false,
            });
        }
    },

    fetchEstimate: async () => {
        const { fromCurrency, toCurrency, amount } = get();
        if (!amount || parseFloat(amount) <= 0) {
            set({ estimatedAmount: null });
            return;
        }

        set({ estimateLoading: true, estimateError: null });
        try {
            const res = await fetch(
                `${API_BASE}/estimate?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
            );
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.error || "Failed to fetch estimate");
            }
            const data: EstimateResult = await res.json();
            set({ estimatedAmount: data.estimatedAmount, estimateLoading: false });

            // Also fetch network fee
            get().fetchNetworkFee();
        } catch (error) {
            set({
                estimateError: error instanceof Error ? error.message : "Unknown error",
                estimateLoading: false,
                estimatedAmount: null,
            });
        }
    },

    fetchMinAmount: async () => {
        const { fromCurrency, toCurrency } = get();
        try {
            const res = await fetch(
                `${API_BASE}/min-amount?from=${fromCurrency}&to=${toCurrency}`
            );
            if (!res.ok) throw new Error("Failed to fetch min amount");
            const data: MinAmountResult = await res.json();
            set({ minAmount: data.minAmount });
        } catch {
            set({ minAmount: null });
        }
    },

    fetchNetworkFee: async () => {
        const { fromCurrency, toCurrency, amount } = get();
        if (!amount || parseFloat(amount) <= 0) return;

        try {
            const res = await fetch(
                `${API_BASE}/network-fee?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
            );
            if (!res.ok) return;
            const data = await res.json();
            set({ networkFee: data.networkFee || null });
        } catch {
            set({ networkFee: null });
        }
    },

    validateAddress: async () => {
        const { toCurrency, recipientAddress } = get();
        if (!recipientAddress || recipientAddress.length < 10) {
            set({ addressValid: null });
            return;
        }

        set({ addressValidating: true, addressError: null });
        try {
            const res = await fetch(
                `${API_BASE}/validate-address?currency=${toCurrency}&address=${encodeURIComponent(recipientAddress)}`
            );
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.error || "Validation failed");
            }
            const data: AddressValidation = await res.json();
            set({
                addressValid: data.result,
                addressValidating: false,
                addressError: data.result ? null : (data.message || "Invalid address"),
            });
        } catch (error) {
            set({
                addressValid: false,
                addressValidating: false,
                addressError: error instanceof Error ? error.message : "Validation failed",
            });
        }
    },

    createTransaction: async () => {
        const { fromCurrency, toCurrency, amount, recipientAddress, refundAddress } = get();

        if (!recipientAddress) {
            set({ transactionError: "Recipient address is required" });
            return;
        }

        set({ transactionLoading: true, transactionError: null });
        try {
            const res = await fetch(`${API_BASE}/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    from: fromCurrency,
                    to: toCurrency,
                    amount: parseFloat(amount),
                    address: recipientAddress,
                    refundAddress: refundAddress || undefined,
                }),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.error || "Failed to create transaction");
            }

            const data: ExchangeTransaction = await res.json();
            set({ transaction: data, transactionLoading: false, step: "deposit" });
        } catch (error) {
            set({
                transactionError: error instanceof Error ? error.message : "Unknown error",
                transactionLoading: false,
            });
        }
    },

    fetchTransactionStatus: async (id: string) => {
        try {
            const res = await fetch(`${API_BASE}/status?id=${id}`);
            if (!res.ok) throw new Error("Failed to fetch status");
            const data: TransactionStatus = await res.json();
            set({ transactionStatus: data });

            // Update step based on status
            if (data.status === "finished") {
                set({ step: "complete" });
            } else if (["exchanging", "sending", "confirming"].includes(data.status)) {
                set({ step: "processing" });
            }
        } catch {
            // Silently fail - we'll retry
        }
    },

    reset: () =>
        set({
            amount: "0.1",
            estimatedAmount: null,
            networkFee: null,
            recipientAddress: "",
            refundAddress: "",
            addressValid: null,
            addressError: null,
            transaction: null,
            transactionStatus: null,
            transactionError: null,
            step: "input",
        }),
}));

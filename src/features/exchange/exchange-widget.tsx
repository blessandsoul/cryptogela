"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    ArrowRightLeft,
    Shield,
    Zap,
    Clock,
    Sparkles,
    ArrowRight,
    Loader2,
    Copy,
    CheckCircle,
    AlertCircle,
    Search,
    X,
    ChevronDown,
    Info,
    BadgeCheck,
    Wallet
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useExchangeStore, Currency } from "./use-exchange"

const POPULAR_CURRENCIES = ["btc", "eth", "sol", "usdt", "xrp", "doge", "bnb", "ada", "ltc", "matic"]

// Currency Selector
function CurrencySelector({
    value,
    onChange,
    currencies,
    disabled
}: {
    value: string
    onChange: (value: string) => void
    currencies: Currency[]
    disabled?: boolean
}) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const selectedCurrency = currencies.find(c => c.ticker === value)

    const filteredCurrencies = useMemo(() => {
        const searchLower = search.toLowerCase()
        return currencies
            .filter(c => c.ticker.toLowerCase().includes(searchLower) || c.name.toLowerCase().includes(searchLower))
            .sort((a, b) => {
                const aPopular = POPULAR_CURRENCIES.includes(a.ticker.toLowerCase())
                const bPopular = POPULAR_CURRENCIES.includes(b.ticker.toLowerCase())
                if (aPopular && !bPopular) return -1
                if (!aPopular && bPopular) return 1
                return a.ticker.localeCompare(b.ticker)
            })
    }, [currencies, search])

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                disabled={disabled}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-primary/50 transition-colors disabled:opacity-50"
            >
                {selectedCurrency ? (
                    <>
                        <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={selectedCurrency.image} alt={selectedCurrency.ticker} className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-white uppercase">{selectedCurrency.ticker}</span>
                    </>
                ) : (
                    <span className="text-zinc-500">Select</span>
                )}
                <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 z-50 w-80 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl overflow-hidden"
                        >
                            <div className="p-2 border-b border-zinc-800">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full pl-9 pr-8 py-2 bg-zinc-800 border-none rounded-lg text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary"
                                        autoFocus
                                    />
                                    {search && (
                                        <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <X className="w-4 h-4 text-zinc-500 hover:text-white" />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {filteredCurrencies.slice(0, 50).map((currency) => (
                                    <button
                                        key={currency.ticker}
                                        type="button"
                                        onClick={() => { onChange(currency.ticker); setOpen(false); setSearch("") }}
                                        className={`flex items-center gap-3 w-full p-3 hover:bg-zinc-800 transition-colors ${value === currency.ticker ? 'bg-primary/10' : ''}`}
                                    >
                                        <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={currency.image} alt={currency.ticker} className="w-5 h-5" />
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="font-medium text-white uppercase text-sm">{currency.ticker}</div>
                                            <div className="text-xs text-zinc-500 truncate">{currency.name}</div>
                                        </div>
                                        {POPULAR_CURRENCIES.includes(currency.ticker.toLowerCase()) && (
                                            <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] shrink-0">★</Badge>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

// Step indicator
function StepIndicator({ currentStep }: { currentStep: string }) {
    const steps = [
        { id: "input", label: "Amount" },
        { id: "confirm", label: "Confirm" },
        { id: "deposit", label: "Deposit" },
        { id: "complete", label: "Done" }
    ]
    const currentIndex = steps.findIndex(s => s.id === currentStep)

    return (
        <div className="flex items-center justify-center gap-2 mb-6">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors ${index <= currentIndex ? 'bg-primary text-primary-foreground' : 'bg-zinc-800 text-zinc-500'}`}>
                        {index < currentIndex ? <CheckCircle className="w-4 h-4" /> : index + 1}
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`w-8 h-0.5 mx-1 transition-colors ${index < currentIndex ? 'bg-primary' : 'bg-zinc-800'}`} />
                    )}
                </div>
            ))}
        </div>
    )
}

// Main Exchange Widget
export function ExchangeWidget() {
    const {
        currencies, currenciesLoading,
        fromCurrency, toCurrency, amount,
        estimatedAmount, estimateLoading, estimateError,
        minAmount, networkFee,
        addressValid, addressValidating, addressError,
        recipientAddress, refundAddress,
        transaction, transactionLoading, transactionError, transactionStatus,
        createReceipt, receiptPin, receiptUrl,
        step,
        setFromCurrency, setToCurrency, setAmount, setRecipientAddress, setRefundAddress,
        setCreateReceipt, setReceiptPin,
        swapCurrencies, setStep,
        fetchCurrencies, fetchEstimate, fetchMinAmount, validateAddress,
        createTransaction, fetchTransactionStatus, reset
    } = useExchangeStore()

    const [copied, setCopied] = useState(false)
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null)
    const [addressDebounce, setAddressDebounce] = useState<NodeJS.Timeout | null>(null)

    // Initial fetch
    useEffect(() => {
        fetchCurrencies()
        fetchMinAmount()
    }, [fetchCurrencies, fetchMinAmount])

    // Debounced estimate
    useEffect(() => {
        if (debounceTimeout) clearTimeout(debounceTimeout)
        const timeout = setTimeout(() => {
            if (amount && parseFloat(amount) > 0) fetchEstimate()
        }, 500)
        setDebounceTimeout(timeout)
        return () => { if (debounceTimeout) clearTimeout(debounceTimeout) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount])

    // Debounced address validation
    useEffect(() => {
        if (addressDebounce) clearTimeout(addressDebounce)
        const timeout = setTimeout(() => {
            if (recipientAddress.length > 10) validateAddress()
        }, 800)
        setAddressDebounce(timeout)
        return () => { if (addressDebounce) clearTimeout(addressDebounce) }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recipientAddress, toCurrency])

    // Poll transaction status
    useEffect(() => {
        if (!transaction?.id || step === "complete") return
        const interval = setInterval(() => fetchTransactionStatus(transaction.id), 10000)
        return () => clearInterval(interval)
    }, [transaction?.id, step, fetchTransactionStatus])

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const isAmountValid = useMemo(() => {
        const num = parseFloat(amount)
        return num > 0 && (!minAmount || num >= minAmount)
    }, [amount, minAmount])

    const canProceed = isAmountValid && recipientAddress.length > 10 && addressValid !== false

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <Card className="relative overflow-visible border-2 border-zinc-800 bg-zinc-950 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary" />

                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/10 border border-primary/30 flex items-center justify-center">
                                    <ArrowRightLeft className="w-5 h-5 text-primary" />
                                </div>
                                <motion.div
                                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-zinc-950"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white flex items-center gap-2">
                                    Crypto Exchange
                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px]">INSTANT</Badge>
                                </h3>
                                <p className="text-xs text-zinc-500">500+ cryptocurrencies</p>
                            </div>
                        </div>
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/30">
                            <Sparkles className="w-3 h-3 mr-1" />Live
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="pt-0">
                    {step !== "input" && <StepIndicator currentStep={step} />}

                    <AnimatePresence mode="wait">
                        {/* Step 1: Input */}
                        {step === "input" && (
                            <motion.div key="input" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                <div className="flex flex-col lg:flex-row items-stretch gap-3">
                                    {/* You Send */}
                                    <div className="flex-1 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <label className="text-xs text-zinc-500 mb-2 block">You Send</label>
                                        <div className="flex items-center gap-3">
                                            <Input
                                                type="number"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="flex-1 bg-zinc-800/50 border-zinc-700 text-xl font-bold text-white h-12 focus:border-primary"
                                                placeholder="0.00"
                                            />
                                            <CurrencySelector value={fromCurrency} onChange={setFromCurrency} currencies={currencies} disabled={currenciesLoading} />
                                        </div>
                                        {minAmount && (
                                            <p className={`text-xs mt-2 ${parseFloat(amount) < minAmount ? 'text-red-400' : 'text-zinc-500'}`}>
                                                {parseFloat(amount) < minAmount && <AlertCircle className="w-3 h-3 inline mr-1" />}
                                                Min: {minAmount} {fromCurrency.toUpperCase()}
                                            </p>
                                        )}
                                    </div>

                                    {/* Swap */}
                                    <div className="flex items-center justify-center lg:py-4">
                                        <Button variant="outline" size="icon" onClick={swapCurrencies} className="rounded-full w-10 h-10 bg-zinc-900 border-zinc-700 hover:bg-zinc-800 hover:border-primary shrink-0">
                                            <ArrowRightLeft className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    {/* You Get */}
                                    <div className="flex-1 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <label className="text-xs text-zinc-500 mb-2 block">You Get (estimated)</label>
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-12 px-3 rounded-md bg-zinc-800/50 border border-zinc-700 flex items-center">
                                                {estimateLoading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                                                ) : estimateError ? (
                                                    <span className="text-red-400 text-sm">{estimateError}</span>
                                                ) : estimatedAmount ? (
                                                    <span className="text-xl font-bold text-primary">≈ {estimatedAmount.toFixed(6)}</span>
                                                ) : (
                                                    <span className="text-zinc-600 text-xl">—</span>
                                                )}
                                            </div>
                                            <CurrencySelector value={toCurrency} onChange={setToCurrency} currencies={currencies} disabled={currenciesLoading} />
                                        </div>
                                        {networkFee && (
                                            <p className="text-xs text-zinc-500 mt-2">
                                                <Info className="w-3 h-3 inline mr-1" />
                                                Network fee: ~{networkFee} {toCurrency.toUpperCase()}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Address Input */}
                                <div className="mt-4 flex flex-col lg:flex-row items-end gap-3">
                                    <div className="flex-1 w-full">
                                        <label className="text-xs text-zinc-500 mb-2 flex items-center gap-2">
                                            <Wallet className="w-3 h-3" />
                                            Your {toCurrency.toUpperCase()} wallet address
                                            {addressValidating && <Loader2 className="w-3 h-3 animate-spin text-primary" />}
                                            {addressValid === true && <BadgeCheck className="w-3.5 h-3.5 text-green-500" />}
                                            {addressValid === false && <AlertCircle className="w-3.5 h-3.5 text-red-500" />}
                                        </label>
                                        <Input
                                            type="text"
                                            value={recipientAddress}
                                            onChange={(e) => setRecipientAddress(e.target.value)}
                                            placeholder={`Enter your ${toCurrency.toUpperCase()} address`}
                                            className={`bg-zinc-800/50 border-zinc-700 focus:border-primary h-12 ${addressValid === false ? 'border-red-500' : addressValid === true ? 'border-green-500' : ''}`}
                                        />
                                        {addressError && (
                                            <p className="text-xs text-red-400 mt-1">{addressError}</p>
                                        )}
                                    </div>
                                    <Button
                                        onClick={() => setStep("confirm")}
                                        disabled={!canProceed || estimateLoading || addressValidating}
                                        className="h-12 px-8 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-primary-foreground font-semibold shrink-0"
                                    >
                                        Exchange
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>

                                {transactionError && (
                                    <div className="mt-3 flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                                        <AlertCircle className="w-4 h-4 shrink-0" />{transactionError}
                                    </div>
                                )}

                                {/* Optional Refund Address */}
                                <details className="mt-4">
                                    <summary className="text-xs text-zinc-500 cursor-pointer hover:text-zinc-400">
                                        + Add refund address (optional)
                                    </summary>
                                    <div className="mt-2">
                                        <Input
                                            type="text"
                                            value={refundAddress}
                                            onChange={(e) => setRefundAddress(e.target.value)}
                                            placeholder={`Your ${fromCurrency.toUpperCase()} address for refund`}
                                            className="bg-zinc-800/50 border-zinc-700 focus:border-primary"
                                        />
                                    </div>
                                </details>

                                {/* Receipt Option */}
                                <div className="mt-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={createReceipt}
                                            onChange={(e) => setCreateReceipt(e.target.checked)}
                                            className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-primary focus:ring-primary focus:ring-offset-0"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-white">Create 48-hour receipt</span>
                                            <p className="text-xs text-zinc-500 mt-0.5">Get a shareable link to track this transaction</p>
                                        </div>
                                    </label>
                                    
                                    {createReceipt && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-3"
                                        >
                                            <label className="text-xs text-zinc-500 mb-2 block">
                                                Set PIN code (4-8 digits)
                                            </label>
                                            <Input
                                                type="password"
                                                value={receiptPin}
                                                onChange={(e) => setReceiptPin(e.target.value.replace(/\D/g, '').slice(0, 8))}
                                                placeholder="Enter PIN"
                                                maxLength={8}
                                                className="bg-zinc-800/50 border-zinc-700 focus:border-primary"
                                            />
                                            {receiptPin && receiptPin.length < 4 && (
                                                <p className="text-xs text-yellow-400 mt-1">
                                                    <AlertCircle className="w-3 h-3 inline mr-1" />
                                                    PIN must be at least 4 digits
                                                </p>
                                            )}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Confirm */}
                        {step === "confirm" && (
                            <motion.div key="confirm" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                                    <div className="flex justify-between"><span className="text-zinc-500">You send</span><span className="font-semibold text-white">{amount} {fromCurrency.toUpperCase()}</span></div>
                                    <div className="flex justify-between"><span className="text-zinc-500">You get</span><span className="font-semibold text-primary">≈ {estimatedAmount?.toFixed(6)} {toCurrency.toUpperCase()}</span></div>
                                    {networkFee && <div className="flex justify-between"><span className="text-zinc-500">Network fee</span><span className="text-zinc-400">~{networkFee} {toCurrency.toUpperCase()}</span></div>}
                                    <div className="border-t border-zinc-800 pt-3">
                                        <span className="text-zinc-500 text-xs">To address</span>
                                        <p className="text-white text-sm font-mono break-all mt-1">{recipientAddress}</p>
                                    </div>
                                </div>
                                {transactionError && <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"><AlertCircle className="w-4 h-4 shrink-0" />{transactionError}</div>}
                                <div className="flex gap-3">
                                    <Button variant="outline" onClick={() => setStep("input")} className="flex-1">Back</Button>
                                    <Button onClick={createTransaction} disabled={transactionLoading} className="flex-1 bg-gradient-to-r from-primary to-emerald-500">
                                        {transactionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Confirm Exchange"}
                                    </Button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Deposit */}
                        {step === "deposit" && transaction && (
                            <motion.div key="deposit" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                                <div className="text-center">
                                    <h4 className="text-lg font-semibold text-white mb-2">Send your {fromCurrency.toUpperCase()}</h4>
                                    <p className="text-zinc-500 text-sm">Send exactly <span className="text-primary font-semibold">{amount} {fromCurrency.toUpperCase()}</span> to:</p>
                                </div>
                                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                    <label className="text-xs text-zinc-500 mb-2 block">Deposit Address</label>
                                    <div className="flex items-center gap-2">
                                        <code className="flex-1 text-sm font-mono text-white break-all bg-zinc-800/50 p-3 rounded">{transaction.payinAddress}</code>
                                        <Button variant="outline" size="icon" onClick={() => copyToClipboard(transaction.payinAddress)} className="shrink-0">
                                            {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm">
                                    <AlertCircle className="w-4 h-4 shrink-0" />Send only {fromCurrency.toUpperCase()} to this address
                                </div>
                                {receiptUrl && (
                                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            <span className="text-sm font-medium text-green-400">Receipt Created</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 mb-2">Your 48-hour receipt is ready. Share this link to track the transaction:</p>
                                        <div className="flex items-center gap-2">
                                            <code className="flex-1 text-xs font-mono text-white bg-zinc-800/50 p-2 rounded break-all">
                                                {window.location.origin}{receiptUrl}
                                            </code>
                                            <Button 
                                                variant="outline" 
                                                size="icon" 
                                                onClick={() => copyToClipboard(`${window.location.origin}${receiptUrl}`)} 
                                                className="shrink-0"
                                            >
                                                {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                <div className="text-center">
                                    <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto mb-2" />
                                    <p className="text-zinc-500 text-sm">Waiting for deposit...</p>
                                    <p className="text-zinc-600 text-xs mt-1">ID: {transaction.id}</p>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 4: Complete */}
                        {step === "complete" && (
                            <motion.div key="complete" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </motion.div>
                                <h4 className="text-xl font-bold text-white mb-2">Exchange Complete!</h4>
                                <p className="text-zinc-500 mb-6">Your {toCurrency.toUpperCase()} has been sent</p>
                                <Button onClick={reset} className="bg-gradient-to-r from-primary to-emerald-500">New Exchange</Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>

                {/* Features */}
                <div className="grid grid-cols-3 divide-x divide-zinc-800/50 bg-zinc-900/50 border-t border-zinc-800">
                    <div className="flex items-center justify-center gap-2 py-3">
                        <Shield className="w-4 h-4 text-primary" /><span className="text-xs font-medium text-zinc-400">Non-custodial</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-3">
                        <Zap className="w-4 h-4 text-primary" /><span className="text-xs font-medium text-zinc-400">No fees</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-3">
                        <Clock className="w-4 h-4 text-primary" /><span className="text-xs font-medium text-zinc-400">5-30 min</span>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

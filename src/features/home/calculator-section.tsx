"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    ArrowRightLeft,
    Shield,
    Zap,
    Clock,
    TrendingUp,
    ChevronDown,
    Search,
    X,
    Loader2,
    CheckCircle,
    AlertCircle,
    Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Types
interface Currency {
    ticker: string
    name: string
    image: string
}

interface EstimateResult {
    estimatedAmount: number
    transactionSpeedForecast?: string
    networkFee?: number
}

const POPULAR_CURRENCIES = ["btc", "eth", "sol", "usdt", "usdc", "xrp", "doge", "bnb", "ada", "ltc"]

// Currency Selector
function CurrencySelector({
    value,
    onChange,
    currencies,
    label,
    disabled
}: {
    value: string
    onChange: (value: string) => void
    currencies: Currency[]
    label: string
    disabled?: boolean
}) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")

    const selectedCurrency = currencies.find(c => c.ticker === value)

    const filteredCurrencies = useMemo(() => {
        const searchLower = search.toLowerCase()
        const filtered = currencies.filter(c =>
            c.ticker.toLowerCase().includes(searchLower) ||
            c.name.toLowerCase().includes(searchLower)
        )
        return filtered.sort((a, b) => {
            const aPopular = POPULAR_CURRENCIES.includes(a.ticker.toLowerCase())
            const bPopular = POPULAR_CURRENCIES.includes(b.ticker.toLowerCase())
            if (aPopular && !bPopular) return -1
            if (!aPopular && bPopular) return 1
            return a.ticker.localeCompare(b.ticker)
        })
    }, [currencies, search])

    return (
        <div className="relative">
            <label className="text-xs text-zinc-500 mb-1.5 block">{label}</label>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                disabled={disabled}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-xl bg-zinc-800/80 border border-zinc-700 hover:border-primary/50 transition-all disabled:opacity-50"
            >
                {selectedCurrency ? (
                    <>
                        <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center overflow-hidden">
                            {selectedCurrency.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={selectedCurrency.image} alt={selectedCurrency.ticker} className="w-5 h-5" />
                            ) : (
                                <span className="text-xs font-bold text-zinc-400">{selectedCurrency.ticker.slice(0, 2).toUpperCase()}</span>
                            )}
                        </div>
                        <div className="flex-1 text-left">
                            <span className="font-bold text-white uppercase">{selectedCurrency.ticker}</span>
                            <span className="text-xs text-zinc-500 ml-2 hidden sm:inline">{selectedCurrency.name}</span>
                        </div>
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
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute top-full left-0 mt-2 z-50 w-80 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-3 border-b border-zinc-800">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                    <input
                                        type="text"
                                        placeholder="Search 500+ currencies..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full pl-10 pr-8 py-2.5 bg-zinc-800 border-none rounded-lg text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        autoFocus
                                    />
                                    {search && (
                                        <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <X className="w-4 h-4 text-zinc-500 hover:text-white" />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="max-h-72 overflow-y-auto">
                                {filteredCurrencies.slice(0, 50).map((currency) => (
                                    <button
                                        key={currency.ticker}
                                        type="button"
                                        onClick={() => {
                                            onChange(currency.ticker)
                                            setOpen(false)
                                            setSearch("")
                                        }}
                                        className={`flex items-center gap-3 w-full p-3 hover:bg-zinc-800/80 transition-colors ${value === currency.ticker ? 'bg-primary/10' : ''}`}
                                    >
                                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                                            {currency.image ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img src={currency.image} alt={currency.ticker} className="w-6 h-6" />
                                            ) : (
                                                <span className="text-xs font-bold text-zinc-400">{currency.ticker.slice(0, 2).toUpperCase()}</span>
                                            )}
                                        </div>
                                        <div className="text-left flex-1">
                                            <div className="font-semibold text-white uppercase text-sm">{currency.ticker}</div>
                                            <div className="text-xs text-zinc-500 truncate">{currency.name}</div>
                                        </div>
                                        {POPULAR_CURRENCIES.includes(currency.ticker.toLowerCase()) && (
                                            <Badge className="bg-primary/10 text-primary text-[10px] border-0 shrink-0">★</Badge>
                                        )}
                                    </button>
                                ))}
                                {filteredCurrencies.length === 0 && (
                                    <div className="p-6 text-center text-zinc-500 text-sm">No currencies found</div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export function CalculatorSection() {
    const [currencies, setCurrencies] = useState<Currency[]>([])
    const [loading, setLoading] = useState(true)
    const [fromCurrency, setFromCurrency] = useState("btc")
    const [toCurrency, setToCurrency] = useState("sol")
    const [amount, setAmount] = useState("0.1")
    const [estimate, setEstimate] = useState<EstimateResult | null>(null)
    const [estimateLoading, setEstimateLoading] = useState(false)
    const [estimateError, setEstimateError] = useState<string | null>(null)
    const [minAmount, setMinAmount] = useState<number | null>(null)
    const [networkFee, setNetworkFee] = useState<number | null>(null)
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null)
    const [addressValid, setAddressValid] = useState<boolean | null>(null)

    // Fetch currencies
    useEffect(() => {
        fetch("/api/exchange/currencies")
            .then(res => res.json())
            .then(data => {
                setCurrencies(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [])

    // Fetch min amount
    useEffect(() => {
        if (!fromCurrency || !toCurrency) return
        fetch(`/api/exchange/min-amount?from=${fromCurrency}&to=${toCurrency}`)
            .then(res => res.json())
            .then(data => setMinAmount(data.minAmount))
            .catch(() => setMinAmount(null))
    }, [fromCurrency, toCurrency])

    // Fetch estimate (debounced)
    const fetchEstimate = useCallback(async () => {
        if (!amount || parseFloat(amount) <= 0) {
            setEstimate(null)
            return
        }

        setEstimateLoading(true)
        setEstimateError(null)

        try {
            const res = await fetch(`/api/exchange/estimate?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
            if (!res.ok) {
                const error = await res.json()
                throw new Error(error.error || "Estimate failed")
            }
            const data = await res.json()
            setEstimate(data)

            // Also fetch network fee
            const feeRes = await fetch(`/api/exchange/network-fee?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
            if (feeRes.ok) {
                const feeData = await feeRes.json()
                setNetworkFee(feeData.networkFee || null)
            }
        } catch (err) {
            setEstimateError(err instanceof Error ? err.message : "Error")
            setEstimate(null)
        } finally {
            setEstimateLoading(false)
        }
    }, [amount, fromCurrency, toCurrency])

    useEffect(() => {
        if (debounceTimeout) clearTimeout(debounceTimeout)
        const timeout = setTimeout(fetchEstimate, 600)
        setDebounceTimeout(timeout)
        return () => {
            if (debounceTimeout) clearTimeout(debounceTimeout)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, fromCurrency, toCurrency])

    const swapCurrencies = () => {
        const temp = fromCurrency
        setFromCurrency(toCurrency)
        setToCurrency(temp)
    }

    const scrollToExchange = () => {
        document.getElementById("exchange")?.scrollIntoView({ behavior: "smooth" })
    }

    const isAmountBelowMin = minAmount && parseFloat(amount) < minAmount
    const rate = estimate && parseFloat(amount) > 0
        ? (estimate.estimatedAmount / parseFloat(amount)).toFixed(8)
        : null

    return (
        <section id="calculator" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] bg-primary/5 rounded-full blur-[8rem]" />
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-emerald-500/3 rounded-full blur-[6rem]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Real-time Rates
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        <span className="text-primary">
                            it
                        </span>{" "}
                        <span className="text-purple-500">Swap</span>{" "}
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Calculator</span>
                    </h2>
                    <p className="text-zinc-500 max-w-lg mx-auto">
                        Preview your exchange with live rates. Zero hidden fees, what you see is what you get.
                    </p>
                </motion.div>

                {/* Calculator Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
                        {/* Main Exchange Row */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
                            {/* You Send */}
                            <div>
                                <label className="text-xs text-zinc-500 mb-1.5 block">You Send</label>
                                <div className="flex gap-2">
                                    <Input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="flex-1 bg-zinc-800/80 border-zinc-700 rounded-xl px-4 py-3 h-auto text-xl font-bold focus:border-primary focus-visible:ring-primary"
                                        placeholder="0.00"
                                    />
                                    <div className="w-32">
                                        <CurrencySelector
                                            value={fromCurrency}
                                            onChange={setFromCurrency}
                                            currencies={currencies}
                                            label=""
                                            disabled={loading}
                                        />
                                    </div>
                                </div>
                                {minAmount && (
                                    <p className={`text-xs mt-1.5 ${isAmountBelowMin ? 'text-red-400' : 'text-zinc-500'}`}>
                                        {isAmountBelowMin && <AlertCircle className="w-3 h-3 inline mr-1" />}
                                        Min: {minAmount} {fromCurrency.toUpperCase()}
                                    </p>
                                )}
                            </div>

                            {/* Swap Button */}
                            <div className="flex justify-center md:pb-6">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={swapCurrencies}
                                    className="w-12 h-12 rounded-full bg-primary/10 border-primary/30 hover:bg-primary/20 hover:border-primary transition-all"
                                >
                                    <ArrowRightLeft className="w-5 h-5 text-primary" />
                                </Button>
                            </div>

                            {/* You Receive */}
                            <div>
                                <label className="text-xs text-zinc-500 mb-1.5 block">You Receive</label>
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 flex items-center min-h-[52px]">
                                        {estimateLoading ? (
                                            <Loader2 className="w-5 h-5 animate-spin text-primary" />
                                        ) : estimateError ? (
                                            <span className="text-red-400 text-sm">{estimateError}</span>
                                        ) : estimate ? (
                                            <span className="text-xl font-bold text-primary">
                                                ≈ {estimate.estimatedAmount.toFixed(6)}
                                            </span>
                                        ) : (
                                            <span className="text-zinc-600 text-xl">—</span>
                                        )}
                                    </div>
                                    <div className="w-32">
                                        <CurrencySelector
                                            value={toCurrency}
                                            onChange={setToCurrency}
                                            currencies={currencies}
                                            label=""
                                            disabled={loading}
                                        />
                                    </div>
                                </div>
                                {estimate?.transactionSpeedForecast && (
                                    <p className="text-xs text-zinc-500 mt-1.5">
                                        <Clock className="w-3 h-3 inline mr-1" />
                                        {estimate.transactionSpeedForecast}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Info Row */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-zinc-800/50 rounded-xl p-3 text-center">
                                <div className="text-xs text-zinc-500 mb-1">Rate</div>
                                <div className="text-sm font-semibold text-white">
                                    {rate ? `1 = ${parseFloat(rate).toFixed(6)}` : "—"}
                                </div>
                            </div>
                            <div className="bg-zinc-800/50 rounded-xl p-3 text-center">
                                <div className="text-xs text-zinc-500 mb-1">Network Fee</div>
                                <div className="text-sm font-semibold text-white">
                                    {networkFee ? `~${networkFee}` : "Included"}
                                </div>
                            </div>
                            <div className="bg-zinc-800/50 rounded-xl p-3 text-center">
                                <div className="text-xs text-zinc-500 mb-1">Platform Fee</div>
                                <div className="text-sm font-semibold text-primary">0%</div>
                            </div>
                            <div className="bg-zinc-800/50 rounded-xl p-3 text-center">
                                <div className="text-xs text-zinc-500 mb-1">Arrival</div>
                                <div className="text-sm font-semibold text-white">5-10 min</div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                            size="lg"
                            onClick={scrollToExchange}
                            disabled={!estimate || isAmountBelowMin || false}
                            className="w-full mt-6 font-bold text-lg bg-gradient-to-r from-primary to-emerald-500 text-black hover:opacity-90 rounded-xl py-6 shadow-[0_0_30px_rgba(0,255,189,0.3)] hover:shadow-[0_0_50px_rgba(0,255,189,0.5)] transition-all disabled:opacity-50"
                        >
                            Continue to Exchange
                            <ArrowRightLeft className="ml-2 w-5 h-5" />
                        </Button>

                        {/* Features */}
                        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-zinc-500">
                            <span className="flex items-center gap-1">
                                <Shield className="w-3.5 h-3.5 text-primary" />
                                Non-custodial
                            </span>
                            <span className="flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5 text-primary" />
                                Instant
                            </span>
                            <span className="flex items-center gap-1">
                                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                                No KYC
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

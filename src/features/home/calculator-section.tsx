"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, RefreshCw, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const cryptos = [
    { symbol: "ETH", name: "Ethereum", rate: 0.0042 },
    { symbol: "BTC", name: "Bitcoin", rate: 0.000053 },
    { symbol: "USDT", name: "Tether", rate: 1 },
    { symbol: "USDC", name: "USD Coin", rate: 1 },
]

export function CalculatorSection() {
    const [sendAmount, setSendAmount] = useState("100")
    const [selectedCrypto, setSelectedCrypto] = useState(cryptos[2]) // USDT
    const [solPrice] = useState(210.50) // Mock SOL price
    const [isCalculating, setIsCalculating] = useState(false)

    const receiveAmount = parseFloat(sendAmount || "0") / solPrice

    const handleRecalculate = () => {
        setIsCalculating(true)
        setTimeout(() => setIsCalculating(false), 500)
    }

    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-primary/5 rounded-full blur-[9.375rem]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Calculate Your
                        </span>{" "}
                        <span className="text-primary">Exchange</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Real-time rates with zero hidden fees.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm p-8">
                        {/* You Send */}
                        <div className="mb-6">
                            <label className="text-sm text-zinc-400 mb-2 block">You Send</label>
                            <div className="flex gap-4">
                                <Input
                                    type="number"
                                    value={sendAmount}
                                    onChange={(e) => setSendAmount(e.target.value)}
                                    className="flex-1 bg-zinc-800 border-zinc-700 rounded-xl px-4 py-3 h-auto text-2xl font-bold focus-visible:ring-primary"
                                    placeholder="0.00"
                                />
                                <select
                                    value={selectedCrypto.symbol}
                                    onChange={(e) => setSelectedCrypto(cryptos.find(c => c.symbol === e.target.value) || cryptos[0])}
                                    className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-primary transition-colors cursor-pointer"
                                >
                                    {cryptos.map((crypto) => (
                                        <option key={crypto.symbol} value={crypto.symbol}>
                                            {crypto.symbol}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center my-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleRecalculate}
                                className="w-12 h-12 rounded-full bg-primary/10 border-primary/30 hover:bg-primary/20"
                            >
                                <motion.div
                                    animate={isCalculating ? { rotate: 360 } : {}}
                                    transition={{ duration: 0.5 }}
                                >
                                    <RefreshCw className="w-5 h-5 text-primary" />
                                </motion.div>
                            </Button>
                        </div>

                        {/* You Receive */}
                        <div className="mb-8">
                            <label className="text-sm text-zinc-400 mb-2 block">You Receive</label>
                            <div className="flex gap-4">
                                <div className="flex-1 bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3">
                                    <span className="text-2xl font-bold text-primary">
                                        {receiveAmount.toFixed(4)}
                                    </span>
                                </div>
                                <div className="bg-primary/10 border border-primary/30 rounded-xl px-6 py-3 flex items-center gap-2">
                                    <Circle className="w-6 h-6 text-primary" strokeWidth={3} />
                                    <span className="font-bold text-primary">SOL</span>
                                </div>
                            </div>
                        </div>

                        {/* Rate Info */}
                        <div className="flex items-center justify-between text-sm text-zinc-500 mb-6 px-2">
                            <span>Rate: 1 SOL = ${solPrice.toFixed(2)} {selectedCrypto.symbol}</span>
                            <span className="text-primary">0% fees</span>
                        </div>

                        {/* CTA */}
                        <Button
                            size="lg"
                            className="w-full font-bold text-lg bg-primary text-black hover:bg-primary/90 rounded-xl py-6 shadow-[0_0_1.875rem_rgba(0,255,189,0.3)] hover:shadow-[0_0_3.125rem_rgba(0,255,189,0.5)] transition-all"
                        >
                            Exchange Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

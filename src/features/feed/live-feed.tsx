"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useFeedStore, generateRandomTx } from "./feed-store"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, ExternalLink, TrendingUp, TrendingDown, Rocket, Sparkles } from "lucide-react"

export function LiveFeed() {
    const { transactions, addTransaction } = useFeedStore()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const interval = setInterval(() => {
            addTransaction(generateRandomTx())
        }, 3500)
        return () => clearInterval(interval)
    }, [addTransaction])

    if (!mounted) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
        >
            <Card className="relative h-full overflow-hidden border-2 border-zinc-800 bg-zinc-950 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col">
                {/* Gradient accent line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />

                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/30 flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-red-400" />
                                </div>
                                <motion.div
                                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-zinc-950"
                                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    Pump.fun
                                    <Badge variant="secondary" className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-[10px]">
                                        HOT
                                    </Badge>
                                </h3>
                                <p className="text-sm text-zinc-500">Real-time trades</p>
                            </div>
                        </div>
                        <Badge className="bg-red-500/10 text-red-400 border-red-500/30 animate-pulse">
                            <Sparkles className="w-3 h-3 mr-1" />
                            LIVE
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="flex-1 overflow-hidden p-4 pt-0">
                    {/* Feed container */}
                    <div className="h-[340px] overflow-hidden flex flex-col gap-2 rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-3">
                        <AnimatePresence mode="popLayout">
                            {transactions.map((tx) => (
                                <motion.div
                                    key={tx.id}
                                    layout
                                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -40, scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${tx.type === "BUY"
                                            ? "bg-green-500/5 border-green-500/20"
                                            : "bg-red-500/5 border-red-500/20"
                                        }`}
                                >
                                    {/* Icon */}
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${tx.type === "BUY"
                                            ? "bg-green-500/10"
                                            : "bg-red-500/10"
                                        }`}>
                                        {tx.type === "BUY" ? (
                                            <TrendingUp className="w-5 h-5 text-green-400" />
                                        ) : (
                                            <TrendingDown className="w-5 h-5 text-red-400" />
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold text-sm ${tx.type === "BUY" ? "text-green-400" : "text-red-400"
                                                }`}>
                                                {tx.type}
                                            </span>
                                            <span className="text-white font-semibold">{tx.amount} SOL</span>
                                        </div>
                                        <span className="text-[11px] text-zinc-600 font-mono truncate block">
                                            {tx.wallet}
                                        </span>
                                    </div>

                                    {/* Time */}
                                    <span className="text-[10px] text-zinc-600 font-medium shrink-0">
                                        {tx.time}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {transactions.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full text-zinc-600 text-sm">
                                <Activity className="w-8 h-8 mb-2 animate-pulse" />
                                Waiting for trades...
                            </div>
                        )}
                    </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                    <Button
                        asChild
                        size="lg"
                        className="w-full font-bold text-base bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_auto] animate-gradient-x text-black hover:opacity-90 rounded-xl h-14 shadow-[0_0_30px_rgba(0,255,189,0.3)] hover:shadow-[0_0_50px_rgba(0,255,189,0.5)] transition-all"
                    >
                        <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">
                            <Rocket className="w-5 h-5 mr-2" />
                            TRADE ON PUMP.FUN
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

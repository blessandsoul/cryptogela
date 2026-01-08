"use client"

import { motion } from "framer-motion"
import { Check, X, Minus } from "lucide-react"

const comparisonData = [
    {
        feature: "Non-Custodial",
        itswap: true,
        cex: false,
        others: true,
    },
    {
        feature: "No KYC Required",
        itswap: true,
        cex: false,
        others: "partial",
    },
    {
        feature: "Instant Swaps",
        itswap: true,
        cex: true,
        others: "partial",
    },
    {
        feature: "Hidden Fees",
        itswap: false,
        cex: true,
        others: "partial",
    },
    {
        feature: "24/7 Support",
        itswap: true,
        cex: true,
        others: false,
    },
    {
        feature: "Pump.fun Integration",
        itswap: true,
        cex: false,
        others: false,
    },
]

function StatusIcon({ value }: { value: boolean | string }) {
    if (value === true) {
        return <Check className="w-5 h-5 text-primary" />
    }
    if (value === false) {
        return <X className="w-5 h-5 text-zinc-600" />
    }
    return <Minus className="w-5 h-5 text-zinc-500" />
}

export function ComparisonSection() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Why Choose
                        </span>{" "}
                        <span className="text-primary">it</span><span className="text-purple-500">Swap</span>?
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        See how we compare to centralized exchanges and other DEX aggregators.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="rounded-3xl border border-zinc-800 overflow-hidden bg-zinc-900/50 backdrop-blur-sm">
                        {/* Header */}
                        <div className="grid grid-cols-4 gap-4 p-6 border-b border-zinc-800 bg-zinc-900/80">
                            <div className="text-sm font-medium text-zinc-400">Feature</div>
                            <div className="text-center">
                                <span className="text-lg font-bold"><span className="text-primary">it</span><span className="text-purple-500">Swap</span></span>
                            </div>
                            <div className="text-center">
                                <span className="text-sm font-medium text-zinc-400">CEX</span>
                            </div>
                            <div className="text-center">
                                <span className="text-sm font-medium text-zinc-400">Other DEX</span>
                            </div>
                        </div>

                        {/* Rows */}
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={row.feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`grid grid-cols-4 gap-4 p-6 ${index !== comparisonData.length - 1 ? "border-b border-zinc-800/50" : ""
                                    } hover:bg-zinc-800/30 transition-colors`}
                            >
                                <div className="text-sm font-medium text-white">{row.feature}</div>
                                <div className="flex justify-center">
                                    <StatusIcon value={row.itswap} />
                                </div>
                                <div className="flex justify-center">
                                    <StatusIcon value={row.cex} />
                                </div>
                                <div className="flex justify-center">
                                    <StatusIcon value={row.others} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

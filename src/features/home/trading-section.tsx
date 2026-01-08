"use client"

import { motion } from "framer-motion"
import { ExchangeWidget } from "@/features/exchange/exchange-widget"

export function TradingSection() {
    return (
        <section id="exchange" className="py-32 relative">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[40rem] bg-primary/5 rounded-full blur-[10rem]" />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,255,189,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,189,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '6rem 6rem'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                            Trade on
                        </span>{" "}
                        <span className="text-primary">it</span><span className="text-purple-500">Swap</span>
                    </h2>

                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                        Exchange any cryptocurrency instantly with the best rates. Non-custodial, no KYC, no limits.
                    </p>
                </motion.header>

                {/* Exchange Widget - Full Width */}
                <div className="max-w-5xl mx-auto">
                    <ExchangeWidget />
                </div>
            </div>
        </section>
    )
}

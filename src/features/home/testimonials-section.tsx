"use client"

import { motion } from "framer-motion"
import { TrendingUp, ArrowLeftRight } from "lucide-react"

const TOKEN_ADDRESS = "a3W4qutoEJA4232T2gwZUfgYJTetr96pU4SJMwppump"

export function TestimonialsSection() {
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
                            Live
                        </span>{" "}
                        <span className="text-primary">Trading</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Track real-time charts and trade directly with DexTools integration.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto rounded-lg border-2 border-zinc-800 overflow-hidden bg-black"
                >
                    
                    <div className="flex flex-wrap">
                        <div className="flex-[7] min-w-[600px] h-[600px]">
                            <iframe
                                src={`https://www.dextools.io/widget-chart/en/solana/pe-light/${TOKEN_ADDRESS}?theme=dark`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                title="DexTools Chart"
                            />
                        </div>

                        <div className="flex-[3] min-w-[350px] h-[600px] border-l border-zinc-800">
                            <iframe
                                src={`https://www.dextools.io/widget-aggregator/en/swap/solana/${TOKEN_ADDRESS}?theme=dark`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                title="DexTools Swap"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

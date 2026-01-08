"use client"

import { motion } from "framer-motion"

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
                        Track real-time charts with Birdeye.so live integration.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto rounded-lg border-2 border-zinc-800 overflow-hidden bg-black"
                >
                    <iframe
                        src="https://birdeye.so/tv-widget/AbeDBXvqGnmcvX8NtQg5qgREFTw7HynkCc4u97xcpump/So11111111111111111111111111111111111111112?chain=solana&viewMode=base%2Fquote&chartInterval=1&chartType=Candle&chartTimezone=Asia%2FTbilisi&chartLeftToolbar=hide&theme=dark&cssCustomProperties=--tv-color-platform-background%3A%23000000&cssCustomProperties=--tv-color-pane-background%3A%23000000&chartOverrides=paneProperties.backgroundType%3Agradient&chartOverrides=paneProperties.background%3Argba%280%2C+0%2C+0%2C+1%29"
                        width="100%"
                        height="600"
                        style={{ border: 0 }}
                        title="Birdeye Live Chart"
                        allowFullScreen
                    />
                </motion.div>
            </div>
        </section>
    )
}

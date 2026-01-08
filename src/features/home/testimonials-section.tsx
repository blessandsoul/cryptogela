"use client"

import { motion } from "framer-motion"
import Script from "next/script"

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
                        Track real-time charts and trade directly with Jupiter integration.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto rounded-lg border-2 border-zinc-800 overflow-hidden bg-black"
                >
                    <div style={{ width: "100%", maxWidth: "1000px", margin: "auto", background: "#000", border: "2px solid #333", borderRadius: "12px", overflow: "hidden" }}>
                        
                        <div style={{ height: "500px", width: "100%", borderBottom: "2px solid #333" }}>
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://birdeye.so/tv-widget/AbeDBXvqGnmcvX8NtQg5qgREFTw7HynkCc4u97xcpump?chain=solana&viewMode=pair&chartInterval=1m&chartType=CANDLE&theme=dark" 
                                style={{ border: 0 }}
                                title="Birdeye Live Chart"
                            />
                        </div>

                        <div id="jupiter-terminal" style={{ height: "500px", width: "100%", padding: "10px", background: "#111" }}></div>

                    </div>
                </motion.div>
            </div>

            <Script src="https://terminal.jup.ag/main-v3.js" strategy="afterInteractive" />
            <Script id="jupiter-init" strategy="afterInteractive">
                {`
                    window.Jupiter.init({
                        displayMode: "integrated",
                        integratedTargetId: "jupiter-terminal",
                        endpoint: "https://api.mainnet-beta.solana.com",
                        formProps: {
                            initialOutputMint: "AbeDBXvqGnmcvX8NtQg5qgREFTw7HynkCc4u97xcpump",
                            fixedOutputMint: true,
                            initialInputMint: "So11111111111111111111111111111111111111112", 
                        },
                        widgetStyle: {
                            initialTab: "swap"
                        }
                    });
                `}
            </Script>
        </section>
    )
}

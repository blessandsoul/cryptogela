"use client"

import { motion } from "framer-motion"

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
                    
                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <iframe 
                                id="dextools-widget"
                                title="DEXTools Trading Chart"
                                width="100%"
                                className="h-[400px] md:h-[600px] w-full"
                                src="https://www.dextools.io/widget-chart/en/solana/pe-light/HAA23Mf9ddHoLqZK1GDcfSh2rQ5yP9Jmat2aY4P2mdNw?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
                                style={{ border: 0 }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

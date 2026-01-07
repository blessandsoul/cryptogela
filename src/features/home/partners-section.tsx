"use client"

import { motion } from "framer-motion"
import { Wallet, Ghost, Orbit, Zap, Fish, Sparkles } from "lucide-react"

const partners = [
    { name: "Solana", Icon: Orbit },
    { name: "Phantom", Icon: Ghost },
    { name: "Jupiter", Icon: Orbit },
    { name: "Raydium", Icon: Zap },
    { name: "Orca", Icon: Fish },
    { name: "Magic Eden", Icon: Sparkles },
]

export function PartnersSection() {
    return (
        <section className="py-16 border-y border-zinc-800/50 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950 to-black" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-sm uppercase tracking-widest text-zinc-500 font-medium">
                        Trusted by the Best in Solana
                    </p>
                </motion.div>

                {/* Logo Strip */}
                <div className="relative">
                    <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="flex items-center gap-3 text-zinc-500 hover:text-primary transition-colors cursor-pointer group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <partner.Icon className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(0,255,189,0.5)]" />
                                </motion.div>
                                <span className="text-lg font-medium hidden md:block">{partner.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

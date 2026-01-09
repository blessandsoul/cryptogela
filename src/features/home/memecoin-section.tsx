"use client"

import { motion } from "framer-motion"
import { Twitter, Send, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AxiomIcon } from "@/components/ui/axiom-icon"
import { PumpFunIcon } from "@/components/ui/pumpfun-icon"
import Image from "next/image"

const socialLinks = [
    {
        name: "PumpFun",
        description: "Trade $ITSWAP on Pump.fun",
        icon: PumpFunIcon,
        href: "https://pump.fun",
        color: "from-transparent to-transparent",
        hoverGlow: "rgba(255, 255, 255, 0.3)",
    },
    {
        name: "Twitter",
        description: "Follow us for updates",
        icon: Twitter,
        href: "https://x.com/itswapexchange",
        color: "from-transparent to-transparent",
        hoverGlow: "rgba(59, 130, 246, 0.4)",
    },
    {
        name: "Telegram",
        description: "Join our community",
        icon: Send,
        href: "http://t.me/itswapexchange",
        color: "from-transparent to-transparent",
        hoverGlow: "rgba(34, 211, 238, 0.4)",
    },
    {
        name: "Axiom",
        description: "Professional trading platform",
        icon: AxiomIcon,
        href: "https://axiom.trade",
        color: "from-transparent to-transparent",
        hoverGlow: "rgba(255, 255, 255, 0.3)",
    },
]

export function MemecoinSection() {
    
    return (
        <section id="memecoin" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />
            
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        <span className="text-primary">Follow us</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Connect with our community and stay updated on the latest $ITSWAP news, features, and exclusive opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group"
                            >
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative h-full p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                                >
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at center, ${link.hoverGlow}, transparent 70%)`
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} p-0.5 group-hover:shadow-[0_0_40px] transition-all duration-300`}
                                                style={{ boxShadow: `0 0 0 ${link.hoverGlow}` }}
                                            >
                                                <div className="w-full h-full rounded-2xl bg-zinc-900 flex items-center justify-center">
                                                    {link.icon && <link.icon className="w-8 h-8 text-white" />}
                                                </div>
                                            </div>
                                            <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-primary transition-colors" />
                                        </div>

                                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors">
                                            {link.name}
                                        </h3>
                                        <p className="text-zinc-500 text-sm mb-6">
                                            {link.description}
                                        </p>

                                        <Button
                                            variant="outline"
                                            className="w-full bg-transparent border-zinc-700 hover:border-primary hover:bg-primary/10 text-white group-hover:text-primary transition-all"
                                        >
                                            Visit Now
                                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </motion.div>
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-zinc-600 text-sm">
                        Be part of the fastest-growing memecoin community
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

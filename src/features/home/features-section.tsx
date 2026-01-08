"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Lock, RefreshCw } from "lucide-react"

const features = [
    {
        icon: Shield,
        title: "Non-Custodial",
        description: "Your keys, your crypto. We never hold your funds.",
    },
    {
        icon: Zap,
        title: "Instant Swaps",
        description: "Lightning-fast exchanges powered by top-tier APIs.",
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        description: "Bank-grade encryption and secure infrastructure.",
    },
    {
        icon: RefreshCw,
        title: "Best Rates",
        description: "Aggregated rates from multiple liquidity sources.",
    },
]

export function FeaturesSection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Why Choose
                        </span>{" "}
                        <span className="text-primary">it</span><span className="text-purple-500">Swap</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Built for traders who demand speed, security, and transparency.
                    </p>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Glassmorphism Card */}
                            <div className="relative h-full p-6 rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />

                                {/* Icon */}
                                <div className="relative mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(0,255,189,0.3)] transition-all duration-300">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="relative text-xl font-bold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="relative text-sm text-zinc-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Fingerprint, CheckCircle } from "lucide-react"

const securityFeatures = [
    {
        icon: Shield,
        title: "Non-Custodial",
        description: "Your keys stay with you. We never touch your funds.",
    },
    {
        icon: Lock,
        title: "End-to-End Encryption",
        description: "Military-grade AES-256 encryption for all transactions.",
    },
    {
        icon: Eye,
        title: "No KYC Required",
        description: "Trade anonymously. Your privacy is our priority.",
    },
    {
        icon: Fingerprint,
        title: "Audited Smart Contracts",
        description: "All integrations audited by top security firms.",
    },
]

const badges = [
    "SSL Secured",
    "SOC2 Type II",
    "Non-Custodial",
    "No Data Storage",
]

export function SecuritySection() {
    return (
        <section className="py-32 relative overflow-hidden border-t border-zinc-800/50">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Your Security is
                        </span>{" "}
                        <span className="text-primary">Our Priority</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Built with the highest security standards in the industry.
                    </p>
                </motion.div>

                {/* Security Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {securityFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-zinc-500">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Security Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    {badges.map((badge) => (
                        <div
                            key={badge}
                            className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 flex items-center gap-2"
                        >
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {badge}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

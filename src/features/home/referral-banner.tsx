"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gift, Users, ArrowRight } from "lucide-react"

export function ReferralBanner() {
    return (
        <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,189,0.1),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                        <Gift className="w-4 h-4" />
                        Referral Program
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Invite Friends,
                        </span>{" "}
                        <span className="text-primary">Earn Rewards</span>
                    </h2>

                    <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Get <span className="text-primary font-bold">$10 in SOL</span> for every friend who makes their first swap.
                        Your friends get <span className="text-primary font-bold">$5 bonus</span> too!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Button
                            asChild
                            size="lg"
                            className="font-bold bg-primary text-black hover:bg-primary/90 rounded-xl shadow-[0_0_30px_rgba(0,255,189,0.3)]"
                        >
                            <Link href="#exchange">
                                Get Your Referral Link <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <div className="flex items-center gap-2 text-zinc-500">
                            <Users className="w-5 h-5" />
                            <span>1,234 users earned rewards this week</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-3xl font-black text-primary">$250K+</div>
                            <div className="text-sm text-zinc-500">Paid to Referrers</div>
                        </div>
                        <div className="h-10 w-px bg-zinc-800" />
                        <div className="text-center">
                            <div className="text-3xl font-black text-white">15,000+</div>
                            <div className="text-sm text-zinc-500">Successful Referrals</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

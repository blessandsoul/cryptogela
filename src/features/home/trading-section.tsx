"use client"

import { motion } from "framer-motion"
import { ExchangeWidget } from "@/features/exchange/exchange-widget"
import { LiveFeed } from "@/features/feed/live-feed"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDownUp, Activity, Sparkles, Zap, TrendingUp } from "lucide-react"

export function TradingSection() {
    return (
        <section id="exchange" className="py-32 relative overflow-hidden">
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
                    className="text-center mb-16"
                >
                    <Badge
                        variant="outline"
                        className="mb-6 px-4 py-2 bg-primary/10 border-primary/30 text-primary"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Start In Seconds
                    </Badge>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                            Trade With
                        </span>{" "}
                        <span className="text-primary">Confidence</span>
                    </h2>

                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                        Get SOL instantly from any crypto, then trade $ITSWAP on Pump.fun
                    </p>
                </motion.header>

                {/* Desktop: Two columns / Mobile: Tabs */}
                <div className="max-w-6xl mx-auto">
                    {/* Mobile Tabs */}
                    <div className="lg:hidden">
                        <Tabs defaultValue="exchange" className="w-full">
                            <TabsList className="w-full grid grid-cols-2 h-14 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-1 mb-6">
                                <TabsTrigger
                                    value="exchange"
                                    className="rounded-xl h-full data-[state=active]:bg-primary data-[state=active]:text-black font-semibold transition-all"
                                >
                                    <ArrowDownUp className="w-4 h-4 mr-2" />
                                    Get SOL
                                </TabsTrigger>
                                <TabsTrigger
                                    value="pump"
                                    className="rounded-xl h-full data-[state=active]:bg-primary data-[state=active]:text-black font-semibold transition-all"
                                >
                                    <Activity className="w-4 h-4 mr-2" />
                                    Buy $ITSWAP
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="exchange" className="mt-0">
                                <ExchangeWidget />
                            </TabsContent>

                            <TabsContent value="pump" className="mt-0">
                                <LiveFeed />
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-10">
                        {/* Step 1: Exchange */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="mb-4 p-4 bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary text-black font-black text-lg flex items-center justify-center shadow-[0_0_1.5rem_rgba(0,255,189,0.3)]">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Get SOL</h3>
                                        <p className="text-sm text-zinc-500">Exchange any crypto instantly</p>
                                    </div>
                                    <Badge className="ml-auto bg-primary/10 text-primary border-primary/30">
                                        <Zap className="w-3 h-3 mr-1" />
                                        Instant
                                    </Badge>
                                </div>
                            </Card>
                            <ExchangeWidget />
                        </motion.div>

                        {/* Step 2: Pump.fun */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="mb-4 p-4 bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary text-black font-black text-lg flex items-center justify-center shadow-[0_0_1.5rem_rgba(0,255,189,0.3)]">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Buy $ITSWAP</h3>
                                        <p className="text-sm text-zinc-500">Trade on Pump.fun</p>
                                    </div>
                                    <Badge className="ml-auto bg-primary/10 text-primary border-primary/30">
                                        <TrendingUp className="w-3 h-3 mr-1" />
                                        Live
                                    </Badge>
                                </div>
                            </Card>
                            <LiveFeed />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

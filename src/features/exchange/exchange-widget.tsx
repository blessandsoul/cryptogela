"use client"

import { motion } from "framer-motion"
import { ArrowDownUp, Shield, Zap, Clock, CheckCircle, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExchangeWidget() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className="relative overflow-hidden border-2 border-zinc-800 bg-zinc-950 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {/* Gradient accent line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary" />

                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-500/10 border border-primary/30 flex items-center justify-center">
                                    <ArrowDownUp className="w-6 h-6 text-primary" />
                                </div>
                                <motion.div
                                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-zinc-950"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    ChangeNow
                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px]">
                                        INSTANT
                                    </Badge>
                                </h3>
                                <p className="text-sm text-zinc-500">500+ cryptocurrencies</p>
                            </div>
                        </div>
                        <Badge className="bg-green-500/10 text-green-400 border-green-500/30">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Live
                        </Badge>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    {/* Widget iframe */}
                    <div className="relative border-y border-zinc-800/50">
                        <iframe
                            id="iframe-widget"
                            src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=1&amountFiat=1500&backgroundColor=09090b&darkMode=true&from=btc&fromFiat=eur&horizontal=false&isFiat=false&lang=en-US&link_id=2769efae5d4a4b&locales=false&logo=false&primaryColor=00ffbd&to=sol&toFiat=eth&toTheMoon=false"
                            className="h-[420px] w-full border-none bg-zinc-950"
                            loading="lazy"
                            title="ChangeNow Exchange Widget"
                        />
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-3 divide-x divide-zinc-800/50 bg-zinc-900/50">
                        <div className="flex flex-col items-center gap-1 py-4">
                            <Shield className="w-5 h-5 text-primary" />
                            <span className="text-xs font-medium text-zinc-400">Non-custodial</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 py-4">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-xs font-medium text-zinc-400">0% fees</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 py-4">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="text-xs font-medium text-zinc-400">5-30 min</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

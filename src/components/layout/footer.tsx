import Link from "next/link";
import { Twitter, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="relative w-full border-t border-white/5 bg-black/50 backdrop-blur-xl">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            itSwap.fun
                        </h3>
                        <p className="text-sm text-muted-foreground/60 mb-6">
                            Non-custodial crypto exchange. 500+ coins. Zero platform fees. No KYC required.
                        </p>
                        {/* Trust Badges */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>Non-Custodial</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>No KYC Required</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>0% Platform Fees</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>500+ Supported Coins</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#trading" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Swap Crypto
                                </Link>
                            </li>
                            <li>
                                <Link href="/#calculator" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Calculator
                                </Link>
                            </li>
                            <li>
                                <Link href="/#trading" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Buy $ITSWAP
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Supported Coins
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/company/about" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/how-it-works" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/security" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/audits" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Audits
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/* Legal Column */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/legal/terms" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/privacy" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/cookies" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/disclaimer" className="text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 pt-12 border-t border-white/5">
                    <div className="max-w-xl mx-auto text-center">
                        <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
                        <p className="text-sm text-muted-foreground/60 mb-6">
                            Get swap alerts, crypto news, and platform updates delivered to your inbox.
                        </p>
                        <form className="flex gap-2 max-w-md mx-auto">
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/40"
                            />
                            <Button 
                                type="submit" 
                                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                            >
                                Subscribe
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Social & Contact Section */}
                <div className="mt-12 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground/60">Follow us:</span>
                            <a 
                                href="https://twitter.com/itswapfun" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
                            >
                                <Twitter className="h-4 w-4 text-muted-foreground/60" />
                            </a>
                            <a 
                                href="https://t.me/itswapfun" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
                            >
                                <Send className="h-4 w-4 text-muted-foreground/60" />
                            </a>
                            <a 
                                href="https://pump.fun/coin/itswap" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground/60 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all"
                            >
                                Pump.fun
                            </a>
                        </div>

                        {/* Contact */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground/60">Support:</span>
                            <a 
                                href="mailto:support@itswap.fun" 
                                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                support@itswap.fun
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/80">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/40">
                        <p>© 2026 itSwap.fun. All rights reserved. | Powered by Solana</p>
                        <p className="text-center md:text-right">
                            Cryptocurrency trading involves risk. Always do your own research (DYOR).
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

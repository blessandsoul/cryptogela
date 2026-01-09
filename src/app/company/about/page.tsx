import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Shield, Zap, Users, Globe } from "lucide-react";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                    About itSwap.fun
                </h1>
                <p className="text-xl text-muted-foreground/80 mb-12">
                    The future of decentralized cryptocurrency exchange
                </p>

                <div className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-4">Our Mission</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg">
                            At itSwap.fun, we believe that cryptocurrency trading should be accessible, private, and fair for everyone. Our mission is to provide a seamless, non-custodial exchange experience that puts users in complete control of their assets while offering the best rates and fastest execution times in the industry.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">What Makes Us Different</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Non-Custodial</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We never hold your funds. Your private keys remain yours, and all transactions are executed directly on the blockchain. True self-custody, as crypto was meant to be.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">No KYC Required</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Your privacy matters. We don't require identity verification, account creation, or personal information. Trade freely and anonymously, the way it should be.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Zap className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Zero Platform Fees</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We charge 0% platform fees. You only pay the standard blockchain network fees. No hidden charges, no surprises. What you see is what you get.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">500+ Cryptocurrencies</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Access to over 500 cryptocurrencies including Bitcoin, Ethereum, Solana, and hundreds of altcoins and meme coins. All in one place.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-4">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground/80 leading-relaxed text-lg">
                            <p>
                                itSwap.fun was born from a simple observation: cryptocurrency exchanges had become too complicated, too invasive, and too expensive. Users were forced to create accounts, submit personal documents, and pay excessive fees just to swap their digital assets.
                            </p>
                            <p>
                                We knew there had to be a better way. Leveraging the power of decentralized finance (DeFi) and blockchain technology, we built itSwap.fun to be the exchange we wished existed—one that respects user privacy, eliminates unnecessary fees, and provides instant access to hundreds of cryptocurrencies.
                            </p>
                            <p>
                                Built on Solana's high-performance blockchain infrastructure, itSwap.fun combines the speed and efficiency of modern technology with the core principles of decentralization and user sovereignty.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-4">Our Values</h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We believe privacy is a fundamental right. We collect minimal data and never require KYC verification.
                                </p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    All our smart contracts are audited and publicly verifiable. No hidden fees, no surprises.
                                </p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-xl font-semibold text-white mb-2">User Empowerment</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    You control your funds, your data, and your trading decisions. We're just the tool that makes it happen.
                                </p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-6">
                                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We continuously improve our platform with cutting-edge technology, from AI support to advanced trading features.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-4">By The Numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                    500+
                                </div>
                                <p className="text-sm text-muted-foreground/60">Supported Coins</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                    0%
                                </div>
                                <p className="text-sm text-muted-foreground/60">Platform Fees</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                    5-30
                                </div>
                                <p className="text-sm text-muted-foreground/60">Minutes Avg Swap</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                                    24/7
                                </div>
                                <p className="text-sm text-muted-foreground/60">AI Support</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-white mb-4">Join The Socials</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-6">
                            itSwap.fun is more than just an exchange—it's a movement towards a more open, fair, and decentralized financial system. Join thousands of users who have already made the switch to true financial freedom.
                        </p>
                        <Link 
                            href="/#trading"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-semibold transition-all"
                        >
                            Start Trading Now
                            <ArrowLeft className="h-4 w-4 rotate-180" />
                        </Link>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-4">Contact Us</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            Have questions or feedback? We'd love to hear from you.
                        </p>
                        <div className="space-y-2">
                            <p className="text-muted-foreground/80">
                                <strong className="text-white">Email:</strong>{" "}
                                <a href="mailto:support@itswap.fun" className="text-purple-400 hover:text-purple-300">
                                    support@itswap.fun
                                </a>
                            </p>
                            <p className="text-muted-foreground/80">
                                <strong className="text-white">Twitter:</strong>{" "}
                                <a href="https://x.com/itswapexchange" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                                    @itswapfun
                                </a>
                            </p>
                            <p className="text-muted-foreground/80">
                                <strong className="text-white">Telegram:</strong>{" "}
                                <a href="https://t.me/itswapfun" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                                    t.me/itswapfun
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

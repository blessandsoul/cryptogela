import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Wallet, Search, RefreshCw, CheckCircle, Clock, Shield } from "lucide-react";

export default function HowItWorks() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            
            <div className="container mx-auto px-4 py-24 max-w-5xl">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground/60 hover:text-purple-400 transition-colors mb-8"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                    How itSwap.fun Works
                </h1>
                <p className="text-xl text-muted-foreground/80 mb-12">
                    Simple, fast, and secure cryptocurrency swaps in just a few clicks
                </p>

                <div className="space-y-16">
                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-8">The Swap Process</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                                        1
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Search className="h-6 w-6 text-purple-400" />
                                        <h3 className="text-2xl font-semibold text-white">Select Your Tokens</h3>
                                    </div>
                                    <p className="text-muted-foreground/80 leading-relaxed text-lg mb-4">
                                        Choose which cryptocurrency you want to send and which one you want to receive. We support over 500 cryptocurrencies including Bitcoin, Ethereum, Solana, USDT, and hundreds of altcoins and meme coins.
                                    </p>
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                        <p className="text-sm text-muted-foreground/60">
                                            <strong className="text-white">Example:</strong> Send Bitcoin (BTC) → Receive Solana (SOL)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                                        2
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Wallet className="h-6 w-6 text-purple-400" />
                                        <h3 className="text-2xl font-semibold text-white">Enter Amount & Wallet Address</h3>
                                    </div>
                                    <p className="text-muted-foreground/80 leading-relaxed text-lg mb-4">
                                        Specify how much you want to swap and provide your receiving wallet address. Our calculator instantly shows you the exact amount you'll receive, including all network fees. No hidden charges.
                                    </p>
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                                        <p className="text-sm text-muted-foreground/60">
                                            <strong className="text-white">Important:</strong> Double-check your wallet address. Blockchain transactions are irreversible.
                                        </p>
                                        <p className="text-sm text-muted-foreground/60">
                                            <strong className="text-white">Minimum:</strong> ~$10 USD equivalent
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <RefreshCw className="h-6 w-6 text-purple-400" />
                                        <h3 className="text-2xl font-semibold text-white">Send Your Crypto</h3>
                                    </div>
                                    <p className="text-muted-foreground/80 leading-relaxed text-lg mb-4">
                                        We'll generate a unique deposit address for your transaction. Send the exact amount of cryptocurrency to this address from your wallet. You can use any wallet you prefer—hardware, software, or exchange wallet.
                                    </p>
                                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                                        <p className="text-sm text-yellow-200/90">
                                            <strong>⚠️ Critical:</strong> Send ONLY the specified cryptocurrency to the deposit address. Sending a different coin will result in permanent loss of funds.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                                        4
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Clock className="h-6 w-6 text-purple-400" />
                                        <h3 className="text-2xl font-semibold text-white">Wait for Confirmation</h3>
                                    </div>
                                    <p className="text-muted-foreground/80 leading-relaxed text-lg mb-4">
                                        Once we detect your transaction on the blockchain, our system automatically processes your swap. The time required depends on the blockchain network's confirmation speed and current congestion.
                                    </p>
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                                        <p className="text-sm text-muted-foreground/60">
                                            <strong className="text-white">Average Times:</strong>
                                        </p>
                                        <ul className="text-sm text-muted-foreground/60 space-y-1 ml-4">
                                            <li>• Solana (SOL): Less than 1 minute</li>
                                            <li>• Ethereum (ETH): 5-15 minutes</li>
                                            <li>• Bitcoin (BTC): 10-30 minutes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                                        5
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle className="h-6 w-6 text-green-400" />
                                        <h3 className="text-2xl font-semibold text-white">Receive Your Crypto</h3>
                                    </div>
                                    <p className="text-muted-foreground/80 leading-relaxed text-lg mb-4">
                                        Your swapped cryptocurrency is automatically sent directly to your wallet address. No manual withdrawal needed. You maintain full control of your funds throughout the entire process.
                                    </p>
                                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                                        <p className="text-sm text-green-200/90">
                                            <strong>✓ Complete:</strong> You can track your transaction on the blockchain explorer using the transaction hash we provide.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-white mb-6">Behind The Scenes</h2>
                        <div className="space-y-6 text-muted-foreground/80 leading-relaxed text-lg">
                            <p>
                                <strong className="text-white">Liquidity Aggregation:</strong> itSwap.fun connects to multiple decentralized liquidity providers and exchanges to find you the best rates. We automatically route your swap through the most efficient path, ensuring optimal pricing and minimal slippage.
                            </p>
                            <p>
                                <strong className="text-white">Smart Contract Execution:</strong> All swaps are executed through audited smart contracts on the blockchain. These contracts are immutable and transparent, ensuring your transaction is processed exactly as specified without any possibility of manipulation.
                            </p>
                            <p>
                                <strong className="text-white">Non-Custodial Architecture:</strong> We never hold your funds. Your cryptocurrency goes directly from your wallet to the blockchain smart contracts and then to your destination wallet. We simply facilitate the connection—you remain in control at all times.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Key Features</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Real-Time Price Updates</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Our platform continuously monitors market prices across multiple exchanges to provide you with accurate, real-time exchange rates. What you see is what you get.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Automatic Best Rate Selection</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We automatically compare rates from multiple liquidity sources and select the best one for your swap. No need to shop around—we do it for you.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Transaction Tracking</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Track your swap status in real-time with blockchain explorer links. Full transparency from start to finish.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">24/7 AI Support</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Our AI-powered chatbot is available around the clock to answer questions, provide guidance, and help resolve any issues.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Security Measures</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
                                <Shield className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">AES-256 Encryption</h3>
                                    <p className="text-muted-foreground/80 leading-relaxed">
                                        All data transmitted through our platform is protected with military-grade AES-256 encryption.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
                                <Shield className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Smart Contract Audits</h3>
                                    <p className="text-muted-foreground/80 leading-relaxed">
                                        All smart contracts used in our swaps are audited by reputable third-party security firms.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6">
                                <Shield className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">No Private Key Access</h3>
                                    <p className="text-muted-foreground/80 leading-relaxed">
                                        We never ask for or have access to your private keys. You maintain complete control of your assets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Do I need to create an account?</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    No. itSwap.fun is completely account-free. Just enter your swap details and go.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">What fees do you charge?</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We charge 0% platform fees. You only pay the standard blockchain network fees (gas fees) which go directly to blockchain validators, not to us.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Can I cancel a swap?</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Once you send cryptocurrency to the deposit address, the transaction cannot be canceled. Blockchain transactions are irreversible by design.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">What if my swap takes longer than expected?</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Network congestion can sometimes cause delays. You can track your transaction on the blockchain explorer. If issues persist beyond expected times, contact our support at support@itswap.fun.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-4">Ready to Get Started?</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-6">
                            Experience the fastest, most secure way to swap cryptocurrencies
                        </p>
                        <Link 
                            href="/#trading"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-semibold text-lg transition-all"
                        >
                            Start Your First Swap
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

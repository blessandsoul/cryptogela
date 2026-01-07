import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Server, Key, AlertTriangle, CheckCircle } from "lucide-react";

export default function Security() {
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

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Shield className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Security at itSwap.fun
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground/80 mb-12">
                    Your security is our top priority. Learn how we protect your assets and data.
                </p>

                <div className="space-y-16">
                    <section className="bg-green-500/10 border border-green-500/30 rounded-lg p-8">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="h-8 w-8 text-green-400 flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">Non-Custodial = Maximum Security</h2>
                                <p className="text-muted-foreground/80 leading-relaxed text-lg">
                                    The most secure way to handle cryptocurrency is to never give anyone else control of it. That's why itSwap.fun is 100% non-custodial. We never hold, store, or have access to your funds or private keys. Your cryptocurrency goes directly from your wallet to the blockchain smart contracts and then to your destination wallet. This eliminates the single biggest security risk in cryptocurrency: centralized custody.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-8">Our Security Infrastructure</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Lock className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">AES-256 Encryption</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    All data transmitted through our platform is protected with military-grade AES-256 encryption. This is the same encryption standard used by governments and financial institutions worldwide to protect classified information.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Server className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">SSL/TLS Security</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    All connections to itSwap.fun are secured with HTTPS using the latest TLS 1.3 protocol. This ensures that all communication between your browser and our servers is encrypted and protected from interception.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Smart Contract Security</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    All smart contracts used in our swap process are thoroughly audited by reputable third-party security firms. We only integrate with battle-tested, audited protocols with proven security track records.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Eye className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Real-Time Monitoring</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Our systems continuously monitor for suspicious activity, unusual transaction patterns, and potential security threats. We employ advanced anomaly detection to identify and prevent fraud attempts.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Key className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">No Private Key Storage</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We never ask for, store, or have access to your private keys or seed phrases. You maintain complete control of your cryptocurrency at all times. If anyone claiming to be from itSwap.fun asks for your private keys, it's a scam.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">DDoS Protection</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Our infrastructure is protected by enterprise-grade DDoS mitigation services to ensure the platform remains available even during large-scale attacks.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Privacy Protection</h2>
                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">No KYC Required</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We don't require identity verification, which means your personal information is never at risk of being leaked or stolen from our databases. You can trade completely anonymously.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Minimal Data Collection</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    We collect only the minimum data necessary to provide our service: wallet addresses (which are public by nature) and transaction details. We don't collect names, emails (unless you voluntarily subscribe), phone numbers, or any other personal information.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">No Account Database</h3>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    Since we don't require accounts, there's no user database to hack. Your information can't be stolen from us because we don't have it in the first place.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Blockchain Security</h2>
                        <div className="space-y-4 text-muted-foreground/80 leading-relaxed text-lg">
                            <p>
                                <strong className="text-white">Immutable Transactions:</strong> All swaps are executed on public blockchains, which means every transaction is permanently recorded and verifiable. This transparency ensures accountability and makes fraud extremely difficult.
                            </p>
                            <p>
                                <strong className="text-white">Decentralized Execution:</strong> Your swaps are processed by decentralized smart contracts, not by our servers. This means there's no central point of failure that could be compromised.
                            </p>
                            <p>
                                <strong className="text-white">Multi-Signature Verification:</strong> Critical operations require multiple cryptographic signatures, adding an extra layer of security against unauthorized actions.
                            </p>
                        </div>
                    </section>

                    <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-8">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">Security Best Practices for Users</h2>
                                <p className="text-muted-foreground/80 leading-relaxed mb-4">
                                    While we implement robust security measures, your personal security practices are equally important:
                                </p>
                                <ul className="space-y-3 text-muted-foreground/80">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-white">Verify the URL:</strong> Always ensure you're on the official itswap.fun domain. Bookmark our site to avoid phishing attempts.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-white">Double-Check Addresses:</strong> Always verify wallet addresses before confirming transactions. Blockchain transactions are irreversible.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-white">Use Hardware Wallets:</strong> For large amounts, consider using a hardware wallet for maximum security.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-white">Beware of Scams:</strong> We will NEVER ask for your private keys, seed phrases, or passwords. Anyone claiming to be from itSwap.fun who asks for these is a scammer.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-white">Keep Software Updated:</strong> Ensure your browser, operating system, and wallet software are always up to date with the latest security patches.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span><strong className="text-white">Use Strong Passwords:</strong> If you use a software wallet, protect it with a strong, unique password.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Common Threats & How We Protect You</h2>
                        <div className="space-y-4">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Phishing Attacks</h3>
                                <p className="text-muted-foreground/80 leading-relaxed mb-3">
                                    <strong className="text-white">Threat:</strong> Scammers create fake websites that look like itSwap.fun to steal your cryptocurrency.
                                </p>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    <strong className="text-white">Protection:</strong> Always verify you're on the official itswap.fun domain. Look for the padlock icon in your browser's address bar indicating a secure HTTPS connection.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Man-in-the-Middle Attacks</h3>
                                <p className="text-muted-foreground/80 leading-relaxed mb-3">
                                    <strong className="text-white">Threat:</strong> Attackers intercept communication between you and our servers to steal information.
                                </p>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    <strong className="text-white">Protection:</strong> All connections are encrypted with TLS 1.3, making interception virtually impossible.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Smart Contract Exploits</h3>
                                <p className="text-muted-foreground/80 leading-relaxed mb-3">
                                    <strong className="text-white">Threat:</strong> Vulnerabilities in smart contracts could be exploited to steal funds.
                                </p>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    <strong className="text-white">Protection:</strong> We only use audited smart contracts from reputable protocols with proven security records. See our <Link href="/company/audits" className="text-purple-400 hover:text-purple-300">Audits page</Link> for details.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-2">Database Breaches</h3>
                                <p className="text-muted-foreground/80 leading-relaxed mb-3">
                                    <strong className="text-white">Threat:</strong> Hackers gain access to user databases to steal personal information.
                                </p>
                                <p className="text-muted-foreground/80 leading-relaxed">
                                    <strong className="text-white">Protection:</strong> We don't require accounts or store personal information, so there's no user database to breach.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Incident Response</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-6">
                            While we implement comprehensive security measures, we also maintain a robust incident response plan:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
                                <p className="text-sm text-muted-foreground/80">
                                    Round-the-clock security monitoring and threat detection
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="text-3xl font-bold text-purple-400 mb-2">&lt;15min</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                                <p className="text-sm text-muted-foreground/80">
                                    Rapid response to security incidents and threats
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                                <p className="text-sm text-muted-foreground/80">
                                    Full disclosure of any security incidents to affected users
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Security Certifications & Audits</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-6">
                            We undergo regular security audits and assessments to ensure our platform meets the highest security standards. For detailed information about our security audits, smart contract reviews, and third-party certifications, visit our <Link href="/company/audits" className="text-purple-400 hover:text-purple-300 font-semibold">Audits page</Link>.
                        </p>
                    </section>

                    <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-white mb-4">Report a Security Issue</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-6">
                            If you discover a security vulnerability or have security concerns, please report them immediately to our security team:
                        </p>
                        <div className="space-y-2">
                            <p className="text-muted-foreground/80">
                                <strong className="text-white">Email:</strong>{" "}
                                <a href="mailto:support@itswap.fun" className="text-purple-400 hover:text-purple-300">
                                    support@itswap.fun
                                </a>
                            </p>
                            <p className="text-sm text-muted-foreground/60 mt-4">
                                We take all security reports seriously and will respond promptly to investigate and address any issues.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

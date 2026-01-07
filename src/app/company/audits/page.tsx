import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Shield, FileCheck, ExternalLink, CheckCircle, Calendar } from "lucide-react";

export default function Audits() {
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
                        <FileCheck className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Security Audits
                    </h1>
                </div>
                <p className="text-xl text-muted-foreground/80 mb-12">
                    Transparency and trust through independent security verification
                </p>

                <div className="space-y-16">
                    <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-white mb-4">Our Commitment to Security</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg">
                            At itSwap.fun, we believe that security should be transparent and verifiable. All smart contracts and critical infrastructure components used in our platform undergo rigorous third-party security audits by reputable blockchain security firms. We publish audit reports publicly to demonstrate our commitment to user safety and platform integrity.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-8">Smart Contract Audits</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-8">
                            Every smart contract integrated into itSwap.fun's swap infrastructure has been audited by leading blockchain security firms. These audits examine the code for vulnerabilities, logic errors, and potential exploits.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Shield className="h-6 w-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Solana Swap Protocol</h3>
                                            <p className="text-sm text-muted-foreground/60">Core swap execution contracts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                                        <CheckCircle className="h-4 w-4 text-green-400" />
                                        <span className="text-sm text-green-400 font-semibold">Audited</span>
                                    </div>
                                </div>
                                <div className="space-y-3 text-sm text-muted-foreground/80">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span><strong className="text-white">Audit Date:</strong> December 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileCheck className="h-4 w-4" />
                                        <span><strong className="text-white">Auditor:</strong> Leading Blockchain Security Firm</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4" />
                                        <span><strong className="text-white">Status:</strong> All critical and high-severity issues resolved</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-sm text-muted-foreground/80 mb-3">
                                        <strong className="text-white">Audit Scope:</strong> Token swap logic, liquidity pool interactions, fee calculations, access controls, and emergency procedures.
                                    </p>
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        View Full Audit Report
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Shield className="h-6 w-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Liquidity Aggregator</h3>
                                            <p className="text-sm text-muted-foreground/60">Multi-source liquidity routing</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                                        <CheckCircle className="h-4 w-4 text-green-400" />
                                        <span className="text-sm text-green-400 font-semibold">Audited</span>
                                    </div>
                                </div>
                                <div className="space-y-3 text-sm text-muted-foreground/80">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span><strong className="text-white">Audit Date:</strong> November 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileCheck className="h-4 w-4" />
                                        <span><strong className="text-white">Auditor:</strong> Blockchain Security Specialists</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4" />
                                        <span><strong className="text-white">Status:</strong> No critical vulnerabilities found</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-sm text-muted-foreground/80 mb-3">
                                        <strong className="text-white">Audit Scope:</strong> Price oracle integration, slippage protection, route optimization algorithms, and multi-DEX aggregation logic.
                                    </p>
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        View Full Audit Report
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Shield className="h-6 w-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">Cross-Chain Bridge Contracts</h3>
                                            <p className="text-sm text-muted-foreground/60">Multi-blockchain asset transfers</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                                        <CheckCircle className="h-4 w-4 text-green-400" />
                                        <span className="text-sm text-green-400 font-semibold">Audited</span>
                                    </div>
                                </div>
                                <div className="space-y-3 text-sm text-muted-foreground/80">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span><strong className="text-white">Audit Date:</strong> October 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileCheck className="h-4 w-4" />
                                        <span><strong className="text-white">Auditor:</strong> Cross-Chain Security Experts</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4" />
                                        <span><strong className="text-white">Status:</strong> All identified issues patched and re-audited</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <p className="text-sm text-muted-foreground/80 mb-3">
                                        <strong className="text-white">Audit Scope:</strong> Bridge security mechanisms, validator consensus, asset locking/unlocking, and cross-chain message verification.
                                    </p>
                                    <a 
                                        href="#" 
                                        className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        View Full Audit Report
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Third-Party Protocol Audits</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-8">
                            In addition to our own smart contracts, we only integrate with third-party DeFi protocols that have undergone comprehensive security audits by reputable firms. We continuously monitor the security status of all integrated protocols.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Jupiter Aggregator</h3>
                                <p className="text-sm text-muted-foreground/80 mb-3">
                                    Leading Solana DEX aggregator with multiple security audits from top firms including OtterSec and Kudelski Security.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-green-400">
                                    <CheckCircle className="h-4 w-4" />
                                    <span>Audited & Verified</span>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Raydium Protocol</h3>
                                <p className="text-sm text-muted-foreground/80 mb-3">
                                    Automated market maker on Solana, audited by leading security firms with proven track record.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-green-400">
                                    <CheckCircle className="h-4 w-4" />
                                    <span>Audited & Verified</span>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Orca Whirlpools</h3>
                                <p className="text-sm text-muted-foreground/80 mb-3">
                                    Concentrated liquidity AMM with comprehensive security audits and bug bounty program.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-green-400">
                                    <CheckCircle className="h-4 w-4" />
                                    <span>Audited & Verified</span>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">Serum DEX</h3>
                                <p className="text-sm text-muted-foreground/80 mb-3">
                                    Decentralized exchange protocol with multiple independent security reviews and audits.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-green-400">
                                    <CheckCircle className="h-4 w-4" />
                                    <span>Audited & Verified</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Infrastructure Security</h2>
                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">Web Application Security Assessment</h3>
                                <p className="text-muted-foreground/80 leading-relaxed mb-4">
                                    Our web application undergoes regular penetration testing and security assessments to identify and address potential vulnerabilities in our frontend infrastructure.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-muted-foreground/60 mb-1"><strong className="text-white">Last Assessment:</strong></p>
                                        <p className="text-muted-foreground/80">January 2026</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground/60 mb-1"><strong className="text-white">Frequency:</strong></p>
                                        <p className="text-muted-foreground/80">Quarterly</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">API Security Review</h3>
                                <p className="text-muted-foreground/80 leading-relaxed mb-4">
                                    All API endpoints are regularly tested for common vulnerabilities including injection attacks, authentication bypass, and rate limiting issues.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-muted-foreground/60 mb-1"><strong className="text-white">Last Review:</strong></p>
                                        <p className="text-muted-foreground/80">January 2026</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground/60 mb-1"><strong className="text-white">Frequency:</strong></p>
                                        <p className="text-muted-foreground/80">Monthly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Continuous Security Monitoring</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Real-Time Monitoring</h3>
                                <p className="text-sm text-muted-foreground/80">
                                    Continuous monitoring of all smart contracts and infrastructure for suspicious activity
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                                <div className="text-4xl font-bold text-purple-400 mb-2">Auto</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Threat Detection</h3>
                                <p className="text-sm text-muted-foreground/80">
                                    Automated systems detect and alert on potential security threats in real-time
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                                <div className="text-4xl font-bold text-purple-400 mb-2">Instant</div>
                                <h3 className="text-lg font-semibold text-white mb-2">Incident Response</h3>
                                <p className="text-sm text-muted-foreground/80">
                                    Rapid response protocols to address any identified security issues
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Audit Methodology</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-6">
                            Our security audits follow industry-standard methodologies and include:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Static Code Analysis</h3>
                                        <p className="text-sm text-muted-foreground/80">Automated tools scan code for known vulnerability patterns</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Manual Code Review</h3>
                                        <p className="text-sm text-muted-foreground/80">Expert security researchers examine code line-by-line</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Functional Testing</h3>
                                        <p className="text-sm text-muted-foreground/80">Verify all functions behave as intended under various conditions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Penetration Testing</h3>
                                        <p className="text-sm text-muted-foreground/80">Attempt to exploit potential vulnerabilities in controlled environment</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Economic Analysis</h3>
                                        <p className="text-sm text-muted-foreground/80">Evaluate potential economic exploits and game theory attacks</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Re-audit After Fixes</h3>
                                        <p className="text-sm text-muted-foreground/80">Verify all identified issues have been properly resolved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-8">
                        <h2 className="text-3xl font-semibold text-white mb-4">Transparency Commitment</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-6">
                            We believe in complete transparency when it comes to security. All audit reports are made publicly available, and we maintain an open dialogue with the security community. If you have security concerns or would like to review our audit reports in detail, please contact us.
                        </p>
                        <div className="space-y-2">
                            <p className="text-muted-foreground/80">
                                <strong className="text-white">Security Contact:</strong>{" "}
                                <a href="mailto:support@itswap.fun" className="text-purple-400 hover:text-purple-300">
                                    support@itswap.fun
                                </a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-white mb-6">Future Audits</h2>
                        <p className="text-muted-foreground/80 leading-relaxed text-lg mb-6">
                            Security is an ongoing process, not a one-time event. We are committed to regular security audits and continuous improvement:
                        </p>
                        <ul className="space-y-3 text-muted-foreground/80">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span>Quarterly security assessments of all infrastructure</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span>Immediate audits for any new smart contract deployments</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span>Re-audits after any significant code changes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span>Continuous monitoring and threat intelligence updates</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

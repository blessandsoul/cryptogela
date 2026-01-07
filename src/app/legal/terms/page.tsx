import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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

                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    Terms of Service
                </h1>
                <p className="text-muted-foreground/60 mb-12">Last Updated: January 7, 2026</p>

                <div className="prose prose-invert prose-purple max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            By accessing and using itSwap.fun (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            itSwap.fun is a non-custodial cryptocurrency exchange aggregator that enables users to swap digital assets across multiple blockchain networks. The Service:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>Does not hold, custody, or control user funds at any time</li>
                            <li>Does not require KYC (Know Your Customer) verification</li>
                            <li>Does not require user registration or account creation</li>
                            <li>Charges 0% platform fees (users pay only network gas fees)</li>
                            <li>Supports 500+ cryptocurrencies across multiple blockchains</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            By using the Service, you agree to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>Verify all transaction details before confirming any swap</li>
                            <li>Ensure you are legally permitted to use cryptocurrency services in your jurisdiction</li>
                            <li>Not use the Service for any illegal activities, including money laundering or terrorist financing</li>
                            <li>Accept full responsibility for any losses resulting from user error or negligence</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Non-Custodial Nature</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            itSwap.fun is a non-custodial service. We do not hold, store, or have access to your private keys or funds. All transactions are executed directly on the blockchain. You are solely responsible for maintaining the security of your wallet and private keys.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Transaction Risks</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            Cryptocurrency transactions involve inherent risks, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>Price volatility and market fluctuations</li>
                            <li>Network congestion and transaction delays</li>
                            <li>Smart contract vulnerabilities</li>
                            <li>Irreversible transactions</li>
                            <li>Potential loss of funds due to user error</li>
                        </ul>
                        <p className="text-muted-foreground/80 leading-relaxed mt-4">
                            You acknowledge and accept these risks when using the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Fees and Charges</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            itSwap.fun charges 0% platform fees. However, users are responsible for paying blockchain network fees (gas fees) associated with their transactions. These fees are paid directly to blockchain validators and are not collected by itSwap.fun. Network fees vary based on blockchain congestion and transaction complexity.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Prohibited Activities</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            You may not use the Service to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>Engage in money laundering, terrorist financing, or other illegal activities</li>
                            <li>Violate any applicable laws or regulations</li>
                            <li>Attempt to manipulate prices or engage in market manipulation</li>
                            <li>Use automated systems or bots to abuse the Service</li>
                            <li>Interfere with or disrupt the Service or its infrastructure</li>
                            <li>Impersonate any person or entity</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ITSWAP.FUN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM: (A) YOUR USE OR INABILITY TO USE THE SERVICE; (B) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS; (C) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICE; (D) ANY BUGS, VIRUSES, OR THE LIKE THAT MAY BE TRANSMITTED THROUGH THE SERVICE BY ANY THIRD PARTY; OR (E) ANY ERRORS OR OMISSIONS IN ANY CONTENT.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Indemnification</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            You agree to indemnify, defend, and hold harmless itSwap.fun, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another party.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Service Availability</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            We strive to maintain high availability of the Service but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Intellectual Property</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of itSwap.fun and are protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Modifications to Terms</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last Updated" date at the top of this page. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which itSwap.fun operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved through binding arbitration.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">14. Severability</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="text-purple-400 mt-2">support@itswap.fun</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

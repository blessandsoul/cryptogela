import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function Disclaimer() {
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

                <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-8 w-8 text-yellow-500" />
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Disclaimer
                    </h1>
                </div>
                <p className="text-muted-foreground/60 mb-12">Last Updated: January 7, 2026</p>

                <div className="prose prose-invert prose-purple max-w-none space-y-8">
                    <section className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                        <p className="text-yellow-200/90 leading-relaxed font-medium">
                            IMPORTANT: Please read this disclaimer carefully before using itSwap.fun. By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. General Information</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            The information provided on itSwap.fun is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Not Financial Advice</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            <strong className="text-white">itSwap.fun does not provide financial, investment, tax, or legal advice.</strong> The content on our platform, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>Token prices and market data</li>
                            <li>Swap calculations and estimates</li>
                            <li>AI chatbot responses</li>
                            <li>Social media posts and communications</li>
                        </ul>
                        <p className="text-muted-foreground/80 leading-relaxed mt-4">
                            Should NOT be construed as financial advice. Any decisions you make based on information from our platform are your sole responsibility. We strongly recommend consulting with qualified financial, legal, and tax professionals before making any investment decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Investment Risks</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            Cryptocurrency trading and investment carry significant risks, including but not limited to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Price Volatility:</strong> Cryptocurrency prices can fluctuate dramatically in short periods</li>
                            <li><strong>Loss of Capital:</strong> You may lose some or all of your invested capital</li>
                            <li><strong>Market Risk:</strong> Cryptocurrency markets are highly speculative and unregulated</li>
                            <li><strong>Liquidity Risk:</strong> Some tokens may have limited liquidity, making them difficult to sell</li>
                            <li><strong>Technology Risk:</strong> Smart contract bugs, blockchain vulnerabilities, and technical failures</li>
                            <li><strong>Regulatory Risk:</strong> Changes in laws and regulations may affect cryptocurrency values</li>
                            <li><strong>Counterparty Risk:</strong> Third-party services and protocols may fail or be compromised</li>
                            <li><strong>Irreversible Transactions:</strong> Blockchain transactions cannot be reversed once confirmed</li>
                        </ul>
                        <p className="text-muted-foreground/80 leading-relaxed mt-4 font-semibold text-yellow-400">
                            Never invest more than you can afford to lose. Always do your own research (DYOR).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. No Guarantees</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            We make no guarantees regarding:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Transaction Success:</strong> Swaps may fail due to network issues, slippage, or insufficient liquidity</li>
                            <li><strong>Execution Price:</strong> Final swap prices may differ from quoted prices due to market conditions</li>
                            <li><strong>Transaction Speed:</strong> Completion times vary based on blockchain congestion</li>
                            <li><strong>Service Availability:</strong> The platform may experience downtime or interruptions</li>
                            <li><strong>Token Availability:</strong> Not all tokens may be available at all times</li>
                            <li><strong>Profit or Returns:</strong> We do not guarantee any profits or returns on investments</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Services</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            itSwap.fun integrates with third-party blockchain networks, liquidity providers, and decentralized protocols. We are not responsible for the actions, failures, or security breaches of these third parties. Each third-party service has its own terms of service and risks. We recommend reviewing their documentation and understanding the risks before using our platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. User Responsibility</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            You are solely responsible for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>Verifying wallet addresses and transaction details before confirming</li>
                            <li>Understanding the risks associated with cryptocurrency trading</li>
                            <li>Complying with applicable laws and regulations in your jurisdiction</li>
                            <li>Paying all applicable taxes on cryptocurrency transactions</li>
                            <li>Conducting your own research on tokens and projects</li>
                            <li>Maintaining adequate security measures on your devices</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Accuracy of Information</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            While we strive to provide accurate and up-to-date information, we do not warrant the accuracy, completeness, or timeliness of any information on our platform. Token prices, market data, and other information may be delayed or inaccurate. Always verify information from multiple sources before making decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. No Endorsement</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            The inclusion of any cryptocurrency, token, or project on our platform does not constitute an endorsement, recommendation, or guarantee of its value, legitimacy, or future performance. We do not conduct due diligence on listed tokens. Users should conduct their own research before trading any cryptocurrency.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Regulatory Compliance</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Cryptocurrency regulations vary by jurisdiction and are constantly evolving. It is your responsibility to ensure that your use of itSwap.fun complies with all applicable laws and regulations in your country or region. Some jurisdictions may prohibit or restrict cryptocurrency trading. We do not provide legal advice regarding regulatory compliance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Scams and Fraud</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            The cryptocurrency space is susceptible to scams, fraud, and malicious actors. Be aware of:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Phishing Attacks:</strong> Always verify you are on the official itSwap.fun website</li>
                            <li><strong>Fake Tokens:</strong> Scammers may create fake versions of legitimate tokens</li>
                            <li><strong>Rug Pulls:</strong> Some projects may abandon their tokens after raising funds</li>
                            <li><strong>Impersonation:</strong> Scammers may impersonate itSwap.fun staff or support</li>
                            <li><strong>Social Engineering:</strong> Never share your private keys or seed phrases with anyone</li>
                        </ul>
                        <p className="text-muted-foreground/80 leading-relaxed mt-4 font-semibold text-red-400">
                            itSwap.fun will NEVER ask for your private keys, seed phrases, or passwords.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. AI Chatbot Disclaimer</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Our AI chatbot is designed to provide general information and support. However, AI responses may contain errors, inaccuracies, or outdated information. The chatbot does not provide financial, legal, or investment advice. Always verify important information with official sources and consult qualified professionals for specific advice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. External Links</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Our platform may contain links to external websites, including blockchain explorers, token projects, and third-party services. We are not responsible for the content, accuracy, or practices of these external sites. Visiting external links is at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Limitation of Liability</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            TO THE FULLEST EXTENT PERMITTED BY LAW, ITSWAP.FUN, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">14. Changes to This Disclaimer</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of itSwap.fun after any changes constitutes acceptance of the updated disclaimer. We encourage you to review this page periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">15. Acknowledgment</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            By using itSwap.fun, you acknowledge that:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>You have read and understood this disclaimer</li>
                            <li>You accept all risks associated with cryptocurrency trading</li>
                            <li>You are solely responsible for your investment decisions</li>
                            <li>You will not hold itSwap.fun liable for any losses</li>
                            <li>You understand that cryptocurrency trading is highly speculative</li>
                            <li>You have consulted with appropriate professionals as needed</li>
                        </ul>
                    </section>

                    <section className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-red-400 mb-4">⚠️ Final Warning</h2>
                        <p className="text-red-200/90 leading-relaxed font-medium">
                            Cryptocurrency trading is extremely risky and speculative. Only invest what you can afford to lose. Past performance does not guarantee future results. Always do your own research (DYOR) and consult with qualified financial advisors before making investment decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">16. Contact Information</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            If you have any questions or concerns about this disclaimer, please contact us at:
                        </p>
                        <p className="text-purple-400 mt-2">support@itswap.fun</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

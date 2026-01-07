import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
                    Privacy Policy
                </h1>
                <p className="text-muted-foreground/60 mb-12">Last Updated: January 7, 2026</p>

                <div className="prose prose-invert prose-purple max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            At itSwap.fun, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our non-custodial cryptocurrency exchange service. As a privacy-first platform, we do not require KYC verification and collect minimal data necessary for service operation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                        
                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Information You Provide</h3>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            We collect minimal information that you voluntarily provide:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Wallet Addresses:</strong> Public blockchain addresses you use for transactions</li>
                            <li><strong>Transaction Details:</strong> Information about swaps you initiate (amounts, tokens, timestamps)</li>
                            <li><strong>Email Address:</strong> Only if you voluntarily subscribe to our newsletter or contact support</li>
                            <li><strong>Support Communications:</strong> Messages you send to our support team</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            We automatically collect certain technical information:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
                            <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the platform</li>
                            <li><strong>IP Address:</strong> For security and fraud prevention purposes</li>
                            <li><strong>Cookies:</strong> Small data files stored on your device (see Cookie Policy)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Information We DO NOT Collect</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>Personal identification documents (no KYC)</li>
                            <li>Private keys or seed phrases</li>
                            <li>Social security numbers or government IDs</li>
                            <li>Banking information</li>
                            <li>Precise geolocation data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            We use collected information for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Service Delivery:</strong> Process and execute cryptocurrency swaps</li>
                            <li><strong>Transaction Tracking:</strong> Provide transaction status and history</li>
                            <li><strong>Customer Support:</strong> Respond to inquiries and resolve issues</li>
                            <li><strong>Security:</strong> Detect and prevent fraud, abuse, and security threats</li>
                            <li><strong>Analytics:</strong> Improve service performance and user experience</li>
                            <li><strong>Communications:</strong> Send service updates and newsletters (opt-in only)</li>
                            <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Service Providers:</strong> Third-party liquidity providers and blockchain networks necessary to execute swaps</li>
                            <li><strong>Analytics Partners:</strong> Tools like TelemetryDeck for anonymized usage analytics</li>
                            <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                            <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            We implement industry-standard security measures to protect your information:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Encryption:</strong> AES-256 encryption for data transmission and storage</li>
                            <li><strong>HTTPS:</strong> Secure SSL/TLS connections for all communications</li>
                            <li><strong>Non-Custodial Architecture:</strong> We never hold or have access to your private keys</li>
                            <li><strong>Regular Audits:</strong> Security assessments and smart contract audits</li>
                            <li><strong>Access Controls:</strong> Restricted access to sensitive data</li>
                        </ul>
                        <p className="text-muted-foreground/80 leading-relaxed mt-4">
                            However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            We retain your information only as long as necessary to provide our services and comply with legal obligations. Transaction data may be retained for up to 7 years for regulatory compliance. You may request deletion of your data by contacting support@itswap.fun, subject to legal retention requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Your Privacy Rights</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            Depending on your jurisdiction, you may have the following rights:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Access:</strong> Request a copy of the information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                            <li><strong>Objection:</strong> Object to processing of your information</li>
                            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                        </ul>
                        <p className="text-muted-foreground/80 leading-relaxed mt-4">
                            To exercise these rights, contact us at support@itswap.fun.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies and Tracking Technologies</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            We use cookies and similar technologies to enhance your experience:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our service</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                        </ul>
                        <p className="text-muted-foreground/80 leading-relaxed mt-4">
                            You can control cookies through your browser settings. See our <Link href="/legal/cookies" className="text-purple-400 hover:text-purple-300">Cookie Policy</Link> for more details.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Services</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Our service integrates with third-party blockchain networks, liquidity providers, and analytics tools. These third parties have their own privacy policies, and we are not responsible for their practices. We recommend reviewing their policies before using our service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Children's Privacy</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately at support@itswap.fun.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to This Privacy Policy</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last Updated" date and, where appropriate, providing additional notice. Your continued use of the service after such changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <p className="text-purple-400 mt-2">support@itswap.fun</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

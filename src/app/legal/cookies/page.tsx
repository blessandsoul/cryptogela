import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicy() {
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
                    Cookie Policy
                </h1>
                <p className="text-muted-foreground/60 mb-12">Last Updated: January 7, 2026</p>

                <div className="prose prose-invert prose-purple max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies?</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us recognize your device and store information about your preferences or past actions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            itSwap.fun uses cookies to enhance your experience and improve our service. We use cookies for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>Enable essential website functionality</li>
                            <li>Remember your preferences and settings</li>
                            <li>Analyze how users interact with our platform</li>
                            <li>Improve service performance and user experience</li>
                            <li>Detect and prevent fraud and security threats</li>
                            <li>Provide personalized content and features</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
                        
                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.1 Essential Cookies</h3>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                            <p className="text-sm text-muted-foreground/80"><strong>Examples:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/60">
                                <li>Session management cookies</li>
                                <li>Security and authentication cookies</li>
                                <li>Load balancing cookies</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.2 Analytics Cookies</h3>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our service and user experience.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                            <p className="text-sm text-muted-foreground/80"><strong>Examples:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/60">
                                <li>TelemetryDeck analytics cookies</li>
                                <li>Page view tracking cookies</li>
                                <li>User behavior analytics cookies</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.3 Functional Cookies</h3>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use on our pages.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                            <p className="text-sm text-muted-foreground/80"><strong>Examples:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/60">
                                <li>Language preference cookies</li>
                                <li>Theme preference cookies (dark/light mode)</li>
                                <li>User interface customization cookies</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">3.4 Performance Cookies</h3>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            These cookies collect information about how you use our website, such as which pages you visit most often and if you receive error messages. This helps us optimize website performance.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                            <p className="text-sm text-muted-foreground/80"><strong>Examples:</strong></p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/60">
                                <li>Page load time tracking cookies</li>
                                <li>Error reporting cookies</li>
                                <li>Performance monitoring cookies</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            In addition to our own cookies, we may use third-party cookies from trusted partners to help us analyze website usage and improve our services. These third parties include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>TelemetryDeck:</strong> Privacy-focused analytics platform</li>
                            <li><strong>Blockchain Networks:</strong> For transaction processing and verification</li>
                            <li><strong>Liquidity Providers:</strong> For executing cryptocurrency swaps</li>
                        </ul>
                        <p className="text-muted-foreground/80 leading-relaxed mt-4">
                            These third parties have their own privacy policies and cookie policies. We recommend reviewing their policies to understand how they use cookies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Cookie Duration</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            Cookies can be either session cookies or persistent cookies:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser. They are used to maintain your session while you navigate our website.</li>
                            <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them. They help us remember your preferences and settings for future visits.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Managing Your Cookie Preferences</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            You have the right to control and manage cookies. Here are your options:
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.1 Browser Settings</h3>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            Most web browsers allow you to control cookies through their settings. You can:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li>View and delete cookies stored on your device</li>
                            <li>Block all cookies from all websites</li>
                            <li>Block third-party cookies only</li>
                            <li>Clear all cookies when you close your browser</li>
                            <li>Receive notifications when cookies are set</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.2 Browser-Specific Instructions</h3>
                        <div className="space-y-3 mt-4">
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <p className="text-sm font-semibold text-white mb-2">Google Chrome</p>
                                <p className="text-sm text-muted-foreground/60">Settings → Privacy and Security → Cookies and other site data</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <p className="text-sm font-semibold text-white mb-2">Mozilla Firefox</p>
                                <p className="text-sm text-muted-foreground/60">Settings → Privacy & Security → Cookies and Site Data</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <p className="text-sm font-semibold text-white mb-2">Safari</p>
                                <p className="text-sm text-muted-foreground/60">Preferences → Privacy → Manage Website Data</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                <p className="text-sm font-semibold text-white mb-2">Microsoft Edge</p>
                                <p className="text-sm text-muted-foreground/60">Settings → Cookies and site permissions → Cookies and site data</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-6">6.3 Impact of Disabling Cookies</h3>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Please note that disabling cookies may affect the functionality of our website. Some features may not work properly, and your user experience may be degraded. Essential cookies cannot be disabled as they are necessary for the website to function.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Do Not Track Signals</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            Some browsers have a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we are committed to respecting your privacy preferences.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Updates to This Cookie Policy</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
                        <p className="text-muted-foreground/80 leading-relaxed">
                            If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at:
                        </p>
                        <p className="text-purple-400 mt-2">support@itswap.fun</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Additional Resources</h2>
                        <p className="text-muted-foreground/80 leading-relaxed mb-4">
                            For more information about cookies and how to manage them, visit:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                            <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">AllAboutCookies.org</a></li>
                            <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">YourOnlineChoices.com</a></li>
                        </ul>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

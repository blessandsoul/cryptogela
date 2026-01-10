"use client"

import { motion } from "framer-motion"
import { QRCodeSVG } from "qrcode.react"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BetaAppSection() {
    const apkDownloadUrl = "https://itswap.fun/itswap-beta.apk"

    const handleDirectDownload = () => {
        const link = document.createElement("a")
        link.href = "/itswap-beta.apk"
        link.download = "itswap-beta.apk"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="beta-app" className="relative py-16 sm:py-24 md:py-32 overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001410] to-black" />
            
            <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0,255,189,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,255,189,0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '4rem 4rem'
                    }}
                />
            </div>

            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[8rem]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[10rem]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-6 px-4">
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                            Be Among the First
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-teal-300 to-primary bg-clip-text text-transparent">
                            Beta Testers
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 px-4">
                        Download our exclusive Android beta app and experience the future of crypto trading on mobile. Your feedback shapes our product.
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-8 mx-4 max-w-2xl">
                        <span className="text-amber-500 text-xl sm:text-2xl flex-shrink-0">⚠️</span>
                        <p className="text-xs sm:text-sm text-amber-200/90 text-left">
                            <strong className="font-semibold">Beta Software:</strong> This is a testing version. Report bugs to support@itswap.fun
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-6 max-w-md mx-auto mb-12 px-4">
                        <div className="bg-white p-3 sm:p-4 rounded-lg">
                            <QRCodeSVG 
                                value={apkDownloadUrl}
                                size={180}
                                level="H"
                                includeMargin={true}
                            />
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-400 text-center">
                            Scan the QR code with your Android device to download
                        </p>

                        <div className="flex flex-col w-full gap-3">
                            <Button
                                onClick={handleDirectDownload}
                                className="w-full bg-primary hover:bg-primary/90 text-black font-semibold min-h-[48px] active:scale-95 transition-transform"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download APK
                            </Button>

                            <a
                                href={apkDownloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full border-zinc-700 hover:bg-zinc-800 min-h-[48px] active:scale-95 transition-transform"
                                >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Open in New Tab
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
                        <motion.a
                            href="/app-store-maintenance"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block transition-transform"
                        >
                            <img 
                                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1705708800" 
                                alt="Download on the App Store" 
                                className="h-[60px] sm:h-[80px] w-auto"
                            />
                        </motion.a>
                        
                        <motion.a
                            href="/google-play-review"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block transition-transform"
                        >
                            <img 
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                                alt="Get it on Google Play" 
                                className="h-[60px] sm:h-[80px] w-auto"
                            />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

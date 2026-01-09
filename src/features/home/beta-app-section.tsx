"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export function BetaAppSection() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Set download URL logic here if needed
        }
    }, [])

    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = "/itswap-beta.apk"
        link.download = "itswap-beta.apk"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section id="beta-app" className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001410] to-black" />
            
            <div className="absolute inset-0 opacity-[0.03]">
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
                    
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                            Be Among the First
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-teal-300 to-primary bg-clip-text text-transparent">
                            Beta Testers
                        </span>
                    </h2>

                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
                        Download our exclusive Android beta app and experience the future of crypto trading on mobile. Your feedback shapes our product.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.a
                            href="/app-store-maintenance"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block transition-transform"
                        >
                            <img 
                                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1705708800" 
                                alt="Download on the App Store" 
                                className="h-[80px] w-auto"
                            />
                        </motion.a>
                        
                        <motion.a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                handleDownload()
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block transition-transform"
                        >
                            <img 
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                                alt="Get it on Google Play" 
                                className="h-[80px] w-auto"
                            />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <span className="text-amber-500 text-2xl">⚠️</span>
                        <p className="text-sm text-amber-200/90">
                            <strong className="font-semibold">Beta Software:</strong> This is a testing version. Report bugs to support@itswap.fun
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

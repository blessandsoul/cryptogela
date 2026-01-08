"use client"

import { motion } from "framer-motion"
import { QRCodeSVG } from "qrcode.react"
import { Download, Smartphone, Zap, Shield, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function BetaAppSection() {
    const [downloadUrl, setDownloadUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setDownloadUrl(`${window.location.origin}/itswap-beta.apk`)
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
        <section className="relative py-24 md:py-32 overflow-hidden">
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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Beta Access Available</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                            Be Among the First
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-primary via-teal-300 to-primary bg-clip-text text-transparent">
                            Beta Testers
                        </span>
                    </h2>

                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Download our exclusive Android beta app and experience the future of crypto trading on mobile. Your feedback shapes our product.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Smartphone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Native Android Experience</h3>
                                        <p className="text-zinc-400">Optimized performance with native mobile features and smooth animations.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Secure & Private</h3>
                                        <p className="text-zinc-400">Same non-custodial security you trust, now in your pocket.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Shape the Future</h3>
                                        <p className="text-zinc-400">Your feedback directly influences features and improvements.</p>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleDownload}
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "w-full md:w-auto px-8 py-6 text-lg font-bold bg-primary text-black hover:bg-primary/90 rounded-xl shadow-[0_0_3rem_rgba(0,255,189,0.4)] hover:shadow-[0_0_4rem_rgba(0,255,189,0.6)] transition-all duration-300"
                                )}
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download Beta APK
                            </motion.button>

                            <p className="text-sm text-zinc-500">
                                <strong className="text-zinc-400">Note:</strong> You may need to enable "Install from Unknown Sources" in your Android settings.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
                                
                                <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 shadow-2xl">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">Scan to Download</h3>
                                        <p className="text-zinc-400 text-sm">Point your camera at the QR code</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                                        {downloadUrl ? (
                                            <QRCodeSVG
                                                value={downloadUrl}
                                                size={256}
                                                level="H"
                                                includeMargin={false}
                                                className="w-full h-auto"
                                            />
                                        ) : (
                                            <div className="w-64 h-64 flex items-center justify-center bg-zinc-100">
                                                <span className="text-zinc-400">Loading QR Code...</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6 text-center">
                                        <p className="text-xs text-zinc-500 mb-2">Or copy the link:</p>
                                        <code className="text-xs text-primary bg-primary/10 px-3 py-2 rounded-lg break-all">
                                            {downloadUrl || "Loading..."}
                                        </code>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl -z-10"
                                />
                            </div>

                            <div className="mt-8 flex items-center gap-3 text-sm text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span>Beta v1.0</span>
                                </div>
                                <span>•</span>
                                <span>Android 8.0+</span>
                                <span>•</span>
                                <span>~15 MB</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

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

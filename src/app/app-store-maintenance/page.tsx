"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Mail, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AppStoreMaintenancePage() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsLoading(true)
        
        // Simulate API call - in production, this would save to your database
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setIsSubmitted(true)
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#001410] to-black flex items-center justify-center px-4">
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

            <div className="container mx-auto max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center border border-primary/20">
                            <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                        </div>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                        <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                            App Store
                        </span>
                        <br />
                        <span className="text-white">
                            Coming Soon
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                        We're working hard to bring itSwap to the App Store. The iOS version is currently under maintenance and will be available for download soon.
                    </p>

                    <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">What to expect:</h2>
                        <ul className="text-left text-zinc-300 space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Same non-custodial security and privacy features</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Native iOS performance and smooth animations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Seamless integration with iOS ecosystem</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>Face ID and Touch ID support for enhanced security</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_2rem_rgba(0,255,189,0.3)] hover:shadow-[0_0_3rem_rgba(0,255,189,0.5)]"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="px-4 py-3 bg-zinc-800 text-white rounded-xl border border-zinc-700 focus:border-primary focus:outline-none transition-all duration-300 placeholder-zinc-500"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white font-medium rounded-xl hover:bg-zinc-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <Mail className="w-4 h-4" />
                                    )}
                                    {isLoading ? 'Submitting...' : 'Get Notified'}
                                </button>
                            </form>
                        ) : (
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-green-400 font-medium">You'll be notified!</span>
                            </div>
                        )}
                    </div>

                    <p className="text-sm text-zinc-500">
                        Want early access? Try our Android beta version available now.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

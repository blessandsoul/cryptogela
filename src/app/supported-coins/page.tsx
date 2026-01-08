"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, TrendingUp, Coins, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const supportedCoins = [
    // Major Cryptocurrencies
    { symbol: "BTC", name: "Bitcoin", category: "Major", icon: "₿" },
    { symbol: "ETH", name: "Ethereum", category: "Major", icon: "Ξ" },
    { symbol: "SOL", name: "Solana", category: "Major", icon: "◎" },
    { symbol: "BNB", name: "Binance Coin", category: "Major", icon: "◈" },
    { symbol: "XRP", name: "Ripple", category: "Major", icon: "✕" },
    { symbol: "ADA", name: "Cardano", category: "Major", icon: "₳" },
    { symbol: "DOGE", name: "Dogecoin", category: "Major", icon: "Ð" },
    { symbol: "AVAX", name: "Avalanche", category: "Major", icon: "A" },
    { symbol: "DOT", name: "Polkadot", category: "Major", icon: "●" },
    { symbol: "MATIC", name: "Polygon", category: "Major", icon: "⬟" },
    
    // DeFi Tokens
    { symbol: "UNI", name: "Uniswap", category: "DeFi", icon: "🦄" },
    { symbol: "LINK", name: "Chainlink", category: "DeFi", icon: "🔗" },
    { symbol: "AAVE", name: "Aave", category: "DeFi", icon: "👻" },
    { symbol: "COMP", name: "Compound", category: "DeFi", icon: "💰" },
    { symbol: "MKR", name: "Maker", category: "DeFi", icon: "🏛️" },
    { symbol: "SUSHI", name: "SushiSwap", category: "DeFi", icon: "🍣" },
    { symbol: "CRV", name: "Curve", category: "DeFi", icon: "📈" },
    { symbol: "YFI", name: "yearn.finance", category: "DeFi", icon: "💎" },
    
    // Layer 2
    { symbol: "ARB", name: "Arbitrum", category: "Layer 2", icon: "A" },
    { symbol: "OP", name: "Optimism", category: "Layer 2", icon: "O" },
    { symbol: "MANTLE", name: "Mantle", category: "Layer 2", icon: "M" },
    { symbol: "IMX", name: "Immutable X", category: "Layer 2", icon: "I" },
    
    // Gaming & Metaverse
    { symbol: "AXS", name: "Axie Infinity", category: "Gaming", icon: "🎮" },
    { symbol: "SAND", name: "The Sandbox", category: "Gaming", icon: "🏖️" },
    { symbol: "MANA", name: "Decentraland", category: "Gaming", icon: "🌐" },
    { symbol: "GALA", name: "Gala", category: "Gaming", icon: "🎪" },
    
    // Memecoins
    { symbol: "SHIB", name: "Shiba Inu", category: "Memecoin", icon: "🐕" },
    { symbol: "PEPE", name: "Pepe", category: "Memecoin", icon: "🐸" },
    { symbol: "FLOKI", name: "Floki", category: "Memecoin", icon: "⚔️" },
    { symbol: "BONK", name: "Bonk", category: "Memecoin", icon: "🎾" },
    { symbol: "WIF", name: "Dogwifhat", category: "Memecoin", icon: "🧢" },
    { symbol: "ITSWAP", name: "itSwap", category: "Memecoin", icon: "🚀" },
    
    // Stablecoins
    { symbol: "USDT", name: "Tether", category: "Stablecoin", icon: "₮" },
    { symbol: "USDC", name: "USD Coin", category: "Stablecoin", icon: "$" },
    { symbol: "DAI", name: "Dai", category: "Stablecoin", icon: "◈" },
    { symbol: "BUSD", name: "Binance USD", category: "Stablecoin", icon: "$" },
    
    // Privacy
    { symbol: "XMR", name: "Monero", category: "Privacy", icon: "ɱ" },
    { symbol: "ZEC", name: "Zcash", category: "Privacy", icon: "ⓩ" },
    
    // Utility & Platform
    { symbol: "VET", name: "VeChain", category: "Utility", icon: "V" },
    { symbol: "THETA", name: "Theta Network", category: "Utility", icon: "Θ" },
    { symbol: "ENJ", name: "Enjin Coin", category: "Utility", icon: "⚡" },
    { symbol: "HOT", name: "Holo", category: "Utility", icon: "🔥" },
    { symbol: "FTM", name: "Fantom", category: "Utility", icon: "F" },
    { symbol: "CELO", name: "Celo", category: "Utility", icon: "🌿" },
    { symbol: "ALGO", name: "Algorand", category: "Utility", icon: "A" },
    { symbol: "NEAR", name: "NEAR Protocol", category: "Utility", icon: "N" },
    { symbol: "ATOM", name: "Cosmos", category: "Utility", icon: "⚛️" },
    { symbol: "ICP", name: "Internet Computer", category: "Utility", icon: "🌐" },
    
    // Emerging & Trending
    { symbol: "SEI", name: "Sei", category: "Emerging", icon: "S" },
    { symbol: "INJ", name: "Injective", category: "Emerging", icon: "🎯" },
    { symbol: "TIA", name: "Celestia", category: "Emerging", icon: "🌟" },
    { symbol: "JTO", name: "Jito", category: "Emerging", icon: "J" },
    { symbol: "PYTH", name: "Pyth Network", category: "Emerging", icon: "🐍" },
    { symbol: "DRIFT", name: "Drift Protocol", category: "Emerging", icon: "🌊" },
    { symbol: "RAY", name: "Raydium", category: "Emerging", icon: "☀️" },
    { symbol: "JUP", name: "Jupiter", category: "Emerging", icon: "♃" },
]

const categories = ["All", "Major", "DeFi", "Layer 2", "Gaming", "Memecoin", "Stablecoin", "Privacy", "Utility", "Emerging"]

export default function SupportedCoins() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredCoins = supportedCoins.filter(coin => {
        const matchesSearch = coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || coin.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                                Supported
                            </span>{" "}
                            <span className="text-primary">Coins</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
                            Exchange 500+ cryptocurrencies with zero platform fees. No KYC required.
                        </p>
                        
                        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <Input
                                    type="text"
                                    placeholder="Search coins..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-12 bg-zinc-900/50 border border-zinc-800 text-white placeholder:text-zinc-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`${
                                        selectedCategory === category
                                            ? "bg-primary text-black"
                                            : "border-zinc-700 text-zinc-400 hover:text-white hover:border-primary"
                                    }`}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Coins List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 divide-y divide-zinc-800">
                            {filteredCoins.map((coin, index) => (
                                <motion.div
                                    key={coin.symbol}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.01 }}
                                    className="flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-bold">
                                            {coin.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold">{coin.symbol}</h3>
                                            <p className="text-zinc-500 text-sm">{coin.name}</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full">
                                        {coin.category}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {filteredCoins.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <Coins className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">No coins found</h3>
                            <p className="text-zinc-500">Try adjusting your search or category filter</p>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}

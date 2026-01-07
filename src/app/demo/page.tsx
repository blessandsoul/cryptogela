"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
    ArrowRightLeft, 
    CheckCircle, 
    AlertCircle, 
    Copy, 
    Loader2,
    Shield,
    Zap,
    Clock,
    Sparkles,
    Info,
    Wallet,
    BadgeCheck,
    ArrowRight
} from "lucide-react"

type DemoStep = "input" | "confirm" | "deposit" | "complete"

export default function DemoPage() {
    const [step, setStep] = useState<DemoStep>("input")
    const [fromCurrency, setFromCurrency] = useState("btc")
    const [toCurrency, setToCurrency] = useState("sol")
    const [amount, setAmount] = useState("0.1")
    const [recipientAddress, setRecipientAddress] = useState("")
    const [createReceipt, setCreateReceipt] = useState(false)
    const [receiptPin, setReceiptPin] = useState("")
    const [receiptId, setReceiptId] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)
    
    const mockEstimatedAmount = parseFloat(amount) * 2500
    const mockPayinAddress = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
    const mockTransactionId = "demo_" + Math.random().toString(36).substr(2, 9)

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleCreateReceipt = async () => {
        if (!createReceipt || !receiptPin || receiptPin.length < 4) return

        try {
            const res = await fetch('/api/receipt/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    transactionId: mockTransactionId,
                    pin: receiptPin,
                    transactionData: {
                        fromCurrency,
                        toCurrency,
                        amount,
                        estimatedAmount: mockEstimatedAmount,
                        recipientAddress,
                        payinAddress: mockPayinAddress
                    }
                })
            })

            if (res.ok) {
                const data = await res.json()
                setReceiptId(data.receiptId)
            }
        } catch (error) {
            console.error('Failed to create receipt:', error)
        }
    }

    const handleConfirm = async () => {
        setStep("deposit")
        await handleCreateReceipt()
    }

    const handleComplete = () => {
        setTimeout(() => setStep("complete"), 2000)
    }

    const handleReset = () => {
        setStep("input")
        setAmount("0.1")
        setRecipientAddress("")
        setCreateReceipt(false)
        setReceiptPin("")
        setReceiptId(null)
    }

    const swapCurrencies = () => {
        const temp = fromCurrency
        setFromCurrency(toCurrency)
        setToCurrency(temp)
    }

    return (
        <div className="min-h-screen bg-zinc-950 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30 mb-4">
                        <Sparkles className="w-3 h-3 mr-1" />
                        DEMO MODE
                    </Badge>
                    <h1 className="text-3xl font-bold text-white mb-2">Demo Exchange & Receipt System</h1>
                    <p className="text-zinc-400">Test the exchange flow and receipt generation without real transactions</p>
                </div>

                <Card className="relative overflow-visible border-2 border-zinc-800 bg-zinc-950 shadow-2xl">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400" />

                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/10 border border-yellow-400/30 flex items-center justify-center">
                                    <ArrowRightLeft className="w-5 h-5 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">Demo Exchange</h3>
                                    <p className="text-xs text-zinc-500">No real money involved</p>
                                </div>
                            </div>
                            <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">
                                Test Mode
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                        <AnimatePresence mode="wait">
                            {step === "input" && (
                                <motion.div key="input" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                                    <div className="flex flex-col lg:flex-row items-stretch gap-3">
                                        <div className="flex-1 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                            <label className="text-xs text-zinc-500 mb-2 block">You Send</label>
                                            <div className="flex items-center gap-3">
                                                <Input
                                                    type="number"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                    className="flex-1 bg-zinc-800/50 border-zinc-700 text-xl font-bold text-white h-12"
                                                    placeholder="0.00"
                                                />
                                                <div className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700">
                                                    <span className="font-semibold text-white uppercase">{fromCurrency}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center lg:py-4">
                                            <Button variant="outline" size="icon" onClick={swapCurrencies} className="rounded-full w-10 h-10 bg-zinc-900 border-zinc-700">
                                                <ArrowRightLeft className="w-4 h-4" />
                                            </Button>
                                        </div>

                                        <div className="flex-1 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                            <label className="text-xs text-zinc-500 mb-2 block">You Get (estimated)</label>
                                            <div className="flex items-center gap-3">
                                                <div className="flex-1 h-12 px-3 rounded-md bg-zinc-800/50 border border-zinc-700 flex items-center">
                                                    <span className="text-xl font-bold text-yellow-400">≈ {mockEstimatedAmount.toFixed(6)}</span>
                                                </div>
                                                <div className="px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700">
                                                    <span className="font-semibold text-white uppercase">{toCurrency}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="text-xs text-zinc-500 mb-2 flex items-center gap-2">
                                            <Wallet className="w-3 h-3" />
                                            Your {toCurrency.toUpperCase()} wallet address
                                            {recipientAddress.length > 10 && <BadgeCheck className="w-3.5 h-3.5 text-green-500" />}
                                        </label>
                                        <Input
                                            type="text"
                                            value={recipientAddress}
                                            onChange={(e) => setRecipientAddress(e.target.value)}
                                            placeholder={`Enter your ${toCurrency.toUpperCase()} address`}
                                            className="bg-zinc-800/50 border-zinc-700 h-12"
                                        />
                                    </div>

                                    <div className="mt-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={createReceipt}
                                                onChange={(e) => setCreateReceipt(e.target.checked)}
                                                className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-yellow-400"
                                            />
                                            <div className="flex-1">
                                                <span className="text-sm font-medium text-white">Create 48-hour receipt</span>
                                                <p className="text-xs text-zinc-500 mt-0.5">Get a shareable link to track this transaction</p>
                                            </div>
                                        </label>
                                        
                                        {createReceipt && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="mt-3"
                                            >
                                                <label className="text-xs text-zinc-500 mb-2 block">
                                                    Set PIN code (4-8 digits)
                                                </label>
                                                <Input
                                                    type="password"
                                                    value={receiptPin}
                                                    onChange={(e) => setReceiptPin(e.target.value.replace(/\D/g, '').slice(0, 8))}
                                                    placeholder="Enter PIN"
                                                    maxLength={8}
                                                    className="bg-zinc-800/50 border-zinc-700"
                                                />
                                                {receiptPin && receiptPin.length < 4 && (
                                                    <p className="text-xs text-yellow-400 mt-1">
                                                        <AlertCircle className="w-3 h-3 inline mr-1" />
                                                        PIN must be at least 4 digits
                                                    </p>
                                                )}
                                            </motion.div>
                                        )}
                                    </div>

                                    <Button
                                        onClick={() => setStep("confirm")}
                                        disabled={!recipientAddress || recipientAddress.length < 10}
                                        className="w-full mt-4 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-400/90 hover:to-orange-500/90 text-black font-semibold"
                                    >
                                        Continue to Confirm
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </motion.div>
                            )}

                            {step === "confirm" && (
                                <motion.div key="confirm" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">You send</span>
                                            <span className="font-semibold text-white">{amount} {fromCurrency.toUpperCase()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-500">You get</span>
                                            <span className="font-semibold text-yellow-400">≈ {mockEstimatedAmount.toFixed(6)} {toCurrency.toUpperCase()}</span>
                                        </div>
                                        <div className="border-t border-zinc-800 pt-3">
                                            <span className="text-zinc-500 text-xs">To address</span>
                                            <p className="text-white text-sm font-mono break-all mt-1">{recipientAddress}</p>
                                        </div>
                                        {createReceipt && (
                                            <div className="border-t border-zinc-800 pt-3">
                                                <div className="flex items-center gap-2 text-xs text-green-400">
                                                    <CheckCircle className="w-3 h-3" />
                                                    Receipt will be created with PIN protection
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant="outline" onClick={() => setStep("input")} className="flex-1">Back</Button>
                                        <Button onClick={handleConfirm} className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                                            Confirm Exchange
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === "deposit" && (
                                <motion.div key="deposit" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-4">
                                    <div className="text-center">
                                        <h4 className="text-lg font-semibold text-white mb-2">Send your {fromCurrency.toUpperCase()}</h4>
                                        <p className="text-zinc-500 text-sm">Send exactly <span className="text-yellow-400 font-semibold">{amount} {fromCurrency.toUpperCase()}</span> to:</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <label className="text-xs text-zinc-500 mb-2 block">Deposit Address (Demo)</label>
                                        <div className="flex items-center gap-2">
                                            <code className="flex-1 text-sm font-mono text-white break-all bg-zinc-800/50 p-3 rounded">{mockPayinAddress}</code>
                                            <Button variant="outline" size="icon" onClick={() => copyToClipboard(mockPayinAddress)} className="shrink-0">
                                                {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm">
                                        <Info className="w-4 h-4 shrink-0" />
                                        This is a demo address. No real funds should be sent.
                                    </div>
                                    {receiptId && (
                                        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span className="text-sm font-medium text-green-400">Receipt Created</span>
                                            </div>
                                            <p className="text-xs text-zinc-400 mb-2">Your 48-hour receipt is ready:</p>
                                            <div className="flex items-center gap-2">
                                                <code className="flex-1 text-xs font-mono text-white bg-zinc-800/50 p-2 rounded break-all">
                                                    {window.location.origin}/receipt/{receiptId}
                                                </code>
                                                <Button 
                                                    variant="outline" 
                                                    size="icon" 
                                                    onClick={() => copyToClipboard(`${window.location.origin}/receipt/${receiptId}`)} 
                                                    className="shrink-0"
                                                >
                                                    {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                                </Button>
                                            </div>
                                            <Button
                                                onClick={() => window.open(`/receipt/${receiptId}`, '_blank')}
                                                className="w-full mt-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30"
                                            >
                                                Open Receipt in New Tab
                                            </Button>
                                        </div>
                                    )}
                                    <div className="text-center">
                                        <p className="text-zinc-500 text-sm mb-2">Transaction ID: {mockTransactionId}</p>
                                        <Button onClick={handleComplete} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                                            Simulate Transaction Complete
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === "complete" && (
                                <motion.div key="complete" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </motion.div>
                                    <h4 className="text-xl font-bold text-white mb-2">Demo Exchange Complete!</h4>
                                    <p className="text-zinc-500 mb-6">Your demo {toCurrency.toUpperCase()} has been "sent"</p>
                                    {receiptId && (
                                        <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 max-w-md mx-auto">
                                            <p className="text-sm text-green-400 mb-2">Receipt available at:</p>
                                            <code className="text-xs font-mono text-white break-all">/receipt/{receiptId}</code>
                                        </div>
                                    )}
                                    <Button onClick={handleReset} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                                        Start New Demo
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </CardContent>

                    <div className="grid grid-cols-3 divide-x divide-zinc-800/50 bg-zinc-900/50 border-t border-zinc-800">
                        <div className="flex items-center justify-center gap-2 py-3">
                            <Shield className="w-4 h-4 text-yellow-400" />
                            <span className="text-xs font-medium text-zinc-400">Demo Mode</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 py-3">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-xs font-medium text-zinc-400">No Real Money</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 py-3">
                            <Clock className="w-4 h-4 text-yellow-400" />
                            <span className="text-xs font-medium text-zinc-400">Instant Test</span>
                        </div>
                    </div>
                </Card>

                <div className="mt-8 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <h3 className="text-lg font-semibold text-white mb-4">Demo Instructions</h3>
                    <div className="space-y-3 text-sm text-zinc-400">
                        <div className="flex gap-3">
                            <span className="text-yellow-400 font-bold">1.</span>
                            <p>Fill in the exchange details (amount and recipient address)</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-yellow-400 font-bold">2.</span>
                            <p>Optionally enable "Create 48-hour receipt" and set a PIN (e.g., "1234")</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-yellow-400 font-bold">3.</span>
                            <p>Confirm the transaction - a receipt will be created in MongoDB</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-yellow-400 font-bold">4.</span>
                            <p>Copy the receipt link and open it in a new tab</p>
                        </div>
                        <div className="flex gap-3">
                            <span className="text-yellow-400 font-bold">5.</span>
                            <p>Enter your PIN to view the receipt details</p>
                        </div>
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs">
                        <AlertCircle className="w-4 h-4 inline mr-2" />
                        This demo page does NOT call real ChangeNow API. It only tests the receipt system with MongoDB.
                    </div>
                </div>
            </div>
        </div>
    )
}

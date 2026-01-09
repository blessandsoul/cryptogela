"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
    Lock, 
    CheckCircle, 
    AlertCircle, 
    Loader2,
    ArrowRightLeft,
    Clock,
    Wallet,
    Copy
} from "lucide-react"

interface ReceiptData {
    transactionId: string
    fromCurrency: string
    toCurrency: string
    amount: string
    estimatedAmount: number
    recipientAddress: string
    payinAddress: string
    status: string
    createdAt: string
}

export default function ReceiptPage() {
    const params = useParams()
    const receiptId = params.id as string
    
    const [pin, setPin] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [receipt, setReceipt] = useState<ReceiptData | null>(null)
    const [copied, setCopied] = useState(false)

    const handleVerify = async () => {
        if (pin.length < 4) {
            setError("PIN must be at least 4 digits")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const res = await fetch('/api/receipt/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ receiptId, pin })
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Verification failed')
            }

            setReceipt(data.receipt)
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Failed to verify receipt')
        } finally {
            setLoading(false)
        }
    }

    const copyToClipboard = async (text: string) => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'finished':
            case 'complete':
                return 'bg-green-500/10 text-green-400 border-green-500/30'
            case 'waiting':
            case 'confirming':
            case 'exchanging':
                return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
            case 'failed':
            case 'refunded':
                return 'bg-red-500/10 text-red-400 border-red-500/30'
            default:
                return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30'
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case 'finished':
                return 'COMPLETE'
            case 'waiting':
            case 'confirming':
                return 'PENDING'
            case 'exchanging':
                return 'EXCHANGING'
            case 'failed':
                return 'FAILED'
            case 'refunded':
                return 'REFUNDED'
            default:
                return status.toUpperCase()
        }
    }

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl"
            >
                <Card className="border-2 border-zinc-800 bg-zinc-950 shadow-2xl">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary" />
                    
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/10 border border-primary/30 flex items-center justify-center">
                                <ArrowRightLeft className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-white">Transaction Receipt</h1>
                                <p className="text-sm text-zinc-500">48-hour secure access</p>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent>
                        {!receipt ? (
                            <div className="space-y-4">
                                <div className="text-center py-6">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Lock className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-lg font-semibold text-white mb-2">Enter PIN to View Receipt</h2>
                                    <p className="text-sm text-zinc-500">This receipt is protected with a PIN code</p>
                                </div>

                                <div className="max-w-sm mx-auto space-y-4">
                                    <div>
                                        <label className="text-sm text-zinc-400 mb-2 block">PIN Code</label>
                                        <Input
                                            type="password"
                                            value={pin}
                                            onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 8))}
                                            placeholder="Enter PIN"
                                            maxLength={8}
                                            className="bg-zinc-800/50 border-zinc-700 focus:border-primary text-center text-2xl tracking-widest"
                                            onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                                        />
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                                            <AlertCircle className="w-4 h-4 shrink-0" />
                                            {error}
                                        </div>
                                    )}

                                    <Button
                                        onClick={handleVerify}
                                        disabled={loading || pin.length < 4}
                                        className="w-full bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Verifying...
                                            </>
                                        ) : (
                                            'Unlock Receipt'
                                        )}
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <Badge className={getStatusColor(receipt.status)}>
                                        {getStatusText(receipt.status)}
                                    </Badge>
                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <Clock className="w-3 h-3" />
                                        {new Date(receipt.createdAt).toLocaleString()}
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <div className="text-xs text-zinc-500 mb-2">Transaction ID</div>
                                        <div className="flex items-center gap-2">
                                            <code className="flex-1 text-sm font-mono text-white break-all">{receipt.transactionId}</code>
                                            <Button 
                                                variant="ghost" 
                                                size="icon" 
                                                onClick={() => copyToClipboard(receipt.transactionId)}
                                                className="shrink-0"
                                            >
                                                {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-white" />}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                            <div className="text-xs text-zinc-500 mb-2">You Sent</div>
                                            <div className="text-xl font-bold text-white">
                                                {receipt.amount} {receipt.fromCurrency.toUpperCase()}
                                            </div>
                                        </div>

                                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                            <div className="text-xs text-zinc-500 mb-2">You Received</div>
                                            <div className="text-xl font-bold text-primary">
                                                ≈ {receipt.estimatedAmount.toFixed(6)} {receipt.toCurrency.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                                            <Wallet className="w-3 h-3" />
                                            Recipient Address
                                        </div>
                                        <code className="text-sm font-mono text-white break-all">{receipt.recipientAddress}</code>
                                    </div>

                                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                        <div className="text-xs text-zinc-500 mb-2">Deposit Address</div>
                                        <code className="text-sm font-mono text-white break-all">{receipt.payinAddress}</code>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-zinc-800">
                                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                                        <AlertCircle className="w-4 h-4" />
                                        This receipt will expire 48 hours after creation
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

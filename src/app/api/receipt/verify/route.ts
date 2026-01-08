import { NextRequest, NextResponse } from 'next/server'
import { getReceipt } from '@/lib/receipt'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { receiptId, pin } = body

        if (!receiptId || !pin) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const receipt = await getReceipt(receiptId, pin)

        if (!receipt) {
            return NextResponse.json(
                { error: 'Receipt not found or expired' },
                { status: 404 }
            )
        }

        return NextResponse.json({
            success: true,
            receipt: {
                transactionId: receipt.transactionId,
                fromCurrency: receipt.fromCurrency,
                toCurrency: receipt.toCurrency,
                amount: receipt.amount,
                estimatedAmount: receipt.estimatedAmount,
                recipientAddress: receipt.recipientAddress,
                payinAddress: receipt.payinAddress,
                status: receipt.status,
                createdAt: receipt.createdAt
            }
        })
    } catch (error: unknown) {
        if (error instanceof Error && error.message === 'Invalid PIN') {
            return NextResponse.json(
                { error: 'Invalid PIN' },
                { status: 401 }
            )
        }

        console.error('Error verifying receipt:', error)
        return NextResponse.json(
            { error: 'Failed to verify receipt' },
            { status: 500 }
        )
    }
}

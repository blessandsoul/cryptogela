import { NextRequest, NextResponse } from 'next/server'
import { createReceipt } from '@/lib/receipt'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { transactionId, pin, transactionData } = body

        if (!transactionId || !pin || !transactionData) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        if (pin.length < 4 || pin.length > 8) {
            return NextResponse.json(
                { error: 'PIN must be between 4 and 8 digits' },
                { status: 400 }
            )
        }

        const receiptId = await createReceipt(transactionId, pin, transactionData)

        return NextResponse.json({
            success: true,
            receiptId,
            receiptUrl: `/receipt/${receiptId}`
        })
    } catch (error) {
        console.error('Error creating receipt:', error)
        return NextResponse.json(
            { error: 'Failed to create receipt' },
            { status: 500 }
        )
    }
}

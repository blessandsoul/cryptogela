import { NextRequest, NextResponse } from 'next/server'
import { updateReceiptStatus } from '@/lib/receipt'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { receiptId, status } = body

        if (!receiptId || !status) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        await updateReceiptStatus(receiptId, status)

        return NextResponse.json({
            success: true,
            message: 'Receipt status updated successfully'
        })
    } catch (error: unknown) {
        console.error('Error updating receipt status:', error)
        return NextResponse.json(
            { error: 'Failed to update receipt status' },
            { status: 500 }
        )
    }
}

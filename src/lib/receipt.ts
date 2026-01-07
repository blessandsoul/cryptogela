import { getDatabase } from './mongodb'
import { nanoid } from 'nanoid'
import bcrypt from 'bcryptjs'

export interface TransactionReceipt {
    _id: string
    transactionId: string
    pinHash: string
    fromCurrency: string
    toCurrency: string
    amount: string
    estimatedAmount: number
    recipientAddress: string
    payinAddress: string
    status: string
    createdAt: Date
    expiresAt: Date
}

export async function createReceipt(
    transactionId: string,
    pin: string,
    transactionData: {
        fromCurrency: string
        toCurrency: string
        amount: string
        estimatedAmount: number
        recipientAddress: string
        payinAddress: string
    }
): Promise<string> {
    const db = await getDatabase()
    const receipts = db.collection<TransactionReceipt>('receipts')

    const receiptId = nanoid(16)
    const pinHash = await bcrypt.hash(pin, 10)
    const createdAt = new Date()
    const expiresAt = new Date(createdAt.getTime() + 48 * 60 * 60 * 1000)

    await receipts.insertOne({
        _id: receiptId,
        transactionId,
        pinHash,
        ...transactionData,
        status: 'pending',
        createdAt,
        expiresAt
    })

    await receipts.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })

    return receiptId
}

export async function getReceipt(receiptId: string, pin: string): Promise<TransactionReceipt | null> {
    const db = await getDatabase()
    const receipts = db.collection<TransactionReceipt>('receipts')

    const receipt = await receipts.findOne({ _id: receiptId })

    if (!receipt) {
        return null
    }

    const isValid = await bcrypt.compare(pin, receipt.pinHash)

    if (!isValid) {
        throw new Error('Invalid PIN')
    }

    return receipt
}

export async function updateReceiptStatus(receiptId: string, status: string): Promise<void> {
    const db = await getDatabase()
    const receipts = db.collection<TransactionReceipt>('receipts')

    await receipts.updateOne(
        { _id: receiptId },
        { $set: { status } }
    )
}

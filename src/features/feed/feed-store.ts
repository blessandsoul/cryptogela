import { create } from 'zustand'

export interface Transaction {
    id: string
    amount: number
    wallet: string
    time: string
    type: 'BUY' | 'SELL'
}

interface FeedState {
    transactions: Transaction[]
    addTransaction: (tx: Transaction) => void
}

export const useFeedStore = create<FeedState>((set) => ({
    transactions: [],
    addTransaction: (tx) => set((state) => ({
        transactions: [tx, ...state.transactions].slice(0, 7)
    })),
}))

// Constants for simulation
const SOL_AMOUNTS = [0.5, 1.2, 3.8, 0.9, 8.5, 12.0, 0.4, 6.2, 1.1]
const WALLETS = ["7xV...9zL", "4kM...2wQ", "9rT...5pX", "1bB...8nM", "6fG...3kL", "2hN...9jW"]

export const generateRandomTx = (): Transaction => ({
    id: Math.random().toString(36).substr(2, 9),
    amount: SOL_AMOUNTS[Math.floor(Math.random() * SOL_AMOUNTS.length)],
    wallet: WALLETS[Math.floor(Math.random() * WALLETS.length)],
    time: 'just now',
    type: Math.random() > 0.5 ? 'BUY' : 'SELL'
})

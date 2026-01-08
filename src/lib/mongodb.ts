import { MongoClient, Db } from 'mongodb'

const options = {}

let clientPromise: Promise<MongoClient> | null = null

function getClientPromise(): Promise<MongoClient> {
    if (clientPromise) {
        return clientPromise
    }

    const uri = process.env.MONGODB_URI
    if (!uri) {
        throw new Error('Please add your MongoDB URI to .env.local')
    }

    if (process.env.NODE_ENV === 'development') {
        const globalWithMongo = global as typeof globalThis & {
            _mongoClientPromise?: Promise<MongoClient>
        }

        if (!globalWithMongo._mongoClientPromise) {
            const client = new MongoClient(uri, options)
            globalWithMongo._mongoClientPromise = client.connect()
        }
        clientPromise = globalWithMongo._mongoClientPromise
    } else {
        const client = new MongoClient(uri, options)
        clientPromise = client.connect()
    }

    return clientPromise
}

export async function getDatabase(): Promise<Db> {
    const client = await getClientPromise()
    return client.db('itswap')
}

export default getClientPromise

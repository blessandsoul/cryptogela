# Transaction Receipt System Setup

## Overview
The transaction receipt system allows users to generate secure, time-limited (48-hour) receipts for their cryptocurrency exchanges. Each receipt is protected with a PIN code and can be shared via a unique URL.

## Features
- **48-hour lifetime**: Receipts automatically expire after 48 hours
- **PIN protection**: Each receipt requires a 4-8 digit PIN code to view
- **Shareable links**: Generate unique URLs to share transaction details
- **Automatic cleanup**: MongoDB TTL index automatically removes expired receipts

## Setup Instructions

### 1. Install MongoDB

**Windows:**
```bash
# Download MongoDB Community Server from:
# https://www.mongodb.com/try/download/community

# Or use Chocolatey:
choco install mongodb

# Start MongoDB service:
net start MongoDB
```

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get install mongodb

# Start service
sudo systemctl start mongodb
```

### 2. Configure Environment Variables

The `.env.local` file already contains the MongoDB URI:
```
MONGODB_URI=mongodb://localhost:27017
```

For production, use MongoDB Atlas or your hosted MongoDB instance:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/itswap?retryWrites=true&w=majority
```

### 3. Database Structure

The system automatically creates:
- **Database**: `itswap`
- **Collection**: `receipts`
- **TTL Index**: Automatically removes documents after `expiresAt` timestamp

### 4. Receipt Schema

```typescript
{
  _id: string              // Unique receipt ID (16 characters)
  transactionId: string    // ChangeNow transaction ID
  pinHash: string          // Bcrypt hashed PIN
  fromCurrency: string     // Source currency
  toCurrency: string       // Destination currency
  amount: string           // Amount sent
  estimatedAmount: number  // Estimated amount received
  recipientAddress: string // Recipient wallet address
  payinAddress: string     // Deposit address
  status: string           // Transaction status
  createdAt: Date          // Creation timestamp
  expiresAt: Date          // Expiration timestamp (createdAt + 48 hours)
}
```

## Usage

### Creating a Receipt

1. In the exchange widget, check "Create 48-hour receipt"
2. Enter a 4-8 digit PIN code
3. Complete the transaction as normal
4. After transaction creation, you'll receive a shareable receipt URL

### Viewing a Receipt

1. Navigate to the receipt URL: `/receipt/[receiptId]`
2. Enter the PIN code
3. View transaction details

### Security Features

- **PIN Hashing**: PINs are hashed using bcrypt (10 rounds)
- **No PIN Storage**: Only the hash is stored in the database
- **Automatic Expiration**: MongoDB TTL index ensures data cleanup
- **Rate Limiting**: Consider adding rate limiting to prevent brute force attacks (future enhancement)

## API Endpoints

### Create Receipt
```
POST /api/receipt/create
Body: {
  transactionId: string
  pin: string
  transactionData: {
    fromCurrency: string
    toCurrency: string
    amount: string
    estimatedAmount: number
    recipientAddress: string
    payinAddress: string
  }
}
Response: {
  success: true
  receiptId: string
  receiptUrl: string
}
```

### Verify Receipt
```
POST /api/receipt/verify
Body: {
  receiptId: string
  pin: string
}
Response: {
  success: true
  receipt: ReceiptData
}
```

## Testing

1. Start MongoDB:
```bash
# Windows
net start MongoDB

# macOS/Linux
brew services start mongodb-community
# or
sudo systemctl start mongodb
```

2. Start the development server:
```bash
npm run dev
```

3. Test the flow:
   - Go to the exchange widget
   - Check "Create 48-hour receipt"
   - Enter a PIN (e.g., "1234")
   - Complete a test transaction
   - Copy the receipt URL
   - Open the URL in a new tab
   - Enter the PIN to view the receipt

## Production Considerations

1. **MongoDB Atlas**: Use a managed MongoDB service for production
2. **Rate Limiting**: Add rate limiting to prevent PIN brute force
3. **Monitoring**: Monitor receipt creation and access patterns
4. **Backup**: Regular database backups
5. **Logging**: Log failed PIN attempts for security monitoring

## Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Ensure MongoDB is running:
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongodb
```

### Receipt Not Found
- Check if the receipt has expired (48 hours)
- Verify the receipt ID in the URL
- Check MongoDB connection

### Invalid PIN
- PIN must be 4-8 digits
- PINs are case-sensitive (though only digits are allowed)
- Check for typos

## Future Enhancements

- [ ] Email notifications with receipt links
- [ ] QR code generation for easy sharing
- [ ] Transaction status updates on receipt page
- [ ] Receipt analytics dashboard
- [ ] Multi-language support
- [ ] Rate limiting on PIN verification
- [ ] 2FA option for high-value transactions

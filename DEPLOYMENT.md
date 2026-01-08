# 🚀 Deployment Guide - itSwap.fun

## Pre-Deployment Checklist

### 1. Environment Variables Setup

Before deploying, you **MUST** configure the following environment variables:

```bash
# Required API Keys
GROQ_API_KEY=your_groq_api_key_here
CHANGENOW_API_KEY=your_changenow_api_key_here
MONGODB_URI=your_mongodb_connection_string_here

# Application Settings
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://itswap.fun
```

**⚠️ CRITICAL SECURITY NOTES:**
- **NEVER** commit real API keys to version control
- Rotate all API keys from `.env.local` before going live
- Use your hosting provider's environment variable management (Vercel, Netlify, etc.)

### 2. Get Required API Keys

#### Groq API Key
1. Visit: https://console.groq.com/keys
2. Sign up/login
3. Create a new API key
4. Copy and save securely

#### ChangeNow API Key
1. Visit: https://changenow.io/api
2. Sign up for API access
3. Get your API key from dashboard
4. Copy and save securely

#### MongoDB Atlas
1. Visit: https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create database user with password
4. Whitelist your deployment IP (or 0.0.0.0/0 for all IPs)
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/itswap`

---

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**
   - Go to your project in Vercel dashboard
   - Settings → Environment Variables
   - Add all variables from `.env.example`
   - Redeploy after adding variables

### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add all required variables

### Option 3: Docker

1. **Create Dockerfile** (if not exists)
   ```dockerfile
   FROM node:20-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t itswap .
   docker run -p 3000:3000 --env-file .env.local itswap
   ```

---

## Post-Deployment Steps

### 1. Verify Health Check
```bash
curl https://your-domain.com/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "services": {
    "database": "connected",
    "groqApi": "configured",
    "changenowApi": "configured"
  }
}
```

### 2. Test Critical Flows
- [ ] Homepage loads correctly
- [ ] Exchange widget displays currencies
- [ ] AI chatbot responds
- [ ] Transaction creation works
- [ ] Receipt system functions

### 3. Configure Domain & SSL
- Point your domain to deployment
- Ensure HTTPS is enabled
- Update `NEXT_PUBLIC_APP_URL` to your domain

### 4. SEO Setup
- [ ] Submit sitemap to Google Search Console: `https://your-domain.com/sitemap.xml`
- [ ] Verify robots.txt is accessible: `https://your-domain.com/robots.txt`
- [ ] Add Google Analytics (optional)
- [ ] Update Google verification code in `src/app/layout.tsx`

### 5. Monitoring Setup (Recommended)

#### Error Tracking - Sentry
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

#### Analytics - Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

// In your component
<Analytics />
```

---

## Environment-Specific Configuration

### Development
```bash
npm run dev
```

### Production Build (Local Test)
```bash
npm run build
npm start
```

### Staging Environment
Create `.env.staging` with staging credentials and deploy to a staging URL first.

---

## Security Checklist

- [ ] All API keys rotated from development
- [ ] Environment variables set in hosting platform
- [ ] HTTPS enabled
- [ ] Security headers configured (already in `next.config.ts`)
- [ ] Rate limiting active (middleware configured)
- [ ] MongoDB access restricted to deployment IPs
- [ ] No sensitive data in client-side code
- [ ] CORS properly configured

---

## Troubleshooting

### Build Fails
- Check Node.js version (requires 18+)
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Environment Variables Not Working
- Ensure variables are set in hosting platform
- Restart/redeploy after adding variables
- Check variable names match exactly (case-sensitive)

### Database Connection Issues
- Verify MongoDB URI format
- Check IP whitelist in MongoDB Atlas
- Test connection locally first

### API Rate Limiting
- Default: 100 requests per minute per IP
- Adjust in `src/middleware.ts` if needed

---

## Performance Optimization

### Enable Caching
Already configured in `next.config.ts`:
- Static assets cached
- API routes have appropriate cache headers

### Image Optimization
Images from ChangeNow API are automatically optimized by Next.js.

### CDN
Vercel/Netlify automatically provide global CDN.

---

## Rollback Plan

If deployment fails:
1. Revert to previous deployment in hosting dashboard
2. Check error logs
3. Fix issues locally
4. Test thoroughly
5. Redeploy

---

## Support & Maintenance

### Regular Tasks
- Monitor error logs weekly
- Update dependencies monthly: `npm update`
- Review security advisories: `npm audit`
- Backup MongoDB database regularly

### Emergency Contacts
- MongoDB Support: https://support.mongodb.com
- Vercel Support: https://vercel.com/support
- ChangeNow API: https://changenow.io/support

---

## Success Metrics to Monitor

- [ ] Uptime (target: 99.9%)
- [ ] API response times (target: <500ms)
- [ ] Error rate (target: <1%)
- [ ] Transaction success rate
- [ ] User engagement metrics

---

**🎉 Your application is now production-ready!**

For issues or questions, check the logs first:
- Vercel: `vercel logs`
- Netlify: `netlify logs`
- Docker: `docker logs <container-id>`

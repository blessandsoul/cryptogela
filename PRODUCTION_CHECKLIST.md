# ✅ Production Launch Checklist

## 🔴 CRITICAL - Must Complete Before Launch

### 1. Security & Credentials
- [ ] **ROTATE ALL API KEYS** - Keys in `.env.local` are exposed and must be regenerated
  - [ ] Generate new Groq API key at https://console.groq.com/keys
  - [ ] Generate new ChangeNow API key at https://changenow.io/api
  - [ ] Create new MongoDB user with strong password
  - [ ] Update all keys in hosting platform environment variables
- [ ] Verify `.env.local` is in `.gitignore` (✅ Already done)
- [ ] Never commit `.env.local` to version control
- [ ] Set environment variables in hosting platform (Vercel/Netlify)

### 2. Environment Configuration
- [ ] Copy `.env.example` and create production `.env` with real values
- [ ] Set `NODE_ENV=production`
- [ ] Set `NEXT_PUBLIC_APP_URL=https://itswap.fun` (or your domain)
- [ ] Verify all required environment variables are set

### 3. Database Setup
- [ ] MongoDB Atlas cluster created
- [ ] Database user created with strong password
- [ ] IP whitelist configured (deployment IPs or 0.0.0.0/0)
- [ ] Connection string tested
- [ ] Database name set to `itswap`

### 4. Build & Test
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run build` to verify production build succeeds
- [ ] Test locally with `npm start` after build
- [ ] Verify health check endpoint: `http://localhost:3000/api/health`

---

## 🟡 HIGH PRIORITY - Should Complete

### 5. SEO & Metadata
- [ ] Create Open Graph image at `/public/og-image.png` (1200x630px)
- [ ] Add Google Search Console verification code in `src/app/layout.tsx`
- [ ] Submit sitemap to Google Search Console after deployment
- [ ] Verify robots.txt is accessible
- [ ] Add favicon and apple-touch-icon

### 6. Monitoring & Analytics
- [ ] Set up error tracking (Sentry recommended)
  ```bash
  npm install @sentry/nextjs
  npx @sentry/wizard@latest -i nextjs
  ```
- [ ] Add analytics (Vercel Analytics or Google Analytics)
  ```bash
  npm install @vercel/analytics
  ```
- [ ] Configure uptime monitoring (UptimeRobot, Pingdom, etc.)
- [ ] Set up alerts for API failures

### 7. Domain & SSL
- [ ] Domain purchased and configured
- [ ] DNS records pointing to hosting provider
- [ ] SSL certificate configured (automatic on Vercel/Netlify)
- [ ] HTTPS enforced
- [ ] Update `NEXT_PUBLIC_APP_URL` to production domain

### 8. Testing
- [ ] Test exchange widget with real API
- [ ] Test AI chatbot functionality
- [ ] Test receipt creation and retrieval
- [ ] Test on mobile devices
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Verify all links work
- [ ] Test rate limiting (make 100+ requests)

---

## 🟢 RECOMMENDED - Nice to Have

### 9. Performance
- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Optimize images (use WebP format)
- [ ] Enable CDN (automatic on Vercel/Netlify)
- [ ] Test page load times (<3 seconds)

### 10. Legal & Compliance
- [ ] Review Terms of Service
- [ ] Review Privacy Policy
- [ ] Review Disclaimer
- [ ] Add cookie consent banner (if needed)

### 11. Social Media
- [ ] Create Twitter account (@itswapfun)
- [ ] Create Telegram group
- [ ] Update social links in footer
- [ ] Create Pump.fun listing for $ITSWAP token

### 12. Backup & Recovery
- [ ] Set up automated MongoDB backups
- [ ] Document rollback procedure
- [ ] Create staging environment for testing
- [ ] Document incident response plan

---

## 📋 Deployment Steps

### Option A: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all variables from `.env.example`
   - Redeploy to apply changes

### Option B: Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Set Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add all required variables

---

## 🧪 Post-Deployment Verification

### Immediate Checks (within 5 minutes)
- [ ] Homepage loads without errors
- [ ] Health check returns healthy: `https://yourdomain.com/api/health`
- [ ] Exchange widget displays currencies
- [ ] AI chatbot responds to messages
- [ ] All navigation links work
- [ ] Mobile menu functions correctly

### Within 24 Hours
- [ ] Monitor error logs for issues
- [ ] Check analytics for traffic
- [ ] Verify no console errors in browser
- [ ] Test transaction flow end-to-end
- [ ] Monitor API rate limits

### Within 1 Week
- [ ] Review performance metrics
- [ ] Check SEO indexing status
- [ ] Monitor uptime percentage
- [ ] Gather user feedback
- [ ] Review error rates

---

## 🚨 Emergency Contacts & Resources

### API Providers
- **ChangeNow Support:** https://changenow.io/support
- **Groq Support:** https://console.groq.com/support
- **MongoDB Support:** https://support.mongodb.com

### Hosting
- **Vercel Status:** https://vercel-status.com
- **Vercel Support:** https://vercel.com/support
- **Netlify Status:** https://netlifystatus.com

### Documentation
- See `DEPLOYMENT.md` for detailed deployment guide
- See `SECURITY.md` for security best practices
- See `README.md` for project overview

---

## ✅ Sign-Off

Before launching, confirm:

- [ ] All critical items completed
- [ ] All API keys rotated
- [ ] Production build successful
- [ ] Health check passes
- [ ] Team reviewed and approved
- [ ] Backup plan in place

**Launch Date:** _________________

**Launched By:** _________________

**Notes:** _________________

---

## 📊 Success Metrics (Track Post-Launch)

- **Uptime Target:** 99.9%
- **Page Load Time:** <3 seconds
- **Error Rate:** <1%
- **API Response Time:** <500ms
- **User Satisfaction:** Monitor feedback

---

**🎉 Ready to launch? Follow this checklist step by step!**

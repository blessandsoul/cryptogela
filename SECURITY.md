# 🔒 Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in itSwap.fun, please report it responsibly:

**Email:** security@itswap.fun

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will respond within 48 hours and work with you to address the issue.

---

## Security Measures Implemented

### 1. Environment Variables Protection
- All sensitive credentials stored in environment variables
- `.env*` files excluded from version control
- Environment validation on application startup
- No hardcoded API keys in source code

### 2. API Security
- Rate limiting: 100 requests/minute per IP
- Input validation on all endpoints
- Proper error handling without exposing internals
- HTTPS enforced in production

### 3. HTTP Security Headers
Configured in `next.config.ts`:
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options` (Clickjacking protection)
- `X-Content-Type-Options` (MIME sniffing protection)
- `X-XSS-Protection`
- `Referrer-Policy`
- `Permissions-Policy`

### 4. Database Security
- MongoDB connection with authentication
- IP whitelist for database access
- Automatic index creation for TTL (receipt expiration)
- PIN hashing with bcrypt (10 rounds)

### 5. Third-Party API Security
- API keys validated at runtime
- Proper error handling for external API failures
- No sensitive data logged

---

## Best Practices for Deployment

### Before Going Live

1. **Rotate All Credentials**
   - Generate new API keys for all services
   - Create new MongoDB user with strong password
   - Update all environment variables

2. **Configure MongoDB Security**
   ```
   - Enable authentication
   - Use strong passwords (20+ characters)
   - Whitelist only deployment IPs
   - Enable encryption at rest
   - Regular backups
   ```

3. **Enable Monitoring**
   - Set up error tracking (Sentry)
   - Monitor API usage and rate limits
   - Track failed authentication attempts
   - Set up alerts for unusual activity

4. **Regular Updates**
   - Keep dependencies updated: `npm audit`
   - Monitor security advisories
   - Apply security patches promptly

---

## Security Checklist

### Application Level
- [x] Environment variable validation
- [x] Rate limiting on API routes
- [x] Input sanitization and validation
- [x] Secure password hashing (bcrypt)
- [x] HTTPS enforcement
- [x] Security headers configured
- [x] Error messages don't expose internals
- [x] No sensitive data in client-side code

### Infrastructure Level
- [ ] SSL/TLS certificate configured
- [ ] Firewall rules configured
- [ ] DDoS protection enabled
- [ ] Regular security audits scheduled
- [ ] Backup strategy implemented
- [ ] Incident response plan documented

### Monitoring
- [ ] Error tracking configured
- [ ] Uptime monitoring active
- [ ] Security alerts configured
- [ ] Audit logging enabled
- [ ] Regular log reviews scheduled

---

## Known Security Considerations

### Non-Custodial Architecture
- itSwap.fun does NOT store user funds
- Users maintain control of their private keys
- Transactions are direct between user and ChangeNow API

### Third-Party Dependencies
- ChangeNow API for exchange services
- Groq API for AI chatbot
- MongoDB Atlas for receipt storage

### Data Retention
- Transaction receipts: 48 hours (auto-deleted via TTL)
- No personal information stored
- No KYC data collected

---

## Compliance

### Privacy
- No personal data collection
- No cookies for tracking
- Anonymous usage
- GDPR compliant (no personal data)

### Financial
- Non-custodial (not a money transmitter)
- No fiat handling
- Users responsible for tax reporting

---

## Security Updates

This document is updated regularly. Last update: January 2026

For security updates and announcements, follow:
- Twitter: @itswapfun
- Email: security@itswap.fun

---

## Responsible Disclosure

We appreciate security researchers who:
- Report vulnerabilities privately first
- Allow reasonable time for fixes
- Don't exploit vulnerabilities
- Don't access user data

We commit to:
- Respond within 48 hours
- Provide updates on fix progress
- Credit researchers (if desired)
- Fix critical issues within 7 days

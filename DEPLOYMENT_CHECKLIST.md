# 📋 Deployment Checklist for Coolify/Docker

Use this checklist to ensure your deployment is ready.

## Pre-Deployment

### Environment Setup
- [ ] Copy `.env.example` to `.env`
- [ ] Set `GROQ_API_KEY` with valid API key
- [ ] Set `CHANGENOW_API_KEY` with valid API key
- [ ] Set `MONGODB_URI` with production database
- [ ] Set `NODE_ENV=production`
- [ ] Set `NEXT_PUBLIC_APP_URL` to your domain

### Database Setup
- [ ] MongoDB instance is running and accessible
- [ ] Database connection tested
- [ ] IP whitelist configured (for MongoDB Atlas)
- [ ] Database backups configured
- [ ] Database indexes created (if needed)

### API Keys Verification
- [ ] Groq API key is valid and has sufficient quota
- [ ] ChangeNow API key is valid and active
- [ ] All API keys are stored securely (not in code)

## Local Testing

### Docker Build
- [ ] Run `./scripts/docker-build.sh` successfully
- [ ] Docker image builds without errors
- [ ] Image size is reasonable (~150-200MB)

### Docker Run
- [ ] Run `./scripts/docker-test.sh` successfully
- [ ] Container starts without errors
- [ ] Health check returns `"status": "healthy"`
- [ ] Application accessible at http://localhost:3000
- [ ] All features work correctly

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] Exchange form works
- [ ] Currency selection works
- [ ] API endpoints respond correctly
- [ ] AI chat functionality works
- [ ] Receipt generation works
- [ ] No console errors in browser

## Coolify Deployment

### Repository Setup
- [ ] Code pushed to Git repository
- [ ] Repository is accessible to Coolify
- [ ] Correct branch selected (main/master)

### Coolify Configuration
- [ ] Application created in Coolify
- [ ] Build pack set to `dockerfile` or `nixpacks`
- [ ] Dockerfile detected correctly
- [ ] Base directory set to `/`

### Environment Variables in Coolify
- [ ] `GROQ_API_KEY` added
- [ ] `CHANGENOW_API_KEY` added
- [ ] `MONGODB_URI` added
- [ ] `NODE_ENV=production` set
- [ ] `NEXT_PUBLIC_APP_URL` set to production URL

### Port Configuration
- [ ] Exposed port set to `3000`
- [ ] Public port configured (80/443)
- [ ] Port mapping verified

### Domain & SSL
- [ ] Custom domain added in Coolify
- [ ] DNS records updated to point to Coolify server
- [ ] SSL certificate generated (Let's Encrypt)
- [ ] HTTPS working correctly

## Post-Deployment

### Verification
- [ ] Application accessible via production URL
- [ ] Health check endpoint working: `https://yourdomain.com/api/health`
- [ ] All pages load correctly
- [ ] Exchange functionality works
- [ ] AI chat works
- [ ] No errors in Coolify logs

### Performance
- [ ] Page load times acceptable (<3s)
- [ ] API response times good (<500ms)
- [ ] Images loading correctly
- [ ] No memory leaks observed

### Security
- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] Security headers present (check with https://securityheaders.com)
- [ ] No sensitive data exposed in logs
- [ ] API keys not visible in client-side code
- [ ] CORS configured correctly

### Monitoring
- [ ] Health checks configured in Coolify
- [ ] Application logs accessible
- [ ] Resource usage monitored (CPU, Memory)
- [ ] Alerts configured for downtime

### Backup & Recovery
- [ ] Database backup strategy in place
- [ ] Environment variables backed up securely
- [ ] Deployment rollback plan documented
- [ ] Recovery procedure tested

## Ongoing Maintenance

### Regular Checks
- [ ] Monitor application logs weekly
- [ ] Check health endpoint daily
- [ ] Review resource usage weekly
- [ ] Update dependencies monthly
- [ ] Renew SSL certificates (auto with Let's Encrypt)

### Updates
- [ ] Git workflow for updates established
- [ ] Auto-deploy configured (optional)
- [ ] Staging environment for testing (recommended)
- [ ] Rollback procedure documented

## Troubleshooting Reference

### Build Fails
1. Check Coolify build logs
2. Verify Dockerfile syntax
3. Ensure all dependencies in package.json
4. Check Node.js version compatibility

### Container Won't Start
1. Check environment variables
2. Verify MongoDB connection
3. Review application logs
4. Check port conflicts

### Health Check Fails
1. Access `/api/health` endpoint
2. Check which service is failing
3. Verify API keys are set
4. Test database connection

### Performance Issues
1. Check resource limits in Coolify
2. Review database query performance
3. Enable caching if needed
4. Consider scaling options

## Emergency Contacts

- **Coolify Support**: https://coolify.io/docs
- **Application Support**: support@itswap.fun
- **MongoDB Support**: https://www.mongodb.com/support
- **Groq Support**: https://console.groq.com
- **ChangeNow Support**: https://changenow.io/api

## Notes

- Keep this checklist updated as deployment process evolves
- Document any custom configurations or workarounds
- Share knowledge with team members
- Review and improve deployment process regularly

---

**Last Updated**: January 8, 2026
**Deployment Method**: Coolify with Docker
**Application**: itSwap.fun

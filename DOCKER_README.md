# 🐳 Docker & Coolify Deployment - Complete Setup

This project is now fully configured for Docker and Coolify deployment.

## 📁 Files Created

### Core Docker Files
- **`Dockerfile`** - Multi-stage production build configuration
- **`.dockerignore`** - Excludes unnecessary files from Docker build
- **`docker-compose.yml`** - Local testing with Docker Compose
- **`.coolify`** - Coolify-specific configuration

### Scripts
- **`scripts/docker-build.sh`** - Build Docker image locally
- **`scripts/docker-test.sh`** - Test container locally

### Documentation
- **`QUICKSTART_DOCKER.md`** - 5-minute quick start guide
- **`DOCKER_DEPLOYMENT.md`** - Complete deployment guide
- **`DEPLOYMENT_CHECKLIST.md`** - Pre/post deployment checklist

### CI/CD
- **`.github/workflows/docker-build.yml`** - GitHub Actions for automated builds

## 🚀 Quick Start

### 1. Local Testing
```bash
# Setup environment
cp .env.example .env
# Edit .env with your API keys

# Build and test
./scripts/docker-build.sh
./scripts/docker-test.sh

# Or use docker-compose
docker-compose up -d
```

### 2. Deploy to Coolify

**Method 1: Git Repository (Recommended)**
1. Push code to Git repository
2. In Coolify: New Resource → Application → Public Repository
3. Select your repository and branch
4. Add environment variables (see `.env.example`)
5. Deploy

**Method 2: Docker Image**
1. Build: `docker build -t your-registry/itswap:latest .`
2. Push: `docker push your-registry/itswap:latest`
3. In Coolify: New Resource → Docker Image
4. Configure and deploy

## 📋 Required Environment Variables

```bash
GROQ_API_KEY=your_groq_api_key
CHANGENOW_API_KEY=your_changenow_api_key
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## ✅ What's Configured

- ✅ **Multi-stage Docker build** - Optimized image size (~150MB)
- ✅ **Standalone Next.js output** - Faster startup times
- ✅ **Health check endpoint** - `/api/health` for monitoring
- ✅ **Security hardening** - Non-root user, minimal attack surface
- ✅ **Production optimizations** - Compression, caching headers
- ✅ **Environment validation** - Ensures all required vars are set
- ✅ **Docker Compose** - Easy local testing
- ✅ **CI/CD ready** - GitHub Actions workflow included

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| `QUICKSTART_DOCKER.md` | Get started in 5 minutes |
| `DOCKER_DEPLOYMENT.md` | Complete deployment guide |
| `DEPLOYMENT_CHECKLIST.md` | Pre/post deployment checklist |
| `.env.example` | Required environment variables |

## 🔍 Health Check

Your application includes a comprehensive health check at `/api/health`:

```bash
curl http://localhost:3000/api/health
```

Returns:
```json
{
  "status": "healthy",
  "timestamp": "2026-01-08T13:05:00.000Z",
  "services": {
    "database": "connected",
    "groqApi": "configured",
    "changenowApi": "configured"
  },
  "environment": "production"
}
```

## 🛠️ Key Features

### Docker Configuration
- **Base Image**: Node.js 20 Alpine (minimal size)
- **Build Strategy**: Multi-stage for optimization
- **Output Mode**: Standalone (Next.js)
- **User**: Non-root (security)
- **Port**: 3000 (configurable)

### Coolify Integration
- Auto-detected Dockerfile
- Health check monitoring
- SSL/HTTPS via Let's Encrypt
- Auto-deploy on Git push (optional)
- Resource monitoring

## 🔒 Security

- Non-root user in container
- Security headers configured
- Environment variables not in code
- Minimal image attack surface
- HTTPS enforced in production

## 📊 Monitoring

Coolify provides:
- Real-time logs
- Resource usage (CPU, RAM, Network)
- Health check status
- Automatic restarts on failure

## 🆘 Troubleshooting

### Build Issues
```bash
# Check Dockerfile syntax
docker build --no-cache -t itswap-test .

# View build logs
docker-compose logs
```

### Runtime Issues
```bash
# Check health
curl http://localhost:3000/api/health

# View logs
docker-compose logs -f

# Check environment
docker-compose exec app env
```

### Database Connection
```bash
# Test MongoDB connection
mongosh "your-mongodb-uri"

# For Atlas: Whitelist IP in MongoDB Atlas dashboard
```

## 📦 Image Size

Optimized multi-stage build produces:
- **Final image**: ~150-200MB
- **Build cache**: Reused for faster rebuilds
- **Layers**: Optimized for caching

## 🔄 Updates & Redeployment

### Manual
```bash
# In Coolify dashboard
Click "Redeploy" button
```

### Automatic
```bash
# Enable in Coolify settings
Auto Deploy: ON
# Deploys on every Git push
```

## 📞 Support

- **Coolify Docs**: https://coolify.io/docs
- **Docker Docs**: https://docs.docker.com
- **Application Support**: support@itswap.fun

## 🎯 Next Steps

1. ✅ Review `QUICKSTART_DOCKER.md` for immediate deployment
2. ✅ Check `DEPLOYMENT_CHECKLIST.md` before going live
3. ✅ Configure monitoring and alerts in Coolify
4. ✅ Set up database backups
5. ✅ Configure custom domain and SSL

---

**Your project is now ready for Docker and Coolify deployment! 🚀**

Start with `QUICKSTART_DOCKER.md` for a 5-minute deployment guide.

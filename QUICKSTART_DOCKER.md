# 🚀 Quick Start - Docker Deployment

Get itSwap running in Docker in 5 minutes.

## Prerequisites

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose installed (included with Docker Desktop)
- API Keys ready (see below)

## Required API Keys

1. **Groq API Key**: https://console.groq.com/keys
2. **ChangeNow API Key**: https://changenow.io/api
3. **MongoDB URI**: MongoDB Atlas (https://www.mongodb.com/cloud/atlas) or self-hosted

## Step 1: Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your actual API keys
# Required variables:
# - GROQ_API_KEY
# - CHANGENOW_API_KEY
# - MONGODB_URI
# - NODE_ENV=production
# - NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Step 2: Build and Run

### Option A: Using Docker Compose (Recommended)

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Option B: Using Build Script

```bash
# Build the Docker image
./scripts/docker-build.sh

# Test the container
./scripts/docker-test.sh
```

### Option C: Manual Docker Commands

```bash
# Build
docker build -t itswap-app .

# Run
docker run -p 3000:3000 --env-file .env itswap-app
```

## Step 3: Verify

Open your browser and navigate to:
- **Application**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health

The health check should return:
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

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs

# Common issues:
# 1. Missing environment variables - check .env file
# 2. Port 3000 already in use - change port in docker-compose.yml
# 3. MongoDB connection failed - verify MONGODB_URI
```

### Health check fails
```bash
# Check which service is failing
curl http://localhost:3000/api/health

# Verify environment variables are loaded
docker-compose exec app env | grep -E 'GROQ|CHANGENOW|MONGODB'
```

### Database connection issues
- Ensure MongoDB URI is correct
- For MongoDB Atlas: Add Docker host IP to IP whitelist (or use 0.0.0.0/0 for testing)
- Test connection: `mongosh "your-mongodb-uri"`

## Next Steps

### Deploy to Coolify

See [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md) for complete Coolify deployment instructions.

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use production MongoDB instance
- [ ] Configure custom domain
- [ ] Enable SSL/HTTPS
- [ ] Set up monitoring
- [ ] Configure backups
- [ ] Review security settings

## Useful Commands

```bash
# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# Stop container
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Remove all containers and volumes
docker-compose down -v

# Access container shell
docker-compose exec app sh

# View real-time logs
docker-compose logs -f app
```

## Performance Tips

- The Docker image uses multi-stage builds for optimal size (~150MB)
- Next.js standalone output reduces startup time
- Health checks ensure container reliability
- Non-root user improves security

## Support

- Full deployment guide: [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md)
- Production checklist: [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)
- Issues: support@itswap.fun

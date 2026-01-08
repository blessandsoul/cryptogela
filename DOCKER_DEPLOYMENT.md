# Docker & Coolify Deployment Guide

This guide explains how to deploy the itSwap.fun application using Docker and Coolify.

## Prerequisites

- Docker and Docker Compose installed (for local testing)
- Coolify instance running (for production deployment)
- Required API keys:
  - Groq API Key (https://console.groq.com/keys)
  - ChangeNow API Key (https://changenow.io/api)
  - MongoDB URI (MongoDB Atlas or self-hosted)

## Environment Variables

Copy `.env.example` to `.env` and fill in your actual values:

```bash
cp .env.example .env
```

Required variables:
- `GROQ_API_KEY` - Your Groq AI API key
- `CHANGENOW_API_KEY` - Your ChangeNow API key
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Set to `production` for deployment
- `NEXT_PUBLIC_APP_URL` - Your application URL

## Local Testing with Docker

### Build and run locally:

```bash
# Build the Docker image
docker build -t itswap-app .

# Run the container
docker run -p 3000:3000 \
  -e GROQ_API_KEY=your_key \
  -e CHANGENOW_API_KEY=your_key \
  -e MONGODB_URI=your_uri \
  -e NODE_ENV=production \
  itswap-app
```

### Using Docker Compose:

```bash
# Create .env file with your variables
cp .env.example .env

# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

## Coolify Deployment

### Method 1: Git Repository (Recommended)

1. **Push your code to a Git repository** (GitHub, GitLab, Bitbucket)

2. **In Coolify Dashboard:**
   - Click "New Resource" → "Application"
   - Select "Public Repository" or connect your Git provider
   - Enter your repository URL
   - Select the branch (e.g., `main` or `master`)

3. **Configure Build Settings:**
   - Build Pack: `nixpacks` or `dockerfile`
   - If using Dockerfile: Coolify will auto-detect the Dockerfile
   - Base Directory: `/` (root)
   - Dockerfile Location: `./Dockerfile`

4. **Set Environment Variables:**
   - Go to "Environment Variables" tab
   - Add all required variables from `.env.example`:
     ```
     GROQ_API_KEY=your_actual_key
     CHANGENOW_API_KEY=your_actual_key
     MONGODB_URI=your_actual_mongodb_uri
     NODE_ENV=production
     NEXT_PUBLIC_APP_URL=https://yourdomain.com
     ```

5. **Configure Ports:**
   - Exposed Port: `3000`
   - Public Port: `80` or `443` (with SSL)

6. **Deploy:**
   - Click "Deploy" button
   - Coolify will build and deploy your application
   - Monitor the deployment logs

### Method 2: Docker Image

1. **Build and push to a registry:**

```bash
# Build the image
docker build -t your-registry/itswap-app:latest .

# Push to registry
docker push your-registry/itswap-app:latest
```

2. **In Coolify:**
   - Select "Docker Image" as source
   - Enter your image name: `your-registry/itswap-app:latest`
   - Configure environment variables and ports as above

## Health Checks

The application includes a health check endpoint. Coolify will automatically monitor:
- Endpoint: `http://localhost:3000/api/health`
- Interval: 30 seconds
- Timeout: 10 seconds
- Retries: 3

## SSL/HTTPS Configuration

Coolify automatically handles SSL certificates via Let's Encrypt:

1. In your application settings, go to "Domains"
2. Add your custom domain
3. Enable "Generate SSL Certificate"
4. Update DNS records to point to your Coolify server

## Troubleshooting

### Build Fails

- Check that all dependencies in `package.json` are correct
- Ensure Node.js version compatibility (using Node 20 in Dockerfile)
- Review build logs in Coolify dashboard

### Application Won't Start

- Verify all environment variables are set correctly
- Check MongoDB connection string is accessible from Coolify server
- Review application logs: `docker logs <container-id>`

### Database Connection Issues

- Ensure MongoDB URI is correct and accessible
- Check if MongoDB Atlas IP whitelist includes Coolify server IP
- Test connection string locally first

### Port Conflicts

- Ensure port 3000 is not already in use
- Check Coolify port mapping configuration

## Monitoring

Monitor your application in Coolify:
- **Logs**: Real-time application logs
- **Metrics**: CPU, Memory, Network usage
- **Health**: Automatic health check status

## Scaling

To scale your application in Coolify:
1. Go to application settings
2. Adjust resource limits (CPU, Memory)
3. For horizontal scaling, use Coolify's load balancer feature

## Backup & Recovery

- **Database**: Ensure MongoDB backups are configured
- **Application**: Code is in Git repository
- **Environment Variables**: Keep secure backup of `.env` file

## Updates & Redeployment

### Automatic Deployment:
- Enable "Auto Deploy" in Coolify
- Push changes to your Git repository
- Coolify will automatically rebuild and deploy

### Manual Deployment:
- Click "Redeploy" button in Coolify dashboard
- Or trigger via Coolify API/webhook

## Security Checklist

- ✅ All API keys stored as environment variables (not in code)
- ✅ MongoDB connection uses authentication
- ✅ SSL/HTTPS enabled for production
- ✅ Security headers configured in `next.config.ts`
- ✅ Non-root user in Docker container
- ✅ `.dockerignore` excludes sensitive files

## Performance Optimization

The Dockerfile uses multi-stage builds to:
- Minimize final image size
- Include only production dependencies
- Optimize build cache layers
- Use standalone Next.js output for faster startup

## Support

For issues:
- Check Coolify documentation: https://coolify.io/docs
- Review application logs in Coolify dashboard
- Contact support@itswap.fun for application-specific issues

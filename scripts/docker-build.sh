#!/bin/bash

# Docker build script for itSwap application
# This script builds the Docker image with proper tagging

set -e

echo "🐳 Building Docker image for itSwap..."

# Get version from package.json or use 'latest'
VERSION=$(node -p "require('./package.json').version" 2>/dev/null || echo "latest")

# Build the image
docker build \
  --tag itswap-app:${VERSION} \
  --tag itswap-app:latest \
  --file Dockerfile \
  .

echo "✅ Docker image built successfully!"
echo "   - itswap-app:${VERSION}"
echo "   - itswap-app:latest"
echo ""
echo "To run the container:"
echo "  docker-compose up -d"
echo ""
echo "Or manually:"
echo "  docker run -p 3000:3000 --env-file .env itswap-app:latest"

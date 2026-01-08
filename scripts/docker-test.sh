#!/bin/bash

# Docker test script - runs the container locally for testing
# Make sure you have a .env file with all required variables

set -e

echo "🧪 Testing Docker container locally..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "   Copy .env.example to .env and fill in your values:"
    echo "   cp .env.example .env"
    exit 1
fi

# Start the container
echo "Starting container with docker-compose..."
docker-compose up -d

# Wait for container to be ready
echo "Waiting for application to start..."
sleep 5

# Check health endpoint
echo "Checking health endpoint..."
HEALTH_CHECK=$(curl -s http://localhost:3000/api/health || echo "failed")

if echo "$HEALTH_CHECK" | grep -q "healthy"; then
    echo "✅ Application is healthy!"
    echo ""
    echo "Application is running at: http://localhost:3000"
    echo ""
    echo "To view logs:"
    echo "  docker-compose logs -f"
    echo ""
    echo "To stop:"
    echo "  docker-compose down"
else
    echo "❌ Health check failed!"
    echo "Response: $HEALTH_CHECK"
    echo ""
    echo "Check logs with:"
    echo "  docker-compose logs"
    exit 1
fi

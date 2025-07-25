#!/bin/bash
# Test script to verify Docker build works after lovable-tagger fix

echo "Testing Docker build after lovable-tagger fix..."
echo "Building production Docker image..."

# Test the production Dockerfile that was failing
docker build -f Dockerfile.prod -t test-build . --no-cache

if [ $? -eq 0 ]; then
    echo "✅ Docker build successful!"
    echo "🎉 lovable-tagger issue has been resolved!"
    # Clean up test image
    docker rmi test-build
else
    echo "❌ Docker build failed"
    exit 1
fi

#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output is in the 'out' directory"
    echo ""
    echo "🔧 To deploy to GitHub Pages:"
    echo "1. Go to your repository: https://github.com/dishitaghuge01/Amrit"
    echo "2. Go to Settings > Pages"
    echo "3. Set Source to 'Deploy from a branch'"
    echo "4. Select 'main' branch and '/out' folder"
    echo "5. Click Save"
    echo ""
    echo "🔄 Or push to main branch to trigger automatic deployment via GitHub Actions"
    echo ""
    echo "📋 Current build files in 'out' directory:"
    ls -la out/
else
    echo "❌ Build failed!"
    exit 1
fi 
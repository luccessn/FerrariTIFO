#!/bin/bash

# Switch to the correct git branch (main or master)
echo "Switching to branch master"
git checkout master

# Pull latest changes (optional but recommended)
echo "Pulling latest changes..."
git pull origin master

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the React app
echo "Building app..."
npm run build

# Deploy the build files to the server
echo "Deploying files to server..."
scp -r build/* lukk@45.91.202.214:/var/www/ferraritifo.live/

# Optional: Restart Nginx to make sure the server serves the new build
echo "Restarting Nginx..."
ssh lukk@45.91.202.214 "sudo systemctl restart nginx"

echo "Done!"

#!/bin/bash

### --- FRONTEND DEPLOY ---

# Switch to the correct git branch (master)
echo "🔁 Switching to frontend branch master..."
cd demo
git checkout master

# Pull latest changes
echo "📥 Pulling latest changes for frontend..."
git pull origin master

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Build frontend
echo "⚙️ Building frontend..."
npm run build

# Deploy frontend to server
echo "🚀 Uploading frontend build to server..."
scp -r build/* luk@185.219.81.108:/var/www/ferraritifo.live/

### --- BACKEND DEPLOY ---

# Switch to the correct git branch (master)
echo "🔁 Switching to backend branch master..."
cd ../server
git checkout master

# Pull latest changes
echo "📥 Pulling latest changes for backend..."
git pull origin master

# Install backend dependencies
echo "📦 Installing backend dependencies..."
npm install

# Deploy backend to server
echo "🚀 Uploading backend to server..."
scp -r . luk@185.219.81.108:/home/luk/server/

# Restart backend with PM2
echo "🔁 Restarting backend with PM2 on remote server..."
ssh luk@185.219.81.108 << 'EOF'
  cd /home/luk/server
  pm2 restart ferrari-api || pm2 start index.js --name ferrari-api
  pm2 save
EOF

echo "✅ Deployment finished!"

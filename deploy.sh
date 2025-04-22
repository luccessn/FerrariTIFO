#!/bin/bash
set -e

echo "Switching to branch master"
git checkout master

echo "Pulling latest changes..."
git pull origin master

echo "Installing dependencies..."
cd demo && npm install
cd ../server && npm install

echo "Building React app..."
cd ../demo && npm run build

echo "Deploying React build files to server..."
scp -r build/* luk@185.219.81.108:/var/www/ferraritifo.live/

echo "Deploying the full project to the server..."
scp -r demo luk@185.219.81.108:~/ferrari-demo/
scp -r server luk@185.219.81.108:~/ferrari-server/

echo "Installing PM2..."
ssh luk@185.219.81.108 "npm install pm2@latest -g"

echo "Restarting Express server with PM2..."
ssh luk@185.219.81.108 "cd ~/ferrari-server && pm2 start index.js --name ferrari-server || pm2 restart ferrari-server"

echo "Restarting Nginx..."
ssh luk@185.219.81.108 "sudo systemctl restart nginx"

echo "✅ Deployment Done!"

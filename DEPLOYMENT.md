# RuthyPearls Wear Deployment Guide

## Quick Start - Vercel (Recommended)

### Step 1: Push to GitHub
```bash
cd c:/RuthyPearls/ruthypearlswear
git init
git add .
git commit -m "Initial commit: RuthyPearls Wear e-commerce platform"
git branch -M main
git remote add origin https://github.com/Ezemmuocent Okekpe/ruthypearlswear.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables (copy from `.env.example`)
5. Click "Deploy"

**Your site will be live at**: `https://ruthypearlswear.vercel.app`

### Step 3a: Use Free Vercel Subdomain (No Cost!)
Your site will automatically get a free subdomain:
```
https://ruthypearlswear.vercel.app
```
✅ **Completely free** - No domain purchase needed!

### Step 3b: Connect Custom Domain (Optional - Paid)
If you want www.ruthypearlswear.com instead:
1. In Vercel Dashboard → Settings → Domains
2. Add `www.ruthypearlswear.com`
3. Update DNS records at your domain registrar:
   - **CNAME** record: `www` → `cname.vercel-dns.com`
   - **A** record: `@` → `76.76.19.0`

---

## Alternative: Deploy to AWS EC2 (Nigeria-Based)

### Prerequisites
- AWS Account
- SSH client

### Step 1: Launch EC2 Instance
```bash
# 1. Go to AWS Console → EC2 → Instances
# 2. Click "Launch Instances"
# 3. Choose: Ubuntu 22.04 LTS (Free Tier eligible)
# 4. Instance Type: t3.micro (free tier)
# 5. Storage: 20GB (free tier = 30GB)
# 6. Create new key pair or use existing
# 7. Configure Security Group:
#    - Allow HTTP (80)
#    - Allow HTTPS (443)
#    - Allow SSH (22)
```

### Step 2: Connect to Instance
```bash
# Download key pair and set permissions
chmod 400 your-key.pem

# Connect via SSH
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

### Step 3: Install Dependencies
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Git
sudo apt install -y git

# Install Nginx (web server)
sudo apt install -y nginx

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Certbot (SSL/HTTPS)
sudo apt install -y certbot python3-certbot-nginx
```

### Step 4: Clone & Deploy
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/ruthypearlswear.git
cd ruthypearlswear

# Install dependencies
npm install

# Create .env.local file
nano .env.local
# (Paste your environment variables)

# Build for production
npm run build

# Start with PM2
pm2 start "npm run start" --name "ruthypearlswear"

# Save PM2 config for auto-restart
pm2 save
pm2 startup
```

### Step 5: Configure Nginx
```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/ruthypearlswear

# Paste this config:
---
server {
    listen 80;
    server_name www.ruthypearlswear.com ruthypearlswear.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
---

# Enable the config
sudo ln -s /etc/nginx/sites-available/ruthypearlswear /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 6: Set Up HTTPS/SSL
```bash
# Get SSL certificate
sudo certbot --nginx -d www.ruthypearlswear.com -d ruthypearlswear.com

# Auto-renewal (happens automatically)
sudo systemctl enable certbot.timer
```

### Step 7: Update DNS Records
Connect your domain registrar to AWS:
- **A Record**: `@` → Your EC2 Elastic IP
- **CNAME Record**: `www` → Your EC2 instance

---

## Deploy to AWS RDS Database (Optional)

### For Product/Order Storage:
```bash
# 1. AWS Console → RDS → Create Database
# 2. Choose: PostgreSQL or MySQL
# 3. Free Tier eligible: db.t3.micro
# 4. Create database
# 5. Update DATABASE_URL in .env.local
```

---

## Deploy to Railway

### Step 1: Create Account
1. Visit [railway.app](https://railway.app)
2. Sign up with GitHub

### Step 2: Create New Project
1. Click "Create New Project"
2. Select "Deploy from GitHub repo"
3. Connect repository
4. Select `ruthypearlswear` repo

### Step 3: Add Environment Variables
1. In Railway Dashboard → Variables
2. Add all variables from `.env.example`
3. Railway automatically deploys on push

**Your site will be live at**: `https://your-project.railway.app`

### Step 4: Connect Custom Domain
1. Settings → Domains
2. Add `www.ruthypearlswear.com`
3. Update DNS CNAME to Railway's domain

---

## Payment Integration Setup

### Flutterwave (Recommended for Nigeria)
```bash
npm install @flutterwave/react-sdk
```

1. Sign up at [flutterwave.com](https://flutterwave.com)
2. Get API keys from dashboard
3. Add to `.env.local`

### Stripe (International)
```bash
npm install stripe @stripe/react-js
```

1. Sign up at [stripe.com](https://stripe.com)
2. Get API keys
3. Add to `.env.local`

---

## Database Setup

### Option 1: MongoDB Atlas (Free Tier)
```bash
# 1. Go to mongodb.com/cloud/atlas
# 2. Create free cluster
# 3. Get connection string
# 4. Add to DATABASE_URL in .env.local
```

### Option 2: Firebase
```bash
npm install firebase
```

### Option 3: Supabase (PostgreSQL)
```bash
# 1. Go to supabase.com
# 2. Create project
# 3. Get connection string
# 4. Add to DATABASE_URL in .env.local
```

---

## Monitoring & Analytics

### Google Analytics
```bash
# 1. Create account at google.com/analytics
# 2. Get Measurement ID
# 3. Add NEXT_PUBLIC_GA_ID to .env.local
```

### Uptime Monitoring
```bash
# Use free services:
# - UptimeRobot
# - StatusCake
# - Freshping
```

---

## Domain Options (Free & Paid)

### 🟢 OPTION 1: Free Vercel/Railway Subdomain (Recommended!)
**Cost: ₦0**
- Your site: `https://ruthypearlswear.vercel.app` or `ruthypearlswear.railway.app`
- Includes free SSL/HTTPS
- Professional looking
- No setup required!

### 🟡 OPTION 2: Free Domain from Freenom
**Cost: ₦0 (free domains)**
- Go to [freenom.com](https://freenom.com)
- Get FREE .tk, .ml, .ga, .cf domains
- Works but less professional
- Setup: Add DNS records in Freenom

### 🔵 OPTION 3: Cheap Nigerian Domain (Recommended if budget available)
**Cost: ₦1,000-3,000/year**
- Register at [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com)
- Many offer first-year discounts
- More professional than free domains
- Easy setup with your hosting

### 🟣 OPTION 4: .ng Domain (Nigerian-Specific)
**Cost: ₦5,000-10,000/year**
- Register at NIRA ([nira.org.ng](https://nira.org.ng))
- Shows you're a Nigerian business
- Most professional option
- Setup: Add DNS records

## Domain Setup Checklist

**If using FREE Vercel subdomain:**
- [ ] Deployed to Vercel successfully
- [ ] Your free site works at ruthypearlswear.vercel.app
- [ ] SSL certificate active (automatic)
- [ ] Done! ✅

**If using paid custom domain:**
- [ ] Registered domain at registrar
- [ ] Updated A/CNAME records
- [ ] SSL certificate configured
- [ ] DNS propagated (24-48 hours)
- [ ] Custom domain added to deployment platform
- [ ] Test site is accessible at www.ruthypearlswear.com

---

## Security Checklist

- [ ] Environment variables protected (.env.local in .gitignore)
- [ ] HTTPS/SSL enabled
- [ ] API routes authenticated
- [ ] Database credentials secured
- [ ] Stripe/Flutterwave keys not exposed
- [ ] CORS configured properly
- [ ] Rate limiting enabled

---

## Troubleshooting

### Build Fails
```bash
npm run build
npm cache clean --force
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Deployment Takes Too Long
- Check build logs
- Optimize images
- Remove unused dependencies
- Check for errors in TypeScript

### Domain Not Resolving
- Wait 24-48 hours for DNS propagation
- Clear browser cache
- Check DNS records with: `nslookup www.ruthypearlswear.com`

### SSL Certificate Errors
```bash
# Renew certificate
sudo certbot renew --force-renewal
```

---

## Production Checklist

- [ ] Environment variables configured
- [ ] Database connected
- [ ] Payment processing tested
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Analytics enabled
- [ ] Monitoring setup
- [ ] Backup strategy defined
- [ ] Error logging enabled
- [ ] Performance optimized

---

**Need help?** Check deployment platform documentation:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- AWS: [aws.amazon.com/docs](https://aws.amazon.com/docs)
- Railway: [docs.railway.app](https://docs.railway.app)


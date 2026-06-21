# RuthyPearls Wear - E-Commerce Platform

A modern, fully-featured e-commerce website for selling premium fashion wears and clothing. Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **React**.

**Website**: www.ruthypearlswear.com  
**Domain**: ruthypearlswear.com

---

## 🎯 Features

### ✨ Frontend Features
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Product Catalog**: Browse products by category with search functionality
- **Product Detail Pages**: Detailed product info with size/color selection
- **Shopping Cart**: Add items to cart, manage quantities, remove items
- **Checkout**: Order summary with shipping and tax calculation
- **User Authentication**: Login/Signup pages for customer accounts
- **Order Tracking**: View order history and status
- **Newsletter Signup**: Subscribe for exclusive offers and updates

### 🛠️ Admin Features
- **Admin Dashboard**: Manage products and inventory
- **Product Management**: Add, edit, and delete products
- **Inventory Control**: Track product stock levels
- **Order Management**: View and process customer orders (in development)

### 💳 Payment Processing
- **Stripe Integration**: Ready for Stripe payment processing
- **PayPal Integration**: Ready for PayPal integration
- **Secure Checkout**: Encrypted payment handling

### 📱 User Experience
- Beautiful UI built with Tailwind CSS
- Product filtering by category
- Product search functionality
- Shopping cart with persistent storage (localStorage)
- User accounts with order history
- Responsive navigation with mobile menu

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd ruthypearlswear
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
ruthypearlswear/
├── src/
│   ├── app/
│   │   ├── (main pages)
│   │   ├── products/          # Product catalog & detail pages
│   │   ├── cart/              # Shopping cart page
│   │   ├── auth/              # Login/Signup pages
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── admin/             # Admin dashboard
│   │   ├── api/               # API routes
│   │   │   ├── products/      # Product API endpoints
│   │   │   ├── orders/        # Order API endpoints
│   │   │   └── auth/          # Auth API endpoints
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout with Navigation & Footer
│   │   └── page.tsx           # Home page
│   │
│   ├── components/
│   │   ├── ProductCard.tsx    # Product card component
│   │   ├── Navigation.tsx     # Header/Navigation component
│   │   └── Footer.tsx         # Footer component
│   │
│   ├── lib/
│   │   ├── types.ts           # TypeScript type definitions
│   │   └── products.ts        # Product data & utilities
│   │
│   └── globals.css            # Global styles
│
├── public/
│   ├── images/                # Product images (placeholder)
│   └── [static assets]
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 🔑 Key Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with featured products |
| Products | `/products` | Product catalog with filters & search |
| Product Detail | `/products/[id]` | Individual product page |
| Shopping Cart | `/cart` | Cart review & checkout |
| Login | `/auth/login` | User login page |
| Signup | `/auth/signup` | New account creation |
| Admin Dashboard | `/admin` | Product management |
| About | `/about` | Company information |
| Contact | `/contact` | Contact form & info |

---

## 🛍️ Sample Products

The store comes pre-loaded with sample products in **Nigerian Naira (₦)**:
- Premium Cotton T-Shirt (₦22,500)
- Elegant Blazer (₦97,500)
- Skinny Jeans (₦45,000)
- Summer Floral Dress (₦60,000)
- Sneaker Collection (₦67,500)
- Wool Cardigan (₦75,000)

---

## � Currency

The website is configured for **Nigerian Naira (₦)** currency with:
- 7.5% VAT (Value Added Tax - Nigerian standard)
- Free shipping on orders over ₦10,000
- All prices in NGN

To change currency, edit `src/lib/currency.ts`

### Current Implementation
- **Products**: In-memory (sample data in `/src/lib/products.ts`)
- **Cart**: Browser localStorage
- **Users**: Browser localStorage
- **Orders**: Mock implementation

### For Production
Replace with a real database:
- **Database Options**: MongoDB, PostgreSQL, Firebase, Supabase
- **Authentication**: NextAuth.js, Auth0, Firebase Auth
- **Payment**: Stripe API, PayPal API
- **Storage**: AWS S3, Cloudinary, or similar for images

---

## 🎨 Customization

### Change Color Scheme
Edit `tailwind.config.ts` to customize colors. Current theme: Purple primary color.

### Add Your Logo
1. Create a logo image
2. Place in `/public/images/`
3. Update `Navigation.tsx` component

### Update Product Data
1. Edit `/src/lib/products.t10000 ? 0 : 2500;  // Free shipping over ₦10,000
const tax = subtotal * 0.075;                   // 7.5% Nigerian VATray
3. Or integrate with a database

### Customize Shipping & Tax
In `/src/app/cart/page.tsx`:
```typescript
const shipping = subtotal > 50 ? 0 : 10;  // Free shipping over $50
const tax = subtotal * 0.1;               // 10% tax
```

---

## 🔐 Authentication

Currently uses mock authentication with localStorage. For production:

1. **Install NextAuth.js**:
   ```bash
   npm install next-auth
   ```

2. **Set up authentication provider** (Google, GitHub, etc.)

3. **Create authentication API routes** in `/src/app/api/auth/[...nextauth]/`

---

## 💳 Payment Integration

### Stripe Setup
1. Sign up at [stripe.com](https://stripe.com)
2. Get API keys from Stripe dashboard
3. Install Stripe:
   ```bash
   npm install stripe @stripe/react-js
   ```
4. Create payment endpoint in `/src/app/api/checkout/`

### PayPal Setup
1. Create account at [paypal.com](https://paypal.com)
2. Get client ID
3. Install PayPal SDK:
   ```bash
   npm install @paypal/checkout-server-sdk
   ```

---

## 📋 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended for Global Reach)
1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Connect your domain: Settings → Domains → Add `www.ruthypearlswear.com`

### Deploy to AWS (For Nigeria-based Hosting)
**Option A: AWS Amplify (Easiest)**
1. Create AWS account
2. Connect GitHub repository to Amplify
3. Auto-deploys on every push
4. Supports custom domain at Route 53

**Option B: AWS EC2 + Load Balancer**
1. Launch Ubuntu EC2 instance (t3.micro - free tier eligible)
2. Install Node.js and npm
3. Clone repository and install dependencies
4. Use PM2 for process management:
   ```bash
   npm install -g pm2
   npm run build
   pm2 start "npm run start" --name "ruthypearlswear"
   ```
5. Set up Nginx reverse proxy
6. Configure SSL with Let's Encrypt

### Deploy to Azure
1. Create Azure account
2. Create App Service (Linux, Node.js)
3. Connect GitHub repository
4. Auto-deploy on push
5. Use Application Insights for monitoring

### Deploy to Railway/Render (Easy & Affordable)
1. Sign up at [railway.app](https://railway.app) or [render.com](https://render.com)
2. Connect GitHub repository
3. Add environment variables
4. Deploy with one click

### Environment Variables (.env.local)
```
NEXT_PUBLIC_API_URL=https://www.ruthypearlswear.com
NEXT_PUBLIC_STRIPE_KEY=pk_test_... (if using Stripe)
STRIPE_SECRET_KEY=sk_test_...
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your_database_connection_string
```

### Deploy to GitHub Pages (static)

This repository can be published to GitHub Pages by exporting a static build. Note: GitHub Pages only serves static files — API routes and server-side features will not work. For full Next.js functionality use Vercel or a Node server.

- Local manual deploy (one-time):

```bash
# install deps
npm install

# build and export
npm run build
npm run export

# publish the `out/` directory to the `gh-pages` branch
npm run deploy:gh-pages
```

- Automatic deploy via GitHub Actions:

A workflow is included at [.github/workflows/deploy-gh-pages.yml](.github/workflows/deploy-gh-pages.yml) that builds and exports the site and deploys `out/` to the `gh-pages` branch on push to `main`/`master`.

The workflow sets `NEXT_PUBLIC_BASE_PATH` to `/ruthypearlswear`. If your repository name is different, update the workflow or change the env value to `/<your-repo-name>` so assets and links resolve correctly.

- Important:
   - After deployment, enable GitHub Pages in your repository Settings → Pages and select the `gh-pages` branch as the source.
   - The site will be available at: `https://<username>.github.io/ruthypearlswear` (replace `<username>` with your GitHub username).

### Custom Domain Setup
1. Purchase domain at [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Google Domains](https://domains.google.com)
2. Update DNS records to point to your hosting provider:
   - **Type**: A Record
   - **Name**: @ (or www)
   - **Value**: Your deployment's IP/CNAME

### SSL Certificate (HTTPS)
- **Vercel**: Automatic with custom domain
- **AWS Amplify**: Automatic with CloudFront
- **Self-hosted**: Use Let's Encrypt with Certbot
  ```bash
  sudo apt install certbot python3-certbot-nginx
  sudo certbot certonly --nginx -d www.ruthypearlswear.com
  ```

---

## 📚 Technology Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks + Context (for cart)
- **Deployment**: Vercel, AWS, Azure, or traditional hosting
- **Payment**: Stripe, PayPal (integration ready)
- **Database**: Firebase, MongoDB, PostgreSQL (choose one)

---

## 🔄 Workflow

### For Developers
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test locally: `npm run dev`
3. Build to check for errors: `npm run build`
4. Commit: `git add . && git commit -m "Add feature"`
5. Push: `git push origin feature/your-feature`
6. Create Pull Request

### For Content Management
1. Access `/admin` dashboard
2. Add/edit/delete products (currently local)
3. Manage inventory
4. View orders (in development)

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Image Issues
- Place product images in `/public/images/`
- Update product image paths in `/src/lib/products.ts`

---

## 📞 Support

- **Email**: info@ruthypearlswear.com
- **Phone**: +1 (234) 567-8900
- **Hours**: Mon-Fri 9AM-6PM, Sat 10AM-4PM

---

## 📝 License

This project is proprietary and confidential. 

---

## 🚀 Next Steps

1. **Set up database** (MongoDB, PostgreSQL, Firebase)
2. **Implement real authentication** (NextAuth.js, Firebase Auth)
3. **Add payment processing** (Stripe, PayPal)
4. **Connect admin dashboard to database**
5. **Set up email notifications** (SendGrid, Mailgun)
6. **Implement image upload** for products
7. **Add customer reviews** and ratings
8. **Set up analytics** (Google Analytics, Mixpanel)
9. **Deploy to production**
10. **Set up domain** (www.ruthypearlswear.com)

---

## 📦 Dependencies

Key packages installed:
- `next@16.1.6`
- `react@19` 
- `react-dom@19`
- `typescript@5.x`
- `tailwindcss@4.x`
- `eslint@9.x`

---

**Created with ❤️ for RuthyPearls Wear**  
**Last Updated**: March 2026

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

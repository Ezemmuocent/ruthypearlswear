# RuthyPearls Wear - Quick Start Guide (Nigeria)

🇳🇬 **Welcome to RuthyPearls Wear** - Your Premium Fashion E-Commerce Platform

## ✅ What's Already Set Up

- ✓ Complete product catalog system
- ✓ Shopping cart with checkout
- ✓ User authentication (login/signup)
- ✓ Admin dashboard (add/manage products)
- ✓ **Nigerian Naira (₦) pricing**
- ✓ **7.5% Nigerian VAT**
- ✓ **Free shipping on orders over ₦10,000**
- ✓ Beautiful responsive design
- ✓ Mobile-friendly interface

---

## 🚀 Quick Start (Local Development)

### 1. Start Development Server
```bash
cd c:/RuthyPearls/ruthypearlswear
npm run dev
```

**Open in browser**: http://localhost:3000

### 2. Browse the Website
- **Home**: Featured products
- **Shop** (/products): Browse all products in Nigerian Naira
- **Product Details** (/products/[id]): View sizes, colors, prices
- **Cart** (/cart): See pricing with ₦ symbol and VAT
- **Login/Signup** (/auth/login): User authentication
- **Admin Dashboard** (/admin): Add/edit products
- **About** (/about): Company info
- **Contact** (/contact): Get in touch

### 3. Test the Cart
1. Click "View Details" on any product
2. Select size and color
3. Click "Add to Cart"
4. Go to /cart
5. See prices in ₦ with tax and shipping calculations

---

## 📱 Sample Products (All in Nigerian Naira)

| Product | Price | Category |
|---------|-------|----------|
| Premium Cotton T-Shirt | ₦22,500 | Tops |
| Elegant Blazer | ₦97,500 | Outerwear |
| Skinny Jeans | ₦45,000 | Bottoms |
| Summer Floral Dress | ₦60,000 | Dresses |
| Sneaker Collection | ₦67,500 | Footwear |
| Wool Cardigan | ₦75,000 | Knitwear |

---

## 🔧 Admin Dashboard

**URL**: http://localhost:3000/admin

### Add New Product
1. Click "Add New Product"
2. Fill in details:
   - Product Name
   - Price (in ₦)
   - Category
   - Stock Quantity
   - Description
3. Click "Add Product"

### Edit/Delete Products
- Delete button on product table (coming soon: edit feature)

---

## 💳 Currency & Pricing

### Automatic Calculations
```
Product Price: ₦45,000
Quantity: 2
Subtotal: ₦90,000
VAT (7.5%): ₦6,750
Shipping: FREE (over ₦10,000)
TOTAL: ₦96,750
```

### Customizing Prices
Edit `src/lib/products.ts`:
```typescript
price: 22500, // Change to any amount in Naira
```

---

## 📁 Project Structure

```
ruthypearlswear/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── products/             # Product pages
│   │   ├── cart/                 # Shopping cart
│   │   ├── auth/                 # Login/Signup
│   │   ├── admin/                # Admin dashboard
│   │   ├── about/                # About page
│   │   ├── contact/              # Contact form
│   │   └── api/                  # API routes
│   ├── components/               # React components
│   ├── lib/
│   │   ├── types.ts              # TypeScript types
│   │   ├── products.ts           # Sample products
│   │   ├── currency.ts           # Currency formatting
│   │   └── nigeria-config.ts     # Nigeria settings
│   └── globals.css               # Tailwind styles
├── public/                       # Images & static files
├── DEPLOYMENT.md                 # Deployment guide
└── README.md                     # Full documentation
```

---

## 🌐 Deploy to Production (FREE!)

### ✅ Option 1: Vercel FREE Subdomain (Recommended) 🚀
```bash
npm install -g vercel
vercel
# Follow prompts - Deploy in 2 minutes!
# Your LIVE site: https://ruthypearlswear.vercel.app ✅ COMPLETELY FREE
```

**Why Vercel's FREE tier?**
- ✓ Global CDN (lightning fast)
- ✓ Professional subdomain (ruthypearlswear.vercel.app)
- ✓ No credit card needed
- ✓ Deploy on every GitHub push
- ✓ Upgrade to custom domain anytime (₦1,000-10,000/year)

---

### Other Domain Options (See `DEPLOYMENT.md`)
- **FREE Freenom Domain** (.tk, .ml, .ga, .cf)
- **Paid Custom Domain** (₦1,000-10,000/year)
- **Railway** (Affordable alternative, ₦1,500-5,000/month)
- **AWS EC2** (Full control, higher cost)
- **Traditional Hosting** (cPanel/Shared hosting)

---

## 🛠️ Configuration for Nigeria

### File: `src/lib/nigeria-config.ts`

Contains:
- Nigerian VAT (7.5%)
- Shipping costs
- Payment methods (Flutterwave, card, bank transfer)
- Business hours (WAT - West Africa Time)
- Major Nigerian cities

### Update Business Info
Edit `src/lib/nigeria-config.ts`:
```typescript
business: {
  name: 'RuthyPearls Wear',
  email: 'info@ruthypearlswear.com',
  phone: '+234 XXX XXX XXXX', // Update with your phone
  address: 'Lagos, Nigeria',   // Update with your address
},
```

---

## 💰 Payment Methods (Ready to Integrate)

- ✓ Card (Visa, Mastercard, Verve)
- ✓ Flutterwave
- ✓ Bank Transfer
- ✓ USSD (*901#)

**To Add Payment Processing:**

### Flutterwave (Recommended for Nigeria)
```bash
npm install @flutterwave/react-sdk
```

1. Sign up at [flutterwave.com](https://flutterwave.com)
2. Get API keys
3. Create payment integration in `/src/app/api/checkout/`

---

## 🔐 User Authentication

### Current: Mock Authentication
- Users can login/signup (stored in localStorage)
- Ready for real authentication

### To Add Real Authentication:
```bash
npm install next-auth
```

See `README.md` for NextAuth setup

---

## 📊 Analytics & Tracking

Add Google Analytics:
1. Create account at [google.com/analytics](https://google.com/analytics)
2. Get Measurement ID
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXX
   ```

---

## 🐛 Troubleshooting

### Server won't start?
```bash
npm cache clean --force
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Prices not showing in ₦?
- Check `src/lib/currency.ts`
- Verify imports in components

---

## 📋 Before Going Live Checklist

- [ ] All product prices updated to ₦ Naira
- [ ] VAT is set to 7.5% (or update in code)
- [ ] Shipping costs configured
- [ ] Contact information updated
- [ ] Privacy policy added
- [ ] Terms & conditions added
- [ ] Payment integration completed
- [ ] Database connected
- [ ] Admin credentials changed
- [ ] Domain registered (www.ruthypearlswear.com)
- [ ] SSL certificate configured
- [ ] Analytics enabled
- [ ] Monitoring setup

---

## 📞 Support & Documentation

### Files to Read
- **`README.md`** - Complete feature documentation
- **`DEPLOYMENT.md`** - Detailed deployment guide
- **`.env.example`** - Environment variables needed

### Key Files to Customize
- `src/lib/nigeria-config.ts` - Nigeria settings
- `src/lib/products.ts` - Product inventory
- `src/components/Navigation.tsx` - Header/menu
- `src/components/Footer.tsx` - Footer info

---

## 🚀 Next Steps

1. **Update Products** - Customize product catalog in `src/lib/products.ts`
2. **Add Logo** - Place your logo in `public/images/` and update Navigation.tsx
3. **Config Business Info** - Update `src/lib/nigeria-config.ts`
4. **Add Payment** - Integrate Flutterwave or Stripe
5. **Add Database** - Connect MongoDB, Firebase, or PostgreSQL
6. **Deploy** - Push to GitHub and deploy (Vercel, Railway, or AWS)
7. **Add Domain** - Connect www.ruthypearlswear.com

---

## 💡 Pro Tips

### Enable Fast Refresh
- Auto-reloads when you save files during `npm run dev`

### Production Build
```bash
npm run build
npm start
```

### Check for Errors
```bash
npm run lint      # Find code issues
npm run type-check # Check TypeScript
```

### Optimize Images
- Place product images in `public/images/`
- Recommended: 600x600px, WebP format

---

**🎉 You're all set! Your RuthyPearls Wear e-commerce platform is ready.**

**Questions?** Check documentation or contact support.

---

**Made with ❤️ for Nigerian Fashion Entrepreneurs**

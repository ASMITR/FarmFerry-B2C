This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



countrydelight-clone/
│
├── app/
│   ├── layout.tsx                # Root layout (Header, Footer, etc.)
│   ├── page.tsx                  # Homepage
│   ├── about/                    # About Page
│   ├── products/                 # Product listing pages
│   │   ├── [category]/           # Dynamic category
│   │   │   └── page.tsx
│   │   ├── [productId]/          # Product detail page
│   │   │   └── page.tsx
│   ├── cart/                     # Cart and checkout flow
│   │   ├── page.tsx
│   ├── subscription/            # Subscription management
│   │   └── page.tsx
│   ├── auth/                    # OTP login, logout
│   │   ├── login/               # Enter phone
│   │   │   └── page.tsx
│   │   ├── verify/              # OTP Verification
│   │   │   └── page.tsx
│   ├── blog/                    # Blog articles
│   │   ├── page.tsx
│   │   └── [slug]/              # Blog detail
│   │       └── page.tsx
│   ├── faq/                     # FAQs
│   │   └── page.tsx
│   └── support/                 # Support contact page
│       └── page.tsx
│
├── components/                  # All UI components
│   ├── ui/                      # Atomic UI building blocks
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Drawer.tsx
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── product/                 # Product-related components
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductDetail.tsx
│   ├── cart/                    # Cart UI components
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   ├── subscription/
│   │   └── SubscriptionCard.tsx
│   ├── auth/
│   │   ├── PhoneInput.tsx
│   │   ├── OTPInput.tsx
│   └── shared/
│       ├── BannerSlider.tsx
│       ├── CategorySlider.tsx
│       ├── LocationSelector.tsx
│       └── RatingStars.tsx
│
├── lib/                         # Utilities & helper functions
│   ├── api.ts                   # Axios or fetch wrapper
│   ├── auth.ts                  # OTP & session utils
│   ├── products.ts              # Product API functions
│   └── cart.ts                  # Cart manipulation utils
│
├── context/                     # React contexts
│   ├── AuthContext.tsx
│   ├── CartContext.tsx
│   └── LocationContext.tsx
│
├── hooks/                       # Custom hooks
│   ├── useAuth.ts
│   ├── useCart.ts
│   └── useModal.ts
│
├── constants/                   # Reusable config and enums
│   ├── routes.ts
│   ├── categories.ts
│   └── config.ts
│
├── public/                      # Static assets
│   └── images/
│       ├── logo.svg
│       └── banners/
│
├── styles/
│   ├── globals.css              # Tailwind + custom styles
│   └── theme.css                # Theming if needed
│
├── middleware.ts                # For auth/location redirects (if needed)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json

# FarmFerry-B2C🐄 Farm Ferry — Fresh From the Farm to Your Doorstep

Farm Ferry is a React/Next.js-based web application designed to deliver farm-fresh essentials like milk, eggs, vegetables, and more directly to your home. The platform connects consumers with local farmers and vendors, ensuring high-quality, organic products with transparency and trust.

✅ Full Folder Structure with File Details


src/
├── components/
│   ├── Hero.jsx              → Hero section with banner, text, and CTA
│   ├── Stats.jsx             → Displays farm stats like customers, farmers, deliveries
│   ├── CategoryCards.jsx     → Grid or card layout for product categories (Milk, Eggs, etc.)
│   ├── HowItWorks.jsx        → Steps to use Farm Ferry: select > order > get delivery
│   ├── ProductList.jsx       → Renders dynamic list of products using JSON data
│   ├── FooterLinks.jsx       → Footer with links like About, Privacy, Terms
│   └── HeaderNav.jsx         → Top navigation menu for page routing
│
├── pages/
│   ├── Home.jsx              → Main landing page with Hero, Stats, CategoryCards
│   ├── Offers.jsx            → Displays discount offers and promo banners
│   ├── About.jsx             → Information about Farm Ferry's mission and team
│   ├── Contact.jsx           → Contact form and customer support details
│   ├── FAQs.jsx              → Answers to common questions
│   ├── Privacy.jsx           → Privacy policy for user data
│   ├── Terms.jsx             → Terms and conditions of using Farm Ferry
│   ├── TreeOfLife.jsx        → Special page about eco-friendly and traceable food journey
│   └── products/
│       ├── Milk.jsx          → Lists all milk products from products.json
│       ├── Eggs.jsx          → Lists egg-related products
│       ├── Breads.jsx        → Bread and bakery products page
│       ├── Vegetables.jsx    → All fresh vegetables listed here
│       └── Snacks.jsx        → Snacks, packed items, etc.
│
├── assets/
│   ├── images/
│   │   ├── hero.jpg              → Used in Hero.jsx as banner
│   │   ├── stats-icons.svg       → Icons for stats (e.g., 👨‍🌾👩‍🌾)
│   │   ├── categories/
│   │   │   ├── milk.png
│   │   │   ├── eggs.png
│   │   │   └── vegetables.png    → Icons for CategoryCards
│   │   └── products/
│   │       ├── milk1.jpg
│   │       ├── egg1.jpg
│   │       └── veg1.jpg          → Product thumbnails used in ProductList
│   └── analytics/
│       └── gtag.js               → Google Analytics or other tracking scripts
│
├── styles/
│   ├── global.css           → Global reset, body styles, fonts, layout base
│   └── components.css       → Individual components styling (cards, navbar, buttons)
│
└── data/
    ├── stats.json           → Numbers and facts (farmers served, orders delivered, etc.)
    ├── categories.json      → List of categories with IDs, titles, and image paths
    └── products.json        → Complete product catalog with:
                              {
                                id,
                                name,
                                description,
                                price,
                                category,
                                image
                              }


🔎 How Everything Works Together

components/
        These are modular UI blocks reused across pages.
        For example, CategoryCards shows category buttons on Home and links to pages like /products/Milk.

pages/
        Each file is linked to a route.
        Example: /About page uses About.jsx.
        Category product pages (like Milk.jsx) filter data from products.json based on category.

assets/images/
        Images used in cards, hero section, and product listings.
        Split into categories (icons) and products (actual images of items).

styles/
        global.css contains default font, background, spacing.
        components.css styles cards, buttons, layout of components like Header, ProductList.

data/
        Static JSON data (acts like mock backend for now).
        products.json is used by ProductList.jsx in product pages to list items by category.
        stats.json is used by Stats.jsx.
        categories.json powers CategoryCards.jsx.

🚀 Features

    -  Responsive design with modern layout
    -  Clean folder structure for scalability
    -  Category-wise product listing (Milk, Eggs, Vegetables, etc.)
    -  Informative static pages like About, FAQs, Terms, Privacy
    -  Reusable React components with JSON-based data
    -  Ready for expansion into dynamic backend/API

📄 Pages Overview

    -  Home.jsx – Landing page with hero banner, stats, and category cards
    -  Offers.jsx – Highlights current deals or promotional bundles
    -  About.jsx – Tells the story and mission of Farm Ferry
    -  Contact.jsx – Contact form and customer support info
    -  FAQs.jsx – Common queries answered
    -  Privacy.jsx – Privacy policy
    -  Terms.jsx – Terms and conditions
    -  TreeOfLife.jsx – Sustainability & traceability vision

🌱 Purpose of TreeOfLife.jsx

    TreeOfLife.jsx is a special feature page designed to:
        -  Illustrate the full farm-to-fork journey
        -  Show a visual connection between farmers, products, and families
        -  Promote transparency and eco-farming practices

🗃️ Data Files

    Stored in /data/ as JSON for ease of integration:
    -  stats.json – Milestones and figures (farmers onboarded, products sold)
    -  categories.json – Product categories with title and image references
    -  products.json – Product details including name, price, description, and category

🖼️ Assets

    All static images are placed in /assets/images/ with subfolders:
    -  categories/ – Icons for each product category
    -  products/ – Product thumbnails
    -  hero.jpg – Hero banner background
    -  stats-icons.svg – Icons used in Stats section

💡 Future Improvements

    -  Add authentication and user accounts
    -  Implement backend with real-time inventory
    -  Order tracking and delivery scheduling
    -  Admin dashboard to manage products

🛠️ Tech Stack

    -  Framework: React.js / Next.js
    -  Styling: CSS Modules or Tailwind (optional)
    -  Hosting: GitHub Pages / Netlify
    -  Deployment Ready: Static build-friendly structure
# Lexora Landing Page - Pixel-Perfect Figma Implementation

Complete, production-ready landing page built from your Figma designs with exact specifications.

## 🎨 Design Specifications

### Colors (Extracted from Figma)
- **Primary Blue**: `#4277FF`
- **Text Dark**: `#2C2C2C` (gray-darker)
- **Text Medium**: `#3D3D3D` (gray-dark)
- **Background Light**: `#E8F2FF`
- **Background Lighter**: `#F0F7FF`

### Typography (Exact from Figma)
- **Hanken Grotesk**: Main body font, navigation
  - Mentox Labs: 45.68px, Bold (700)
  - Presents: 34.26px, SemiBold (600)
- **Montserrat**: Taglines and emphasis
  - Tagline: 26.55px, Bold (700)
- **Farro**: Section headings
  - Card titles: 36.26px, Bold (700), 139% line-height, 5% letter-spacing

## 📦 Complete Sections Included

1. ✅ **Navigation Header** - Sticky nav with buttons
2. ✅ **Hero Section** - 3D grid background + LEXORA logo
3. ✅ **Why Lexora** - Interactive keyboard visual
4. ✅ **$4 Trillion ERP Problem** - With keyboard + quote
5. ✅ **Industry Problems** - 4 cards (Experience Gap, Reconstruction Cycle, Scalability Wall, Agentic Barrier)
6. ✅ **The Equation** - Agentic AI flow diagram + problem cards
7. ✅ **Introducing Lexora** - 3 feature cards (Semantic Buffer, Neutrality, Adaptive Shield)
8. ✅ **Architecture** - System diagram with Lexora central node
9. ✅ **What Makes Lexora Special** - 3 detailed feature cards + quote + "Migrate at Warp Speed"
10. ✅ **Future of ERP** - Final 3 benefit cards
11. ✅ **Footer** - Links and copyright

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
lexora-landing-v2/
├── app/
│   ├── globals.css                    # Global styles + animations
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Main page composition
│
├── components/
│   ├── Header.tsx                     # Sticky navigation
│   ├── HeroSection.tsx                # Hero with 3D grid
│   ├── GridBackground.tsx             # Animated 3D grid
│   ├── WhyLexoraSection.tsx           # Keyboard visual
│   ├── ERPProblemSection.tsx          # ERP problem statement
│   ├── IndustryProblemsSection.tsx    # 4 problem cards
│   ├── TheEquationSection.tsx         # Agentic AI diagram
│   ├── IntroducingLexoraSection.tsx   # 3 feature cards
│   ├── ArchitectureSection.tsx        # System architecture
│   ├── WhatMakesLexoraSpecialSection.tsx # Detailed features
│   ├── FutureOfERPSection.tsx         # Final benefits
│   └── Footer.tsx                     # Footer
│
├── public/                            # Static assets
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript config
├── tailwind.config.js                 # Tailwind with exact colors
├── postcss.config.js                  # PostCSS config
├── next.config.js                     # Next.js config
└── README.md                          # This file
```

## 🎭 Animations

All animations implemented with Framer Motion:
- **Scroll-triggered reveals** - Sections animate in on scroll
- **Staggered keyboard keys** - Sequential animation
- **3D grid parallax** - Responds to scroll position
- **Hover effects** - Cards and buttons
- **Fade-in-up** - Global animation pattern

## 📱 Responsive Design

- **Mobile**: < 768px - Single column, simplified keyboard
- **Tablet**: 768px - 1024px - Two columns
- **Desktop**: > 1024px - Full layout with all features

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lucide React** - Icon library

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    DEFAULT: '#4277FF', // Your color here
  }
}
```

### Change Fonts
Fonts are imported in `app/globals.css`. Update the Google Fonts URL and CSS variables.

### Modify Content
Each section component contains its own content. Simply edit the component files in `/components`.

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Auto-deploy on push

### Other Platforms
```bash
npm run build
npm start
```

## ✨ Key Features

- ✅ Pixel-perfect match to Figma
- ✅ All 11 sections implemented
- ✅ Smooth scroll animations
- ✅ 3D grid background with parallax
- ✅ Fully responsive
- ✅ TypeScript throughout
- ✅ Production-ready code
- ✅ Clean component architecture

## 📊 Performance

- Optimized with Next.js App Router
- Code splitting automatic
- Image optimization ready
- CSS minification
- Font optimization

## 🤝 Support

For questions or issues, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

Built with precision to match your Figma design exactly. Every color, font, spacing, and animation has been carefully implemented! 🎨✨

# Constellation Journey

A fully responsive single-scroll Next.js + Tailwind CSS website that creates a beautiful space-themed journey through memories, photos, and heartfelt messages.

## ✨ Features

- **Deep Space Theme**: Dark navy background with starlight white text and blue-purple gradients
- **Smooth Animations**: Floating stars, glowing effects, and gentle transitions
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Interactive Sections**: Hover effects, audio players, and hidden surprises
- **Modern Typography**: Playfair Display (serif) + Inter (sans-serif) fonts

## 📄 Sections

### 1. **Navbar**
- Transparent navbar with smooth scroll navigation
- Glass effect on scroll
- Responsive mobile menu

### 2. **Hero Section**
- Full-screen space background with animated stars
- Glowing headline: "Our Constellation Journey"
- Call-to-action buttons with smooth scrolling

### 3. **Memory Lane**
- Vertical scrollable timeline
- Alternating left/right memory blocks
- Date, title, image, and description for each memory
- 5 sample memories included

### 4. **The Gallery**
- Responsive grid layout
- Hover effects with hidden captions
- 9 gallery items with stories
- Smooth image transitions

### 5. **The Letter Room**
- Elegant serif font letter layout
- Parchment-style background
- Heartfelt letter content
- Decorative elements

### 6. **Audio Room**
- 3 audio players with waveform visualization
- Play/pause functionality
- Sender attribution
- Responsive audio controls

### 7. **Message Orbit**
- Circular layout of 8 birthday messages
- Orbiting animation effect
- Soft glowing hover effects
- Interactive message bubbles

### 8. **Hidden Room**
- Subtle unlock button
- Animated reveal of secret content
- Video message placeholder
- Special secret message

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd constellation-journey
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
constellation-journey/
├── public/
│   └── assets/
│       ├── photos/          # Memory photos
│       ├── gallery/         # Gallery images
│       ├── audio/           # Audio clips
│       └── hidden/          # Secret videos
├── src/
│   └── app/
│       ├── components/      # React components
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout
│       └── page.tsx         # Main page
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
The website uses a deep space color palette:
- Background: `#0d0d2b` (Dark Navy)
- Text: `#ffffff` (Starlight White)
- Accent: Blue-purple gradient
- Glass effect: Semi-transparent overlays

### Fonts
- **Playfair Display**: Serif font for headings and special text
- **Inter**: Sans-serif font for body text

### Animations
- Floating stars in hero section
- Glowing effects on hover
- Smooth transitions between sections
- Pulse animations for interactive elements

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions
- Optimized for all screen sizes

## 🎵 Audio Features

The audio room includes:
- HTML5 audio players
- Waveform visualization
- Play/pause controls
- Duration display
- Sender attribution

## 🔧 Technical Details

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Animations**: CSS animations + Tailwind utilities
- **Icons**: Heroicons (SVG)
- **Fonts**: Google Fonts (Playfair Display + Inter)

## 📸 Adding Media

1. **Photos**: Add memory photos to `/public/assets/photos/`
2. **Gallery**: Add gallery images to `/public/assets/gallery/`
3. **Audio**: Add audio clips to `/public/assets/audio/`
4. **Videos**: Add secret videos to `/public/assets/hidden/`

See `/public/assets/README.md` for detailed file requirements.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🎯 Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal JavaScript bundle
- Efficient CSS animations
- Responsive images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Special Thanks

Created with love and stardust ✨

---

**Constellation Journey** - A universe of memories, mapped in stars 🌟

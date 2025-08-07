# Deployment Guide for Constellation Journey

This guide will walk you through deploying your Constellation Journey project to GitHub Pages and other platforms.

## 🚀 Quick Deploy Options

### Option 1: GitHub Pages (Recommended for beginners)
### Option 2: Vercel (Recommended for Next.js)
### Option 3: Netlify

---

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Node.js**: Version 18 or higher installed
3. **Git**: Git installed on your computer
4. **Code Editor**: VS Code or your preferred editor

---

## 🎯 Option 1: Deploy to GitHub Pages

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `constellation-journey`
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (you already have one)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/constellation-journey.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow file (`.github/workflows/deploy.yml`) will automatically handle deployment

### Step 3: Deploy

1. **Push your changes**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push
   ```

2. **Monitor deployment**:
   - Go to **Actions** tab in your repository
   - Watch the deployment progress
   - Your site will be available at: `https://YOUR_USERNAME.github.io/constellation-journey`

---

## ⚡ Option 2: Deploy to Vercel (Recommended)

### Step 1: Prepare Repository
Follow the same steps as GitHub Pages (Step 1 above)

### Step 2: Deploy to Vercel

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository**:
   - Select `constellation-journey` from the list
   - Vercel will automatically detect it's a Next.js project
5. **Configure project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Click "Deploy"**

### Step 3: Custom Domain (Optional)
- In your Vercel dashboard, go to **Settings** → **Domains**
- Add your custom domain if you have one

---

## 🌐 Option 3: Deploy to Netlify

### Step 1: Prepare Repository
Follow the same steps as GitHub Pages (Step 1 above)

### Step 2: Deploy to Netlify

1. **Go to [Netlify.com](https://netlify.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New site from Git"**
4. **Choose GitHub** and select your repository
5. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
6. **Click "Deploy site"**

---

## 🔧 Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check that all dependencies are in `package.json`
   - Ensure Node.js version is 18+
   - Check the build logs for specific errors

2. **Images Not Loading**:
   - Make sure all images are in the `public/` folder
   - Check file paths are correct
   - Verify image file names match exactly

3. **Audio Not Playing**:
   - Ensure audio files are in `public/assets/audio/`
   - Check file formats (MP3 recommended)
   - Verify file paths in components

4. **Styling Issues**:
   - Clear browser cache
   - Check if Tailwind CSS is building correctly
   - Verify `globals.css` is imported

### Performance Optimization:

1. **Optimize Images**:
   - Compress images before adding to `public/`
   - Use appropriate formats (JPG for photos, PNG for graphics)
   - Consider using WebP format for better compression

2. **Optimize Audio**:
   - Compress audio files to reasonable sizes
   - Use MP3 format for compatibility
   - Consider lazy loading for audio files

---

## 📱 Testing Your Deployment

1. **Test on different devices**:
   - Desktop
   - Tablet
   - Mobile phone

2. **Test all features**:
   - Navigation
   - Audio players
   - Image galleries
   - Hidden room
   - Responsive design

3. **Check performance**:
   - Use browser dev tools
   - Test loading speeds
   - Verify all assets load correctly

---

## 🔄 Updating Your Site

### For GitHub Pages:
```bash
git add .
git commit -m "Update site content"
git push
```

### For Vercel/Netlify:
- Automatic deployment on push to main branch
- Or manually trigger from dashboard

---

## 📞 Support

If you encounter issues:

1. **Check the deployment logs** in your platform's dashboard
2. **Verify your repository structure** matches the expected layout
3. **Test locally first** with `npm run dev`
4. **Check the browser console** for JavaScript errors

---

## 🎉 Congratulations!

Your Constellation Journey is now live on the web! Share your beautiful space-themed memory journey with the world.

**Remember**: The site is public, so make sure any personal content is appropriate for public viewing. 
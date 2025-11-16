# VyomGarud - UAV Systems Landing Page

A modern, responsive landing page for VyomGarud - a military-grade UAV/drone systems company. Built with React and Tailwind CSS, featuring a dark, professional aesthetic with smooth animations and military-inspired design elements.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Design Notes](#design-notes)
- [Customization](#customization)
- [Deployment](#deployment)

## ✨ Features

- **Responsive Design** - Fully responsive across mobile, tablet, and desktop devices
- **Modern UI/UX** - Dark theme with military-grade aesthetic
- **Smooth Animations** - Subtle hover effects and transitions using Tailwind
- **Component Architecture** - Clean, maintainable React component structure
- **Performance Optimized** - Fast loading and smooth scrolling
- **SEO Friendly** - Semantic HTML structure

### Page Sections

1. **Hero Section** - Eye-catching hero with company tagline and CTAs
2. **About Section** - Company mission and vision statement
3. **Capabilities Section** - 4 key product offerings with icons and descriptions
4. **Highlights Section** - 3 numbered feature highlights
5. **Contact Section** - Contact form with company information
6. **Footer** - Branding and copyright information

## 🛠 Tech Stack

- **React 18.x** - Frontend framework
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vyomgarud-landing.git
   cd vyomgarud-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Development

Run the development server:
```bash
npm start
```

### Production Build

Create an optimized production build:
```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

### Testing

Run tests (if configured):
```bash
npm test
```

## 📁 Project Structure

```
vyomgarud-landing/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js              # Main component
│   ├── index.js            # Entry point
│   └── index.css           # Tailwind imports
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json
└── README.md
```

## 🎨 Design Notes

### Color Palette

- **Primary Background**: `#0a0a0a` (zinc-950)
- **Secondary Background**: `#18181b` (zinc-900)
- **Accent Color**: `#ff7b00` (Orange)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#a1a1aa` (zinc-400)

### Typography

- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Inter, Segoe UI)
- **Headings**: Bold, ranging from 2xl to 7xl
- **Body Text**: Regular weight, lg to xl sizes

### Design Principles

1. **Military-Grade Aesthetic**
   - Dark color scheme suggesting stealth and sophistication
   - Orange accents for high visibility and energy
   - Grid overlay patterns for technical precision

2. **Visual Hierarchy**
   - Large, bold headings for immediate impact
   - Clear section separations with consistent spacing
   - Strategic use of gradients and borders

3. **User Experience**
   - Smooth scroll navigation
   - Hover states on all interactive elements
   - Mobile-first responsive design
   - Intuitive navigation with sticky header

4. **Brand Identity**
   - Professional and trustworthy
   - Modern and innovative
   - Military precision and reliability

### Key Design Elements

- **Gradient Backgrounds**: Subtle gradients from zinc-900 to zinc-950
- **Border Styling**: 1px solid borders with zinc-800
- **Border Radius**: Consistent 8px to 16px rounded corners
- **Hover Effects**: Scale transforms (1.05) and color transitions
- **Grid Pattern**: SVG-based grid overlay in hero section
- **Icons**: Lucide React icons for visual consistency

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Run `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/vyomgarud-landing",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

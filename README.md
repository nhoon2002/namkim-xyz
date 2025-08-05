# Nam Kim - Portfolio

A modern, responsive portfolio website built with Next.js 15 and React 18. Features a clean, minimalist design with dark/light theme support and smooth animations.

## 🚀 Tech Stack

### Frontend
- **Next.js 15.0.0** - React framework with App Router
- **React 18.2.0** - UI library with hooks
- **CSS3** - Custom CSS with CSS variables for theming
- **Intersection Observer API** - Scroll animations
- **Local Storage** - Theme persistence

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **npm** - Package management

## 📁 File Structure

```
next/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navigation.js      # Theme toggle & mobile menu
│       │   ├── Hero.js            # Hero section with typing effect
│       │   ├── About.js           # About section with code block
│       │   ├── Projects.js        # Projects grid
│       │   └── Contact.js         # Contact form
│       ├── globals.css            # Global styles & theming
│       ├── layout.js              # Root layout with metadata
│       └── page.js                # Main page component
├── public/                        # Static assets
├── package.json                   # Dependencies & scripts
├── next.config.mjs               # Next.js configuration
└── README.md                     # This file
```

## 🎨 Design Principles

### Visual Design
- **Minimalist Aesthetic** - Clean, uncluttered interface focusing on content
- **Typography** - Courier New monospace font for a developer-focused look
- **Color Scheme** - High contrast with CSS custom properties for easy theming
- **Grid System** - Subtle grid overlay for visual structure
- **Design Elements** - Floating geometric shapes for visual interest

### User Experience
- **Responsive Design** - Mobile-first approach with breakpoints
- **Smooth Animations** - CSS transitions and keyframe animations
- **Accessibility** - Semantic HTML, proper ARIA labels, keyboard navigation
- **Performance** - Optimized with Next.js static generation
- **Theme Switching** - Dark/light mode with localStorage persistence

### Interaction Design
- **Scroll Animations** - Sections fade in as they enter viewport
- **Hover Effects** - Subtle feedback on interactive elements
- **Form Validation** - Client-side validation with visual feedback
- **Smooth Scrolling** - Navigation links with smooth scroll behavior

## 🚀 Features

### Core Functionality
- ✅ **Responsive Layout** - Works on all device sizes
- ✅ **Theme Toggle** - Dark/light mode switching
- ✅ **Mobile Navigation** - Slide-out menu for mobile devices
- ✅ **Typing Effect** - Animated text in hero section
- ✅ **Scroll Animations** - Sections animate on scroll
- ✅ **Contact Form** - Functional form with validation
- ✅ **Code Syntax Highlighting** - Styled code blocks
- ✅ **Project Showcase** - Interactive project cards

### Technical Features
- ✅ **Next.js 15** - Latest framework features
- ✅ **React Hooks** - Modern state management
- ✅ **CSS Variables** - Dynamic theming system
- ✅ **Intersection Observer** - Performance-optimized animations
- ✅ **ESLint Compliance** - Clean, maintainable code
- ✅ **Static Generation** - Fast loading and SEO-friendly

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Navigate to the Next.js directory
cd next

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
```bash
# Run linting
npm run lint

# Build and check for errors
npm run build
```

## 🎯 Customization

### Theme Colors
Modify CSS custom properties in `globals.css`:
```css
:root {
  --bg-primary: #000;
  --bg-secondary: #111;
  --text-primary: #fff;
  --accent-color: #00ff00;
  /* ... more variables */
}
```

### Content Updates
- **Hero Section**: Update name and title in `Hero.js`
- **About Section**: Modify text and code block in `About.js`
- **Projects**: Add/edit projects in `Projects.js`
- **Contact**: Update form handling in `Contact.js`

### Styling
- All styles are in `globals.css` with organized sections
- Responsive breakpoints at 768px
- CSS variables for easy theme customization

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Performance Optimizations

- **Static Generation** - Pre-rendered pages for fast loading
- **CSS Optimization** - Minimal, efficient stylesheets
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic component-level code splitting
- **Caching** - Browser and CDN caching strategies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Last Updated**: January 2025  
**Framework**: Next.js 15.0.0  
**React Version**: 18.2.0

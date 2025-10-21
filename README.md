# DesignStudio - React.js Implementation

A modern, responsive portfolio website built with React.js, GSAP animations, and SCSS styling. This project implements all the requirements from the technical specification including hero animations, scroll-triggered effects, bento grid layout, infinite marquee, and interactive components.

## 🚀 Features

- **Hero Section**: Animated title entrance, interactive background circles with parallax effect
- **Scroll-Revealed Text**: Smooth fade-in animations triggered by scroll position
- **Bento Grid**: CSS Grid-based layout with hover animations and responsive design
- **Logo Marquee**: Infinite horizontal scrolling with pause-on-hover functionality
- **Footer**: Social media icons with hover effects and responsive layout
- **Performance Optimized**: Smooth animations without layout shifts or frame drops
- **Accessibility**: Keyboard navigation, ARIA labels, and reduced motion support

## 🛠️ Technology Stack

- **Framework**: React.js 19.2.0
- **Animations**: GSAP 3.13.0 with ScrollTrigger
- **Styling**: SCSS/Sass 1.93.2
- **Build Tool**: Create React App
- **Testing**: Jest and React Testing Library

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view in browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── HeroSection/     # Hero with animations and parallax
│   ├── ScrollRevealText/ # Scroll-triggered text animations
│   ├── BentoGrid/       # CSS Grid layout with hover effects
│   ├── LogoMarquee/     # Infinite scrolling logo carousel
│   └── Footer/          # Footer with social links
├── constants/           # App constants and data
├── hooks/              # Custom React hooks
├── assets/             # Images and static assets
└── App.js              # Main app component
```

## 🎨 Component Details

### HeroSection
- **Main Title Animation**: Fade-in with upward motion on page load
- **Background Circles**: Sequential appearance with parallax mouse tracking
- **CTA Button**: Interactive hover effects with scale and color transitions

### ScrollRevealText
- **Intersection Observer**: Optimized scroll detection
- **Reversible Animations**: Fade out when scrolling back up
- **Staggered Reveals**: Multiple text blocks with sequential animations

### BentoGrid
- **CSS Grid Layout**: Responsive grid using CSS Grid (not Flexbox)
- **Hover Animations**: Logo scaling and container elevation effects
- **Dynamic Sizing**: Large, medium, and small grid items

### LogoMarquee
- **Infinite Loop**: Seamless horizontal scrolling animation
- **Hover Control**: Pause on hover, resume on mouse leave
- **Performance**: Hardware-accelerated animations

### Footer
- **Social Icons**: Hover animations with upward movement
- **Responsive Design**: Adaptive layout for all screen sizes
- **Accessibility**: Focus states and keyboard navigation

## 🎯 Animation Features

- **GSAP Timeline**: Coordinated animation sequences
- **ScrollTrigger**: Scroll-based animation triggers
- **Parallax Effects**: Mouse-responsive background elements
- **Hardware Acceleration**: GPU-optimized animations
- **Reduced Motion**: Respects user accessibility preferences

## 📱 Responsive Design

- **Mobile First**: Progressive enhancement approach
- **Breakpoints**: 
  - Mobile: 480px and below
  - Tablet: 768px and below
  - Desktop: 1024px and above
  - Large Desktop: 1400px and above

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and semantic HTML
- **Focus Indicators**: Visible focus states
- **Reduced Motion**: Animation controls for motion sensitivity
- **Color Contrast**: WCAG compliant color schemes

## 🔧 Customization

### Updating Content
- Modify constants in `src/constants/index.js`
- Update component data (services, logos, social links)

### Styling Changes
- Edit SCSS files in component directories
- Global styles in `src/App.scss`
- CSS custom properties for theme colors

### Animation Tweaks
- Adjust GSAP timings in component files
- Modify scroll trigger thresholds
- Update parallax sensitivity values

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic with Create React App
- **Image Optimization**: Responsive images with proper sizing
- **Animation Performance**: `will-change` properties for smooth animations
- **Bundle Optimization**: Tree shaking and minification in production

## 🧪 Testing

```bash
npm test          # Run tests in watch mode
npm run test:ci   # Run tests once for CI/CD
```

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

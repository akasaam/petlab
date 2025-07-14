# PetLabs - Modern Pet Laboratory Website

A beautiful, animated landing page for PetLabs featuring modern design, smooth GSAP animations, and responsive layout.

## Features

- **Modern Design**: Clean, minimalistic layout with yellow (#FFD400) and black (#000000) color scheme
- **Smooth Animations**: GSAP ScrollTrigger animations for engaging user experience
- **Responsive Design**: Mobile-first approach with breakpoints at 480px and 768px
- **Icons8 Integration**: Ready for Icons8 API integration for pet lab illustrations
- **Performance Optimized**: Efficient component structure and animations

## Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **Vite** - Fast development server

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Fixed navigation header
│   ├── Hero.tsx        # Hero section with main CTA
│   ├── Features.tsx    # Three-card feature section
│   ├── About.tsx       # About section with team info
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Footer with links and contact
├── utils/
│   └── animations.ts   # GSAP animation configurations
├── App.tsx             # Main app component
├── index.css           # Global styles and CSS variables
└── main.tsx            # React app entry point
```

## Animation Details

### GSAP ScrollTrigger Configuration
- **Hero Section**: Fade-in animation on page load with staggered elements
- **Feature Cards**: Staggered slide-up animations triggered on scroll
- **About Section**: Fade and zoom effects for content and illustrations
- **CTA Button**: Pulse animation when in viewport

### Animation Parameters
- `start: "top 80%"` - Animation starts when element is 80% from top
- `end: "bottom 60%"` - Animation ends when element is 60% from bottom
- `scrub: 0.5-1` - Smooth scrubbing effect tied to scroll position
- `stagger: 0.2-0.3` - Delayed animation between elements

## Icons8 API Integration

### Setup Instructions
1. Sign up at [Icons8 Developer Portal](https://developers.icons8.com/)
2. Get your API key from the dashboard
3. Replace placeholder illustrations with API calls:

```javascript
// Example API call for pet lab illustrations
const apiKey = 'YOUR_ICONS8_API_KEY';
const endpoint = 'https://api.icons8.com/illustrations/search';

fetch(`${endpoint}?query=pet+lab&color=#FFD400&format=svg&token=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Use illustration data
  });
```

### Recommended Search Terms
- "pet lab" - Main hero illustration
- "science" - Feature card icons
- "cute dog" - Pet-related graphics
- "cat test tube" - Laboratory themed illustrations

## Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## Color System

```css
:root {
  --brand-yellow: #FFD400;
  --brand-black: #000000;
  --brand-grey: #6B7280;
  --brand-light-grey: #F3F4F6;
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Performance Optimizations

- Component-based architecture for better maintainability
- Efficient GSAP animations with proper cleanup
- Optimized image loading with lazy loading
- Mobile-first responsive design
- CSS custom properties for consistent theming

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- GSAP provides excellent cross-browser compatibility

## License

© 2025 PetLabs. All rights reserved.
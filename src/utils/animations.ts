import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Set initial states for animated elements
  gsap.set([
    '.hero-title', '.hero-subtitle', '.hero-button', '.hero-illustration', '.trust-indicators',
    '.services-title', '.services-subtitle', '.service-card', '.services-cta',
    '.section-title', '.feature-card',
    '.testimonials-title', '.testimonials-subtitle', '.testimonial-card', '.testimonials-stats',
    '.process-title', '.process-subtitle', '.process-step', '.process-benefits',
    '.about-title', '.about-text', '.about-stats', '.about-illustration',
    '.pricing-title', '.pricing-subtitle', '.pricing-toggle', '.pricing-card', '.pricing-guarantee',
    '.faq-title', '.faq-subtitle', '.faq-image', '.faq-item',
    '.booking-title',
    '.blog-title', '.blog-subtitle', '.blog-card', '.blog-cta',
    '.cta-title', '.cta-subtitle', '.cta-button'
  ], { opacity: 0 });

  // Hero section animations - fade in on page load
  const heroTl = gsap.timeline({ delay: 0.5 });
  
  heroTl
    .to('.hero-title', { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out' 
    })
    .to('.hero-subtitle', { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out' 
    }, '-=0.5')
    .to('.hero-button', { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: 'power2.out' 
    }, '-=0.5')
    .to('.hero-illustration', { 
      opacity: 1, 
      scale: 1, 
      duration: 1.2, 
      ease: 'back.out(1.7)' 
    }, '-=0.8')
    .to('.trust-indicators', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.3');

  // Services section animations
  gsap.to('.services-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.services-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.services-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.services-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.service-card', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.services-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.services-cta', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.services-cta',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // Features section title animation
  gsap.to('.section-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.section-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // Feature cards staggered animation
  gsap.to('.feature-card', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.features-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  // Testimonials section animations
  gsap.to('.testimonials-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.testimonials-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.testimonials-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.testimonials-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.testimonial-card', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.testimonials-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.testimonials-stats', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.testimonials-stats',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // Process section animations
  gsap.to('.process-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.process-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.process-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.process-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.process-step', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.process-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.process-benefits', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.process-benefits',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // Animate process progress bar
  gsap.to('.process-progress', {
    width: '100%',
    duration: 2,
    scrollTrigger: {
      trigger: '.process-section',
      start: 'top 60%',
      toggleActions: 'play none none none'
    }
  });

  // Pricing section animations
  gsap.to('.pricing-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.pricing-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.pricing-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.pricing-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.pricing-toggle', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: '.pricing-toggle',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.pricing-card', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.pricing-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.pricing-guarantee', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.pricing-guarantee',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // FAQ section animations
  gsap.to('.faq-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.faq-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.faq-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.faq-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.faq-image', {
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: '.faq-image',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.faq-item', {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.faq-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  // Booking section animations
  gsap.to('.booking-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.booking-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // Blog section animations
  gsap.to('.blog-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.blog-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.blog-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.blog-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.blog-card', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.blog-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.blog-cta', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.blog-cta',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // About section animations
  gsap.to('.about-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.about-title',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.about-text', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.about-stats', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.about-stats',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // About illustration zoom effect
  gsap.to('.about-illustration', {
    scale: 1,
    opacity: 1,
    duration: 1.2,
    delay: 0.3,
    scrollTrigger: {
      trigger: '.about-illustration',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // CTA section animations
  gsap.to('.cta-title', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  gsap.to('.cta-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: '.cta-subtitle',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // CTA button with pulse effect
  gsap.to('.cta-button', {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
      trigger: '.cta-button',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });

  // Add pulse animation to CTA button when in view
  ScrollTrigger.create({
    trigger: '.cta-button',
    start: 'top 80%',
    onEnter: () => {
      gsap.to('.cta-button', {
        boxShadow: '0 0 20px rgba(255, 212, 0, 0.6)',
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};
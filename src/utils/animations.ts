import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
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
  gsap.from('.services-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.services-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.services-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.services-subtitle',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.service-card', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.services-section',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.5,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.services-cta', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.services-cta',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // Features section title animation
  gsap.from('.section-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // Feature cards staggered animation
  gsap.from('.feature-card', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.features-section',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.5,
      toggleActions: 'play none none none'
    }
  });

  // Testimonials section animations
  gsap.from('.testimonials-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.testimonials-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.testimonials-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.testimonials-subtitle',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.testimonial-card', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.testimonials-section',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.5,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.testimonials-stats', {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.testimonials-stats',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // Process section animations
  gsap.from('.process-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.process-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.process-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.process-subtitle',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.process-step', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.process-section',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.5,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.process-benefits', {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.process-benefits',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
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
      end: 'bottom 40%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // Pricing section animations
  gsap.from('.pricing-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.pricing-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.pricing-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.pricing-subtitle',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.pricing-toggle', {
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.pricing-toggle',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.pricing-card', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.pricing-section',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.5,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.pricing-guarantee', {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.pricing-guarantee',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // FAQ section animations
  gsap.from('.faq-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.faq-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.faq-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.faq-subtitle',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.faq-image', {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.faq-image',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.faq-item', {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.faq-section',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.5,
      toggleActions: 'play none none none'
    }
  });

  // Booking section animations
  gsap.from('.booking-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.booking-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // Blog section animations
  gsap.from('.blog-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.blog-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.blog-subtitle', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.blog-subtitle',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.blog-card', {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.blog-section',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.5,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.blog-cta', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.blog-cta',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // About section animations
  gsap.from('.about-title', {
    y: 60,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about-title',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.about-text', {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.8,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.about-stats', {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about-stats',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // About illustration zoom effect
  gsap.from('.about-illustration', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.about-illustration',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // CTA section animations
  gsap.from('.cta-title', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  gsap.from('.cta-subtitle', {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.cta-subtitle',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
      toggleActions: 'play none none none'
    }
  });

  // CTA button with pulse effect
  gsap.from('.cta-button', {
    y: 30,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.cta-button',
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 1,
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
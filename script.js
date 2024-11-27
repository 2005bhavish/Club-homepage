gsap.fromTo(
  '.project-card',
  { boxShadow: '0px 0px 20px #E31C79' },
  {
    boxShadow: '0px 0px 50px #E31C79',
    duration: 1,
    yoyo: true,
    repeat: -1,
  }
);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// GSAP Animations Setup
gsap.registerPlugin(ScrollTrigger);

// GSAP Animations for Stars
gsap.utils.toArray('.star').forEach(star => {
  gsap.fromTo(star, {
    rotation: 450,
    opacity: 0,
    y: 100,
  }, {
    rotation: 0,
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.5,
    scrollTrigger: star,
  });
});

// Scroll-triggered Animations
ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "bottom center",
  scrub: 1,
  onEnter: () => {
    console.log("Hero section entered");
  },
});

// Navbar Animations
gsap.from('nav a', {
  scrollTrigger: {
    trigger: 'nav',
    start: "top 90%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
  y: -20,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

// GSAP Animations for Hero Section
gsap.from(".hero-section h1", {
  y: -50,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".hero-section p", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out",
});

gsap.from(".hero-section button", {
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  delay: 1,
  ease: "elastic.out(1, 0.3)",
});

// Parallax Effect for Background Layers
document.addEventListener('mousemove', (e) => {
  const layers = document.querySelectorAll('.bg-layer');
  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// Scroll Spy for Active Navigation Links
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});



gsap.from(".project-card", {
  opacity: 1,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 80%",
  },
});

// Adjust GSAP animation to prevent delays
gsap.from('.project-card', {
  duration: 1,
  opacity: 0,
  y: 20,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.projects-section',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
});



gsap.from(".project-card", {
  opacity: 1,
  y: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 80%",
  },
});



gsap.utils.toArray('.scroll-animate').forEach(element => {
  gsap.fromTo(element, {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom top",
      scrub: true,
    },
    duration: 1.5,
    ease: "power3.out",
  });
});

// Inside service-worker.js (if you're implementing this with a build tool)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
      ]);
    })
  );
});

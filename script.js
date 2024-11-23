// smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
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
        gsap.from(".navbar-backdrop", {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
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
      
    
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
    

        const darkModeToggle = document.getElementById('dark-mode-toggle');
    
       
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
          document.body.classList.add('dark-mode');
        }
    
        darkModeToggle.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
    
          
          if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
          } else {
            localStorage.setItem('theme', 'light');
          }
        });
        
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden'); 
});

const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');

// Mouse movement update for cursor position
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;

  cursorTrail.style.left = `${e.pageX}px`;
  cursorTrail.style.top = `${e.pageY}px`;
});

// Add 'active' class to cursor on hover over specific elements
document.querySelectorAll('h1, p').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
    cursorTrail.classList.add('active');
  });

  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    cursorTrail.classList.remove('active');
  });
});

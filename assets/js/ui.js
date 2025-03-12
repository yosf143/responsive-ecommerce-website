 
document.addEventListener('DOMContentLoaded', function() {
    
    initNavbar();
    initTooltips();
    initSmoothScrolling();
    initTabNavigation();
  });
  
 
  function initNavbar() {
    const navbar = document.querySelector('.ovrsn-navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
 
  function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  
 
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
 
  function initTabNavigation() {
    const tabLinks = document.querySelectorAll('.view-all-link');
    tabLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetTab = this.getAttribute('href');
        const navItem = document.querySelector(`.nav-link[href="${targetTab}"]`);
        if (navItem) {
          navItem.click();
        }
      });
    });
  }
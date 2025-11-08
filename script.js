// Create floating particles
function createParticles() {
  const container = document.getElementById('particles-container');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 3px and 8px
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 15}s`;
    
    container.appendChild(particle);
  }
}

// Welcome notification
function showWelcomeNotification() {
  const notif = document.getElementById('notif-welcome');
  setTimeout(() => {
    notif.classList.add('show');
    setTimeout(() => {
      notif.classList.remove('show');
    }, 6000);
  }, 1800);
}

// Initialize everything when page loads
window.addEventListener('load', () => {
  createParticles();
  showWelcomeNotification();
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// mobile nav toggle
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.querySelector('.nav');

mobileToggle.addEventListener('click', () => {
  if(nav.style.display === 'flex') {
    nav.style.display = '';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '66px';
    nav.style.background = 'rgba(11,13,15,0.95)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '10px';
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile nav if open
      if(window.innerWidth < 700 && nav.style.display === 'flex'){
        nav.style.display = '';
      }
    }
  });
});

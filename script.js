document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault(); 
   showSection('home')
});
function showSection(id) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        sections.classList.remove('active');
});
  
    document.getElementById(id).classList.add('active');
}
showSection('home');



/*document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.getElementById('about').scrollIntoView({behavior:smooth});
});

document.getElementById('service-link').addEventListener('click', function(e) {
    e.preventDefault();  
   document.getElementById('service').scrollIntoView({behavior: 'smooth'});
});
document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.getElementById('service').scrollIntoView({behavior: 'smooth'});
});


/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        setTimeout(() => {
            
            successMessage.classList.remove('hidden');
            
          
            form.reset();

            
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000); 
        }, 2000); 
    });*/

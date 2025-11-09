  // Language switching functionality
document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get selected language
        const lang = this.getAttribute('data-lang');
        
        // Show/hide content based on language
        document.querySelectorAll('.pt').forEach(element => {
            element.style.display = lang === 'pt' ? 'block' : 'none';
        });
        
        document.querySelectorAll('.en').forEach(element => {
            element.style.display = lang === 'en' ? 'block' : 'none';
        });
        
        // Update currency display based on language
        const priceElement = document.querySelector('.offer-price');
        if (lang === 'en') {
            priceElement.textContent = '$ 9.99';
        } else {
            priceElement.textContent = 'R$ 47,00';
        }
    });
});

// Timer functionality
function updateTimer() {
    const now = new Date();
    const endTime = new Date();
    endTime.setHours(now.getHours() + 18);
    endTime.setMinutes(now.getMinutes() + 23);
    endTime.setSeconds(now.getSeconds() + 59);
    
    const timeLeft = endTime - now;
    
    if (timeLeft <= 0) {
        // Reset timer if time is up
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update timer every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call      

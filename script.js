// Image slider (if present)
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".fade-image");
    let currentIndex = 0;

    if (images.length > 0) {
        function changeImage() {
            images.forEach((img, index) => {
                img.style.opacity = index === currentIndex ? "1" : "0";
            });
            currentIndex = (currentIndex + 1) % images.length;
        }
        setInterval(changeImage, 3000); // Change image every 3 seconds
    }
});

// mobile menu toggle code 
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    
    if (menuButton && mobileMenu) {
        // Add touch events for mobile devices
        menuButton.addEventListener("click", toggleMenu);
        menuButton.addEventListener("touchend", function(e) {
            e.preventDefault(); // Prevent ghost clicks
            toggleMenu();
        });
        
        function toggleMenu() {
            // Toggle display directly instead of just toggling the class
            if (mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.remove("hidden");
                mobileMenu.style.display = "flex";
                menuButton.innerHTML = '<i class="fas fa-times text-gray-800 text-2xl"></i>'; // Change to X icon
            } else {
                mobileMenu.classList.add("hidden");
                mobileMenu.style.display = "none";
                menuButton.innerHTML = '<i class="fas fa-bars text-gray-800 text-2xl"></i>'; // Change back to bars icon
            }
        }
    }
});s

// Flex text slide-in effect
document.addEventListener("DOMContentLoaded", function () {
    const flexTexts = document.querySelectorAll('.flex-text');
    function onScroll() {
        flexTexts.forEach(flexText => {
            const rect = flexText.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
                flexText.classList.add('slide-in');
            }
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); // Check on load in case already in view
});

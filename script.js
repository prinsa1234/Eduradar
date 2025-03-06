// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
        
        if (navLinks.style.display === 'flex') {
            navLinks.style.position = 'absolute';
            navLinks.style.flexDirection = 'column';
            navLinks.style.backgroundColor = '#fff';
            navLinks.style.width = '100%';
            navLinks.style.left = '0';
            navLinks.style.top = '70px';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
            
            authButtons.style.position = 'absolute';
            authButtons.style.flexDirection = 'column';
            authButtons.style.backgroundColor = '#fff';
            authButtons.style.width = '100%';
            authButtons.style.left = '0';
            authButtons.style.top = 'calc(70px + 200px)';
            authButtons.style.padding = '20px';
            authButtons.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
            authButtons.style.gap = '10px';
        }
    });
}

// Modal Functions
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'flex';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    if (event.target === loginModal) {
        closeLoginModal();
    }
    
    if (event.target === signupModal) {
        closeSignupModal();
    }
}

// Form Validation
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just simulate a successful login
        alert('Login successful!');
        closeLoginModal();
        
        // Redirect to dashboard or home page
        // window.location.href = 'dashboard.html';
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const phone = document.getElementById('signupPhone').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const termsAgree = document.getElementById('termsAgree').checked;
        
        // Basic validation
        if (!name || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (!termsAgree) {
            alert('Please agree to the Terms & Conditions');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just simulate a successful signup
        alert('Signup successful!');
        closeSignupModal();
        
        // Redirect to dashboard or home page
        // window.location.href = 'dashboard.html';
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const location = document.querySelector('.location-input').value;
        const subject = document.querySelector('.subject-select').value;
        
        if (!location) {
            alert('Please enter your location');
            return;
        }
        
        // Here you would typically redirect to search results page with the parameters
        alert(`Searching for ${subject ? subject : 'all subjects'} tutors in ${location}`);
        // window.location.href = `search-results.html?location=${location}&subject=${subject}`;
    });
}
function checkLogin(event, targetPage) {
    event.preventDefault(); // Prevent direct navigation

    let isLoggedIn = localStorage.getItem("isLoggedIn"); // Check login status (Assume it’s stored in localStorage)
    
    if (isLoggedIn === "true") {
        window.location.href = targetPage; // Allow navigation if logged in
    } else {
        alert("Please login to access this feature!"); 
        openLoginModal(); // Open login modal instead of redirecting
    }
}


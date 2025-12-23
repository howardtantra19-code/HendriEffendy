document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const errorMessage = document.getElementById('errorMessage');
    
    const CORRECT_PASSWORD = 'Aventis123';
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle icon
        const icon = this.querySelector('i');
        if (type === 'text') {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
            this.classList.add('active');
        } else {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
            this.classList.remove('active');
        }
    });
    
    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const enteredPassword = passwordInput.value;
        
        if (enteredPassword === CORRECT_PASSWORD) {
            // Store login status
            sessionStorage.setItem('isLoggedIn', 'true');
            
            // Success animation
            const btnLogin = this.querySelector('.btn-login');
            btnLogin.innerHTML = '<i class="fas fa-check-circle"></i> Berhasil!';
            btnLogin.style.background = 'linear-gradient(135deg, #27AE60 0%, #229954 100%)';
            
            // Redirect to main page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800);
        } else {
            // Show error message
            errorMessage.classList.add('show');
            passwordInput.value = '';
            passwordInput.focus();
            
            // Shake animation for input
            passwordInput.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                passwordInput.style.animation = '';
            }, 500);
            
            // Hide error message after 3 seconds
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 3000);
        }
    });
    
    // Hide error message when user starts typing
    passwordInput.addEventListener('input', function() {
        if (errorMessage.classList.contains('show')) {
            errorMessage.classList.remove('show');
        }
    });
    
    // Prevent zoom on input focus for iOS devices
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        }
    }
    
    // Console messages
    console.log('🔐 Login Page - PT Kalventis Sinergi Farma');
    console.log('💉 Portofolio Vaccines');
    console.log('✨ Secure access for medical professionals only');
});
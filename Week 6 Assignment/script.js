// ===== PART 1: JAVASCRIPT EVENT HANDLING AND INTERACTIVE ELEMENTS =====

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== BASIC EVENT LISTENERS DEMONSTRATION =====
    
    // 1. Click Event - Welcome Message
    const welcomeSection = document.createElement('div');
    welcomeSection.innerHTML = `
        <div class="interactive-demo" style="background: #f8f9fa; padding: 2rem; margin: 2rem 0; border-radius: 8px;">
            <h3>Event Handling Demo</h3>
            <button id="clickDemo" class="btn">Click Me!</button>
            <button id="doubleClickDemo" class="btn">Double Click Me!</button>
            <p id="clickMessage" style="margin-top: 1rem;"></p>
        </div>
    `;
    document.querySelector('main').prepend(welcomeSection);
    
    // Click event listener
    document.getElementById('clickDemo').addEventListener('click', function() {
        document.getElementById('clickMessage').textContent = 'Button clicked! Great job!';
        this.style.backgroundColor = '#27ae60';
        setTimeout(() => {
            this.style.backgroundColor = '';
        }, 1000);
    });
    
    // Double click event listener
    document.getElementById('doubleClickDemo').addEventListener('dblclick', function() {
        document.getElementById('clickMessage').textContent = 'Double click detected! You\'re fast!';
        this.style.backgroundColor = '#e74c3c';
        setTimeout(() => {
            this.style.backgroundColor = '';
        }, 1000);
    });
    
    // 2. Mouseover/Mouseout Events
    const hoverSection = document.createElement('div');
    hoverSection.innerHTML = `
        <div class="hover-demo" style="background: #ecf0f1; padding: 2rem; margin: 2rem 0; border-radius: 8px;">
            <h3>Hover Interaction Demo</h3>
            <div id="hoverBox" style="width: 200px; height: 100px; background: #3498db; display: flex; align-items: center; justify-content: center; color: white; border-radius: 8px; transition: all 0.3s ease;">
                Hover over me!
            </div>
            <p id="hoverCounter" style="margin-top: 1rem;">Hover count: 0</p>
        </div>
    `;
    document.querySelector('main').prepend(hoverSection);
    
    let hoverCount = 0;
    const hoverBox = document.getElementById('hoverBox');
    
    hoverBox.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#e74c3c';
        this.textContent = 'Mouse is over!';
        hoverCount++;
        document.getElementById('hoverCounter').textContent = `Hover count: ${hoverCount}`;
    });
    
    hoverBox.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#3498db';
        this.textContent = 'Hover over me!';
    });
    
    // 3. Keyboard Events
    const keyboardSection = document.createElement('div');
    keyboardSection.innerHTML = `
        <div class="keyboard-demo" style="background: #fff3cd; padding: 2rem; margin: 2rem 0; border-radius: 8px;">
            <h3>Keyboard Interaction Demo</h3>
            <input type="text" id="keyboardInput" placeholder="Type something here..." style="padding: 0.5rem; width: 100%; max-width: 300px; border: 2px solid #3498db; border-radius: 4px;">
            <p id="keyboardMessage" style="margin-top: 1rem;"></p>
            <p>Try pressing: Enter, Escape, or Arrow keys</p>
        </div>
    `;
    document.querySelector('main').prepend(keyboardSection);
    
    const keyboardInput = document.getElementById('keyboardInput');
    
    keyboardInput.addEventListener('keydown', function(e) {
        const message = document.getElementById('keyboardMessage');
        
        switch(e.key) {
            case 'Enter':
                message.textContent = 'Enter pressed! Form submitted (simulated)';
                message.style.color = '#27ae60';
                break;
            case 'Escape':
                this.value = '';
                message.textContent = 'Escape pressed! Input cleared';
                message.style.color = '#e74c3c';
                break;
            case 'ArrowUp':
                message.textContent = 'Arrow Up pressed!';
                break;
            case 'ArrowDown':
                message.textContent = 'Arrow Down pressed!';
                break;
            default:
                message.textContent = `Key pressed: ${e.key}`;
                message.style.color = '#3498db';
        }
    });

    // ===== PART 2: BUILDING INTERACTIVE ELEMENTS =====
    
    // 1. Light/Dark Mode Toggle
    const themeToggleSection = document.createElement('div');
    themeToggleSection.innerHTML = `
        <div class="theme-section" style="background: white; padding: 2rem; margin: 2rem 0; border-radius: 8px; border: 2px solid #e9ecef;">
            <h3>Theme Toggle</h3>
            <button id="themeToggle" class="btn" style="background: #2c3e50; color: white;">
                🌙 Switch to Dark Mode
            </button>
            <p>Toggle between light and dark themes for better reading experience</p>
        </div>
    `;
    document.querySelector('main').prepend(themeToggleSection);
    
    const themeToggle = document.getElementById('themeToggle');
    let isDarkMode = false;
    
    themeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#ffffff';
            this.textContent = '☀️ Switch to Light Mode';
            this.style.background = '#f39c12';
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            this.textContent = '🌙 Switch to Dark Mode';
            this.style.background = '#2c3e50';
        }
        
        // Add smooth transition
        document.body.style.transition = 'all 0.3s ease';
    });
    
    // 2. Counter Game
    const counterSection = document.createElement('div');
    counterSection.innerHTML = `
        <div class="counter-game" style="background: #e8f5e8; padding: 2rem; margin: 2rem 0; border-radius: 8px;">
            <h3>Counter Game</h3>
            <div style="font-size: 3rem; text-align: center; margin: 1rem 0;" id="counterValue">0</div>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button id="decrementBtn" class="btn" style="background: #e74c3c;">-</button>
                <button id="resetBtn" class="btn" style="background: #95a5a6;">Reset</button>
                <button id="incrementBtn" class="btn" style="background: #27ae60;">+</button>
            </div>
            <p id="counterMessage" style="text-align: center; margin-top: 1rem;"></p>
        </div>
    `;
    document.querySelector('main').prepend(counterSection);
    
    let counter = 0;
    const counterValue = document.getElementById('counterValue');
    const counterMessage = document.getElementById('counterMessage');
    
    document.getElementById('incrementBtn').addEventListener('click', function() {
        counter++;
        updateCounter();
    });
    
    document.getElementById('decrementBtn').addEventListener('click', function() {
        counter--;
        updateCounter();
    });
    
    document.getElementById('resetBtn').addEventListener('click', function() {
        counter = 0;
        updateCounter();
        counterMessage.textContent = 'Counter reset!';
        setTimeout(() => {
            counterMessage.textContent = '';
        }, 2000);
    });
    
    function updateCounter() {
        counterValue.textContent = counter;
        counterValue.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counterValue.style.transform = 'scale(1)';
        }, 200);
        
        // Fun messages based on counter value
        if (counter === 10) {
            counterMessage.textContent = '🎉 You reached 10! Amazing!';
        } else if (counter === 25) {
            counterMessage.textContent = '🔥 25! You\'re on fire!';
        } else if (counter === 50) {
            counterMessage.textContent = '🏆 50! Legendary!';
        } else if (counter < 0) {
            counterMessage.textContent = '💀 Negative numbers? Brave!';
        }
    }
    
    // 3. Collapsible FAQ Section
    const faqSection = document.createElement('div');
    faqSection.innerHTML = `
        <div class="faq-section" style="background: white; padding: 2rem; margin: 2rem 0; border-radius: 8px; border: 2px solid #e9ecef;">
            <h3>Interactive FAQ</h3>
            <div class="faq-item">
                <button class="faq-question" style="width: 100%; text-align: left; padding: 1rem; background: #f8f9fa; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
                    What is semantic HTML?
                </button>
                <div class="faq-answer" style="padding: 1rem; display: none; background: #f8f9fa; border-radius: 0 0 4px 4px;">
                    Semantic HTML uses elements that clearly describe their meaning to both browsers and developers, improving accessibility and SEO.
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" style="width: 100%; text-align: left; padding: 1rem; background: #f8f9fa; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
                    Why is accessibility important?
                </button>
                <div class="faq-answer" style="padding: 1rem; display: none; background: #f8f9fa; border-radius: 0 0 4px 4px;">
                    Accessibility ensures that people with disabilities can perceive, understand, navigate, and interact with websites.
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question" style="width: 100%; text-align: left; padding: 1rem; background: #f8f9fa; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
                    How does JavaScript improve user experience?
                </button>
                <div class="faq-answer" style="padding: 1rem; display: none; background: #f8f9fa; border-radius: 0 0 4px 4px;">
                    JavaScript makes web pages interactive by responding to user actions, validating forms, and creating dynamic content without page reloads.
                </div>
            </div>
        </div>
    `;
    document.querySelector('main').prepend(faqSection);
    
    // FAQ toggle functionality
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            
            // Remove active class from all questions
            document.querySelectorAll('.faq-question').forEach(q => {
                q.style.background = '#f8f9fa';
            });
            
            // Toggle current answer
            if (!isVisible) {
                answer.style.display = 'block';
                this.style.background = '#3498db';
                this.style.color = 'white';
            }
        });
    });

    // ===== PART 3: FORM VALIDATION WITH JAVASCRIPT =====
    
    // Create a comprehensive form for validation
    const formSection = document.createElement('div');
    formSection.innerHTML = `
        <div class="form-section" style="background: white; padding: 2rem; margin: 2rem 0; border-radius: 8px; border: 2px solid #e9ecef;">
            <h3>User Registration Form</h3>
            <p>Please fill out the form below. All fields are required.</p>
            
            <form id="registrationForm" novalidate>
                <div style="margin-bottom: 1rem;">
                    <label for="fullName" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 4px;" 
                           placeholder="Enter your full name">
                    <div class="error-message" id="nameError" style="color: #e74c3c; font-size: 0.875rem; margin-top: 0.25rem; display: none;"></div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Email Address *</label>
                    <input type="email" id="email" name="email" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 4px;" 
                           placeholder="your.email@example.com">
                    <div class="error-message" id="emailError" style="color: #e74c3c; font-size: 0.875rem; margin-top: 0.25rem; display: none;"></div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label for="password" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Password *</label>
                    <input type="password" id="password" name="password" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 4px;" 
                           placeholder="Minimum 8 characters">
                    <div class="error-message" id="passwordError" style="color: #e74c3c; font-size: 0.875rem; margin-top: 0.25rem; display: none;"></div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label for="confirmPassword" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Confirm Password *</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 4px;" 
                           placeholder="Re-enter your password">
                    <div class="error-message" id="confirmPasswordError" style="color: #e74c3c; font-size: 0.875rem; margin-top: 0.25rem; display: none;"></div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                    <label for="phone" style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Phone Number</label>
                    <input type="tel" id="phone" name="phone" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 4px;" 
                           placeholder="123-456-7890">
                    <div class="error-message" id="phoneError" style="color: #e74c3c; font-size: 0.875rem; margin-top: 0.25rem; display: none;"></div>
                </div>
                
                <button type="submit" class="btn" style="background: #27ae60; color: white; padding: 0.75rem 2rem; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;">
                    Register Now
                </button>
                
                <div id="formSuccess" style="display: none; background: #d4edda; color: #155724; padding: 1rem; border-radius: 4px; margin-top: 1rem; text-align: center;">
                    ✅ Registration successful! Thank you for signing up.
                </div>
            </form>
        </div>
    `;
    document.querySelector('main').prepend(formSection);
    
    const registrationForm = document.getElementById('registrationForm');
    
    // Real-time validation as user types
    document.getElementById('fullName').addEventListener('input', validateName);
    document.getElementById('email').addEventListener('input', validateEmail);
    document.getElementById('password').addEventListener('input', validatePassword);
    document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);
    document.getElementById('phone').addEventListener('input', validatePhone);
    
    // Form submission handler
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isPhoneValid = validatePhone();
        
        // If all validations pass
        if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid) {
            document.getElementById('formSuccess').style.display = 'block';
            registrationForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('formSuccess').style.display = 'none';
            }, 5000);
        }
    });
    
    // Validation functions
    function validateName() {
        const nameInput = document.getElementById('fullName');
        const nameError = document.getElementById('nameError');
        const name = nameInput.value.trim();
        
        if (name === '') {
            showError(nameInput, nameError, 'Full name is required');
            return false;
        } else if (name.length < 2) {
            showError(nameInput, nameError, 'Name must be at least 2 characters');
            return false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            showError(nameInput, nameError, 'Name can only contain letters and spaces');
            return false;
        } else {
            showSuccess(nameInput, nameError);
            return true;
        }
    }
    
    function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError(emailInput, emailError, 'Email address is required');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        } else {
            showSuccess(emailInput, emailError);
            return true;
        }
    }
    
    function validatePassword() {
        const passwordInput = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        const password = passwordInput.value;
        
        if (password === '') {
            showError(passwordInput, passwordError, 'Password is required');
            return false;
        } else if (password.length < 8) {
            showError(passwordInput, passwordError, 'Password must be at least 8 characters');
            return false;
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            showError(passwordInput, passwordError, 'Password must contain uppercase, lowercase, and numbers');
            return false;
        } else {
            showSuccess(passwordInput, passwordError);
            return true;
        }
    }
    
    function validateConfirmPassword() {
        const confirmInput = document.getElementById('confirmPassword');
        const confirmError = document.getElementById('confirmPasswordError');
        const password = document.getElementById('password').value;
        const confirmPassword = confirmInput.value;
        
        if (confirmPassword === '') {
            showError(confirmInput, confirmError, 'Please confirm your password');
            return false;
        } else if (confirmPassword !== password) {
            showError(confirmInput, confirmError, 'Passwords do not match');
            return false;
        } else {
            showSuccess(confirmInput, confirmError);
            return true;
        }
    }
    
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phone = phoneInput.value.trim();
        
        // Phone is optional, but if provided, validate format
        if (phone !== '' && !/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
            showError(phoneInput, phoneError, 'Please use format: 123-456-7890');
            return false;
        } else {
            showSuccess(phoneInput, phoneError);
            return true;
        }
    }
    
    // Helper functions for showing errors/success
    function showError(input, errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        input.style.borderColor = '#e74c3c';
        input.style.backgroundColor = '#fdf2f2';
    }
    
    function showSuccess(input, errorElement) {
        errorElement.style.display = 'none';
        input.style.borderColor = '#27ae60';
        input.style.backgroundColor = '#f2f9f2';
    }
    
    console.log('JavaScript interactive features loaded successfully!');
});
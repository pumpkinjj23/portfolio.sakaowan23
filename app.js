document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Mobile Menu Toggle
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-xmark';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
    }

    // ==========================================
    // 2. Sticky Header Scroll Effect
    // ==========================================
    const header = document.querySelector('header');
    let isScrolled = false;
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 50;
        if (scrolled !== isScrolled) {
            isScrolled = scrolled;
            if (isScrolled) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }, { passive: true });

    // ==========================================
    // 3. Cyber Terminal Typing Simulation
    // ==========================================
    const terminalBody = document.getElementById('terminal-body');
    const typedTextSpan = document.getElementById('typed-text');
    
    const terminalCommands = [
        { cmd: 'whoami', output: 'sakaowan_buranavatasin' },
        { cmd: 'cat education.txt', output: 'Pibulsongkram Rajabhat University (PSRU)\nFaculty of Industrial Technology\nComputer Engineering, Year 4' },
        { cmd: 'cat teams.txt', output: 'whereisTheFlag\nCPE00\nCPE66\nจจฉายเดี่ยว' },
        { cmd: 'python -c "import secret; print(secret.flag)"', output: 'FLAG{Cyber_Security_PSRU_CPE_2026}' }
    ];
    
    let cmdIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newCommandDelay = 2000; // Delay between command loops
    
    function appendTerminalOutput(cmd, output) {
        // Create elements for completed command
        const lineCmd = document.createElement('div');
        lineCmd.className = 'terminal-line';
        lineCmd.innerHTML = `<span class="terminal-prompt">whereistheflag@sec-portfolio:~$</span><span class="terminal-output">${cmd}</span>`;
        
        const lineOut = document.createElement('div');
        lineOut.className = 'terminal-line';
        lineOut.style.marginBottom = '12px';
        
        // Format multiline outputs
        const formattedOutput = output.replace(/\n/g, '<br>');
        lineOut.innerHTML = `<span class="terminal-output" style="color: var(--color-text-secondary);">${formattedOutput}</span>`;
        
        // Insert before the current active typing line
        const activeLine = typedTextSpan.closest('.terminal-line');
        terminalBody.insertBefore(lineCmd, activeLine);
        terminalBody.insertBefore(lineOut, activeLine);
        
        // Scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
    
    function clearTerminalHistory() {
        const lines = terminalBody.querySelectorAll('.terminal-line');
        // Keep only the active line (the last one)
        for (let i = 0; i < lines.length - 1; i++) {
            lines[i].remove();
        }
    }
    
    function typeCommand() {
        const currentCommandObj = terminalCommands[cmdIndex];
        const cmdText = currentCommandObj.cmd;
        
        if (!isDeleting && charIndex <= cmdText.length) {
            // Typing characters
            typedTextSpan.textContent = cmdText.substring(0, charIndex);
            charIndex++;
            setTimeout(typeCommand, typingDelay);
        } else if (isDeleting && charIndex >= 0) {
            // Deleting characters
            typedTextSpan.textContent = cmdText.substring(0, charIndex);
            charIndex--;
            setTimeout(typeCommand, erasingDelay);
        } else if (!isDeleting && charIndex > cmdText.length) {
            // Finished typing, print output and prepare to delete/move next
            setTimeout(() => {
                appendTerminalOutput(currentCommandObj.cmd, currentCommandObj.output);
                
                // If it was the last command, clear the terminal to keep it tidy
                if (cmdIndex === terminalCommands.length - 1) {
                    setTimeout(() => {
                        clearTerminalHistory();
                    }, 1000);
                }
                
                isDeleting = true;
                setTimeout(typeCommand, 500); // Wait before starting delete
            }, 500);
        } else if (isDeleting && charIndex < 0) {
            // Finished deleting, move to next command
            isDeleting = false;
            cmdIndex = (cmdIndex + 1) % terminalCommands.length;
            charIndex = 0;
            setTimeout(typeCommand, 500); // Delay before next command
        }
    }
    
    // Start terminal animation
    if (typedTextSpan) {
        setTimeout(typeCommand, 1000);
    }

    // ==========================================
    // 4. Scroll Reveal & Skill Bars Animation
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    const skillBars = document.querySelectorAll('.progress-line span');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If the target is the skills section, animate skill bars
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, {
        threshold: 0.15
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }

    // ==========================================
    // 5. Portfolio Filtering System
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certCards = document.querySelectorAll('.cert-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button styling
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            certCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hide');
                    // Add micro-animation fade in
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                        card.style.transition = 'all 0.4s ease';
                    }, 50);
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // ==========================================
    // 6. Lightbox Certificate Modal System
    // ==========================================
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    
    let currentCertIndex = 0;
    let visibleCards = []; // Tracks cards that are currently visible (filtered)
    
    function getCardDetails(cardElement) {
        const activeLang = document.documentElement.getAttribute('lang') || 'th';
        const titleEl = cardElement.querySelector(`.cert-title .lang-${activeLang}`) || cardElement.querySelector('.cert-title');
        const descEl = cardElement.querySelector(`.cert-desc .lang-${activeLang}`) || cardElement.querySelector('.cert-desc');
        return {
            title: titleEl ? titleEl.textContent.trim() : '',
            desc: descEl ? descEl.textContent.trim() : ''
        };
    }
    
    function updateVisibleCards() {
        visibleCards = Array.from(certCards).filter(card => !card.classList.contains('hide'));
    }
    
    function updateModalThumbnails(cardElement) {
        const screenshotsAttr = cardElement.getAttribute('data-screenshots');
        const thumbnailsContainer = document.getElementById('modal-thumbnails');
        if (thumbnailsContainer) {
            thumbnailsContainer.innerHTML = '';
            if (screenshotsAttr) {
                const imagesList = screenshotsAttr.split(',');
                imagesList.forEach((src, idx) => {
                    const thumb = document.createElement('img');
                    thumb.src = src.trim();
                    thumb.alt = `Screenshot ${idx + 1}`;
                    thumb.classList.add('modal-thumb');
                    const currentImgSrc = modalImg.src;
                    if (currentImgSrc.includes(src.trim()) || (idx === 0 && !currentImgSrc)) {
                        thumb.classList.add('active');
                    }
                    thumb.addEventListener('click', () => {
                        modalImg.src = src.trim();
                        document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });
                    thumbnailsContainer.appendChild(thumb);
                });
                thumbnailsContainer.style.display = 'flex';
            } else {
                thumbnailsContainer.style.display = 'none';
            }
        }
    }

    function openModal(cardElement) {
        updateVisibleCards();
        currentCertIndex = visibleCards.indexOf(cardElement);
        
        // Find if this card has an image
        const img = cardElement.querySelector('.cert-image-container img');
        
        if (img) {
            modalImg.src = img.src;
            modalImg.style.display = 'block';
            
            // Adjust modal style if it's the DYPACK placeholder (which doesn't use the standard .cert-overlay class for its div)
            const placeholder = cardElement.querySelector('.cert-image-container div:not(.cert-overlay)');
            if (placeholder) {
                // If it is the trophy div placeholder
                modalImg.style.display = 'none';
            }
        } else {
            modalImg.style.display = 'none';
        }
        
        const details = getCardDetails(cardElement);
        
        modalTitle.textContent = details.title;
        modalDesc.textContent = details.desc;
        
        // Load thumbnails if available
        updateModalThumbnails(cardElement);
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    }
    
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    function showNextCert() {
        if (visibleCards.length <= 1) return;
        currentCertIndex = (currentCertIndex + 1) % visibleCards.length;
        const nextCard = visibleCards[currentCertIndex];
        
        // Fade transition inside modal
        modalImg.style.opacity = '0';
        modalTitle.style.opacity = '0';
        modalDesc.style.opacity = '0';
        
        setTimeout(() => {
            const img = nextCard.querySelector('.cert-image-container img');
            if (img) {
                modalImg.src = img.src;
                modalImg.style.display = 'block';
            } else {
                modalImg.style.display = 'none';
            }
            
            const details = getCardDetails(nextCard);
            modalTitle.textContent = details.title;
            modalDesc.textContent = details.desc;
            
            // Load thumbnails for new card
            updateModalThumbnails(nextCard);
            
            modalImg.style.opacity = '1';
            modalTitle.style.opacity = '1';
            modalDesc.style.opacity = '1';
            
            // Reset opacity animations
            modalImg.style.transition = 'opacity 0.2s ease';
            modalTitle.style.transition = 'opacity 0.2s ease';
            modalDesc.style.transition = 'opacity 0.2s ease';
        }, 200);
    }
    
    function showPrevCert() {
        if (visibleCards.length <= 1) return;
        currentCertIndex = (currentCertIndex - 1 + visibleCards.length) % visibleCards.length;
        const prevCard = visibleCards[currentCertIndex];
        
        // Fade transition inside modal
        modalImg.style.opacity = '0';
        modalTitle.style.opacity = '0';
        modalDesc.style.opacity = '0';
        
        setTimeout(() => {
            const img = prevCard.querySelector('.cert-image-container img');
            if (img) {
                modalImg.src = img.src;
                modalImg.style.display = 'block';
            } else {
                modalImg.style.display = 'none';
            }
            
            const details = getCardDetails(prevCard);
            modalTitle.textContent = details.title;
            modalDesc.textContent = details.desc;
            
            // Load thumbnails for new card
            updateModalThumbnails(prevCard);
            
            modalImg.style.opacity = '1';
            modalTitle.style.opacity = '1';
            modalDesc.style.opacity = '1';
            
            modalImg.style.transition = 'opacity 0.2s ease';
            modalTitle.style.transition = 'opacity 0.2s ease';
            modalDesc.style.transition = 'opacity 0.2s ease';
        }, 200);
    }
    
    // Click events to open Lightbox
    certCards.forEach(card => {
        // Exclude the DYPACK card since it doesn't have a real image to show (or let it show, it displays the placeholder div)
        card.addEventListener('click', (e) => {
            openModal(card);
        });
    });
    
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalNext) modalNext.addEventListener('click', showNextCert);
    if (modalPrev) modalPrev.addEventListener('click', showPrevCert);
    
    // Close modal by clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation (Esc to close, Left/Right arrow to navigate)
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('show')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') showNextCert();
        if (e.key === 'ArrowLeft') showPrevCert();
    });

    // ==========================================
    // 6.b HUD Dashboard Metrics Simulator
    // ==========================================
    const hudCpu = document.getElementById('hud-cpu');
    const hudMem = document.getElementById('hud-mem');
    if (hudCpu && hudMem) {
        setInterval(() => {
            const cpuVal = Math.floor(Math.random() * 11) + 4;
            const memVal = Math.floor(Math.random() * 4) + 31;
            hudCpu.textContent = `${cpuVal < 10 ? '0' + cpuVal : cpuVal}%`;
            hudMem.textContent = `${memVal}%`;
        }, 3000);
    }

    // ==========================================
    // 7. Language Switcher System
    // ==========================================
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        
        // Update active button state
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Save user preference
        localStorage.setItem('portfolio-lang', lang);
        
        // Update document title
        const pageTitles = {
            th: "Sakaowan Buranavatasin | Cyber Security & Software Testing Portfolio",
            en: "Sakaowan Buranavatasin | Cyber Security & Software Testing Portfolio"
        };
        if (pageTitles[lang]) {
            document.title = pageTitles[lang];
        }
    }
    
    // Initialize language from localStorage or default to Thai ('th')
    const savedLang = localStorage.getItem('portfolio-lang') || 'th';
    setLanguage(savedLang);
    
    // Add event listeners to switcher buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // ==========================================
    // 8. Dark / Light Theme Switcher System
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    }
    
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // ==========================================
    // Skills Card Accordion Toggle
    // ==========================================
    const skillsCards = document.querySelectorAll('.skills-card-new');
    skillsCards.forEach((card, index) => {
        // Expand the first card by default
        if (index === 0) {
            card.classList.add('expanded');
        }
        
        const header = card.querySelector('.skills-header-new');
        if (header) {
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                const isAlreadyExpanded = card.classList.contains('expanded');
                
                // Collapse all cards
                skillsCards.forEach(c => c.classList.remove('expanded'));
                
                // Toggle the clicked one
                if (!isAlreadyExpanded) {
                    card.classList.add('expanded');
                }
            });
        }
    });
});

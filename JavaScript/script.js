        document.addEventListener('DOMContentLoaded', function() {

            const hamburger = document.querySelector('.hamburger');
            const mobileNav = document.querySelector('.mobile-nav');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

            function toggleMenu() {
                hamburger.classList.toggle('open');
                mobileNav.classList.toggle('open');
                
                if (mobileNav.classList.contains('open')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            }

            hamburger.addEventListener('click', toggleMenu);

            mobileNavLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });

            const sliderContainer = document.querySelector('.slider-container');
            const sliderWrapper = document.querySelector('.slider-wrapper');
            const slides = Array.from(sliderWrapper.children);
            
            let slideIndex = 0;
            const totalSlides = slides.length;

            function autoScroll() {
                slideIndex++;
                
                if (slideIndex >= totalSlides) {
                    slideIndex = 0;
                    sliderContainer.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    const targetSlide = slides[slideIndex];
                    sliderContainer.scrollTo({
                        left: targetSlide.offsetLeft,
                        behavior: 'smooth'
                    });
                }
            }
            
            let autoPlayInterval = setInterval(autoScroll, 4000);

            sliderContainer.addEventListener('scroll', () => {
                clearInterval(autoPlayInterval);
                setTimeout(() => {
                    const scrollLeft = sliderContainer.scrollLeft;
                    const slideWidth = slides[0].offsetWidth;
                    slideIndex = Math.round(scrollLeft / slideWidth);
                    
                    clearInterval(autoPlayInterval);
                    autoPlayInterval = setInterval(autoScroll, 4000);
                }, 8000);
            }, { passive: true });

            const contactForm = document.getElementById('contact-form');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('¡Consulta enviada! Te contactaremos pronto.');
                contactForm.reset();
            });

        });
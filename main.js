// mobile nav

    let mobileMenu = document.getElementById('mobile-icon');
    let navContent = document.getElementById('nav-content');
    let innerIcon = document.querySelector('.flip-icon');

    let icon1 = document.getElementById('icon1');
    let icon2 = document.getElementById('icon2');

    let x = window.matchMedia("(max-width: 870px)");

    function toggleMenu(){
        if (x.matches) {
            navContent.classList.toggle('hidden');
            // icon1.classList.toggle('visible-icon');
            // icon2.classList.toggle('hidden-icon');
            innerIcon.classList.toggle('flip');
        }
    }

    mobileMenu.addEventListener('click', toggleMenu);
    navContent.addEventListener('click', toggleMenu);


// about section paragraphs animation 

    const plist = document.querySelectorAll('.animated-p');
    const config = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('p-animation-triggered');
            } else {
                entry.target.classList.remove('p-animation-triggered');
            }
        }, config);
    });

    plist.forEach(paragraph => {
        observer.observe(paragraph);
    });

//main headings animations

    const headings = document.querySelectorAll('.animated-h2');
    const config2 = {
        root: null,
        rootMargin: "0px",
        threshold: 1
    };

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('h2-animation-triggered');
            } else {
                entry.target.classList.remove('h2-animation-triggered');
            }
        }, config2);
    });

    headings.forEach(heading => {
        observer.observe(heading);
    });
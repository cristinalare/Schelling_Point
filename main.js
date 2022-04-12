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


// city guide underline centered on mobile 
const city = document.querySelector('.city');

if (x.matches) {
    city.classList.add('center');
} else {
    city.classList.add('left');
}

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
    const config3 = {
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
        }, config3);
    });

    headings.forEach(heading => {
        observer.observe(heading);
    });

    // avatars animations
    const avatars = document.querySelectorAll('.avatar');
    const config2 = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animated-avatar');
            } else {
                entry.target.classList.remove('animated-avatar');
            }
        }, config2);
    });

    avatars.forEach(avatar => {
        observer.observe(avatar);
    });

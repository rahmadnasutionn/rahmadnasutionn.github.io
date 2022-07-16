const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.nav-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercent = [97, 89, 85, 88, 80];

const calcScrollValue = () => {
    const scrollProgress = document.getElementById('progress-scroll');
    const progressValue = document.getElementById('progress-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }
    scrollProgress.addEventListener('click', function() {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#e41c6f ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

window.addEventListener('scroll', () => {
    mainFunction();
});

const mainFunction = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            })
            navbarLinks[i].classList.add('change');
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBarPercent[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarPercent[i];
        });
    }
}

mainFunction();

window.addEventListener('resize', () => {
    window.location.reload();
});
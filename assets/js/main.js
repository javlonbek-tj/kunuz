/*=============== SHOW OTHER LANGUAGES ===============*/
const hiddenLang = document.querySelector('.nav__language__hidden');
const langBtn = document.querySelector('.nav__language__btn');
const langIcon = document.querySelector('.nav__language__btn i');

if (langBtn) {
  langBtn.addEventListener('click', () => {
    hiddenLang.classList.toggle('hidden');
    if (langIcon.classList.contains('ri-arrow-down-s-line')) {
      langIcon.classList.remove('ri-arrow-down-s-line');
      langIcon.classList.add('ri-arrow-up-s-line');
    } else {
      langIcon.classList.remove('ri-arrow-up-s-line');
      langIcon.classList.add('ri-arrow-down-s-line');
    }
  });
}

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== Change ads image in every 5 seconds ===============*/

const images = ['/assets/img/ads-1.webp', '/assets/img/ads-2.webp', '/assets/img/ads-3.webp'];

let currentIndex = 0;
const imgElement = document.getElementById('adsImage');

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex];
}

setInterval(changeImage, 5000);

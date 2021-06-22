import Logo from './assets/images/logo.png';
import LogoFooter from './assets/images/footer-logo.png';
import YellowTruck from './assets/images/track-yellow.png';
import arrowLeft from './assets/images/icons/Arrow-left.png'
import arrowRight from './assets/images/icons/Arrow-right.png'




const logo = document.querySelector('.header__logo')
const mainTruck = document.querySelector('.transportation__europe-truck')
const arrowPrev = document.querySelector('.transportation__europe-arrowPrev')
const arrowNext = document.querySelector('.transportation__europe-arrowNext')
const footerLogo  = document.querySelector('.footer__logo')
console.log(logo, Logo)
logo.innerHTML = `
<a href="index.html">
<img src="${Logo}" alt="logo" class="header__logo-img">
</a>`
mainTruck.innerHTML = `<img src="${YellowTruck}" alt="" class="main-truck">`
arrowPrev.innerHTML = `
<img src="${arrowLeft}" alt="" class="arrows">
<span>
Назад
</span>`
arrowNext.innerHTML = `
<span>
След
</span>
<img src="${arrowRight}" alt="" class="arrows">`

footerLogo.innerHTML = `
<a href="index.html">
<img src="${LogoFooter}" alt="" class="">
</a>`
console.log(arrowPrev)



const setCurrentMinHeight = function (from, to) {
    const parrentEl = document.getElementById(from)
    console.log(parrentEl)
    const childEl = document.getElementById(to)
    const parentElMinHeigth = parrentEl.offsetHeight;
    childEl.style.minHeight = `${parentElMinHeigth}px`;
}
setCurrentMinHeight('transportation__freigth', 'transportation__freigth-inner')
setCurrentMinHeight('transportation__europe-block','transportation__europe-arrows')
setCurrentMinHeight('transportation__europe','transportation__europe-truck')
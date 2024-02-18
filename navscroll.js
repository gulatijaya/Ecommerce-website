function scrolling() {
    let nav = document.querySelector(".nav-head");
    let scroll = document.documentElement.scrollTop;

    if (scroll > 300) {
        nav.classList.add('nav-scroll')
    }
    else {
        nav.classList.remove('nav-scroll')
    }
}
window.onscroll = scrolling;
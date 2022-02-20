/**** Nav menú ****/
const navOpenBtn = document.getElementById("nav-open");
const navCloseBtn = document.getElementById("nav-close");
const bgModal = document.querySelector(".bg-modal");
const navBar = document.querySelector(".nav-bar");

navOpenBtn.addEventListener('click', function () {
    bgModal.classList.add("bg-active");
    navBar.classList.add("nav-active");
});

navCloseBtn.addEventListener('click', function () {
    bgModal.classList.remove("bg-active");
    navBar.classList.remove("nav-active");
});

/**** Shop slider ****/
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shopTitle = document.getElementById("shop-title1");
const shopDescription = document.getElementById("shop-description");
const homeSection = document.querySelector(".home-section");
const windowSize = window.visualViewport;

prevBtn.addEventListener('click', function() {
    bgImgDesktop();
    prevSlide();
});

nextBtn.addEventListener('click', function() {
    bgImgDesktop();
    nextSlide();
});

function bgImgDesktop() {
    if (windowSize.width >= 800) {
        slide1.img = "url(./assets/imgs/desktop-image-hero-1.jpg)";
        slide2.img = "url(./assets/imgs/desktop-image-hero-2.jpg)";
        slide3.img = "url(./assets/imgs/desktop-image-hero-3.jpg)";
    }
}

function prevSlide() {
    if (shopTitle.id === "shop-title3") {
        homeSection.style.backgroundImage = slide2.img;
        shopTitle.id = slide2.id;
        shopTitle.textContent = slide2.title;
        shopDescription.textContent = slide2.content;
    }
    else if (shopTitle.id === "shop-title2") {
        homeSection.style.backgroundImage = slide1.img;
        shopTitle.id = slide1.id;
        shopTitle.textContent = slide1.title;
        shopDescription.textContent = slide1.content;
    }
    else {
        homeSection.style.backgroundImage = slide3.img;
        shopTitle.id = slide3.id;
        shopTitle.textContent = slide3.title;
        shopDescription.textContent = slide3.content;
    }
}

function nextSlide() {
    if (shopTitle.id === "shop-title1") {
        homeSection.style.backgroundImage = slide2.img;
        shopTitle.id = slide2.id;
        shopTitle.textContent = slide2.title;
        shopDescription.textContent = slide2.content;
    }
    else if (shopTitle.id === "shop-title2") {
        homeSection.style.backgroundImage = slide3.img;
        shopTitle.id = slide3.id;
        shopTitle.textContent = slide3.title;
        shopDescription.textContent = slide3.content;
    }
    else {
        homeSection.style.backgroundImage = slide1.img;
        shopTitle.id = slide1.id;
        shopTitle.textContent = slide1.title;
        shopDescription.textContent = slide1.content;
    }
}

const slide1 = {
    id:"shop-title1",
    img: "url(./assets/imgs/mobile-image-hero-1.jpg)",
    title: "Discover innovative ways to decorate",
    content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
}


const slide2 = {
    id:"shop-title2",
    img: "url(./assets/imgs/mobile-image-hero-2.jpg)",
    title: "We are available all across the globe",
    content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
}

const slide3 = {
    id:"shop-title3",
    img: "url(./assets/imgs/mobile-image-hero-3.jpg)",
    title: "Manufactured with the best materials",
    content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
}
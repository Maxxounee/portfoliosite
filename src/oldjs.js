// Анимация окна "подробнее" блока skills
const infoBlocks = document.querySelectorAll(".technologies__info");
const infoBlocksActive = document.querySelectorAll(".info__text");
const technologyIcon = document.querySelectorAll(".logo__image");
const infoArrow = document.querySelectorAll(".info__close-button");
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};
function removeActiveInfo() {
    for (let k = 0; k < infoBlocks.length; k++) {
        const elementK = infoBlocks[k];
        elementK.classList.remove("_active__info");
    }
}
for (let i = 0; i < technologyIcon.length; i++) {
    const element = technologyIcon[i];

    element.addEventListener("click", function () {
        const innerText = element.innerHTML.replace(/.*_/, "").replace(/\..*/, "");
        const blockName = element.innerHTML
            .replace(/.*skills\//, "")
            .replace(/\/.*/, "")
            .trim();

        for (let i = 0; i < infoBlocks.length; i++) {
            const element = infoBlocks[i];
            element.classList.remove("_active__info");
            element.childNodes[1].childNodes[1].innerHTML = innerText;
        }

        for (let i = 0; i < infoBlocksActive.length; i++) {
            const element = infoBlocksActive[i];
            element.addEventListener("mouseout", removeActiveInfo);
        }
        if (isMobile.any()) {
            for (let i = 0; i < infoArrow.length; i++) {
                const element = infoArrow[i];
                element.classList.add("_active");
                element.addEventListener("click", removeActiveInfo);
            }
        }
        document.querySelector(`.technologies__info_${blockName}`).classList.add("_active__info");
    });
}

// Всплывающий header и стрелка вверх
const header = document.querySelector(".header");
const arrow = document.querySelector(".page__up-button");
window.addEventListener("scroll", () => {
    const topValue = window.pageYOffset;
    if (isMobile.any()) {
        removeActiveInfo();
    }
    if (window.pageYOffset > 88) {
        header.classList.add("_header-hide");
        const subValue = topValue - 183;
        if (topValue < 144) {
            header.setAttribute("style", `top: ${subValue}px `);
        }
        if (topValue > 144) {
            header.setAttribute("style", `top: -40px `);
        }
    } else {
        header.setAttribute("style", "top: 0px");
        header.classList.remove("_header-hide");
    }

    if (window.pageYOffset > 200) {
        arrow.classList.add("_active");
    } else {
        arrow.classList.remove("_active");
    }
});

arrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// burger
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    header.classList.toggle("_active");
});

// Якорные ссылки
const menuLinks = document.querySelectorAll(".header__link");

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", clickLink);
});
function clickLink(e) {
    const menuLink = e.target;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    console.log("------");
    console.log(gotoBlock.getBoundingClientRect().top);
    console.log(scrollY);
    console.log(document.querySelector(".header").offsetHeight);
    const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        window
            .getComputedStyle(document.querySelector(".page__welcome"))
            .marginTop.replace(/px/, "");

    if (burger.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        burger.classList.remove("_active");
        burger.classList.remove("_active");
        header.classList.remove("_active");
    }
    if (menuLink.dataset.goto === "._page-section_1") {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    } else {
        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth",
        });
    }

    e.preventDefault();
}

// Стрелка вверх

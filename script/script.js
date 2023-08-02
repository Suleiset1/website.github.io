const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composePath().includes(searchBtn) &&
            !e.composePath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }
    });
});

cartBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composePath().includes(cartBtn) &&
            !e.composePath().includes(cartItem)
        ) {
            cartItem.classList.remove("active");
        }
    });
});

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composePath().includes(menuBtn) &&
            !e.composePath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }
    });
});


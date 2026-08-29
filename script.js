```javascript
// =========================
// MENU MOBILE
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


// Membuka dan menutup menu

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}


// =========================
// MENUTUP MENU
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

    });

});
```

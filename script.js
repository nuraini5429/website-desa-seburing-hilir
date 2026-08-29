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
// Menu akan tertutup setelah link diklik

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});
```

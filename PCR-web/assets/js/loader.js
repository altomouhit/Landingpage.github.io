let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let percent = document.querySelector("span");
let count = 0;
window.addEventListener('load', function () {
    setInterval(function () {
        if (count == 100) {
            $('.body-load').fadeOut(); // fade out the loading animation
            outer.classList.remove("active-loader");
            outer.classList.add("active-loader-2");
            clearInterval();
        } else {
            count = count + 1;
            percent.textContent = count + '%';
            outer.classList.add("active-loader");
        }
    }, 5);
});


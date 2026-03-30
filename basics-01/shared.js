var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalClose = document.querySelector('.modal button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');
// backdrop.style.display = "block";

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = "block";
        modal.classList.add('open');
        backdrop.style.display = "block";
        setTimeout(function () {
            backdrop.classList.add('open');
        }, 10);

    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {

        modal.classList.remove('open');
        backdrop.classList.remove('open');
        setTimeout(function () {
            backdrop.style.display = "none";

        }, 200);
    });
}


backdrop.addEventListener("click", () => {
    // mobileNav.style.display = "none";
    mobileNav.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function () {
        backdrop.style.display = "none";

    }, 200);
});

toggleButton.addEventListener("click", () => {
    backdrop.style.display = "block";
    setTimeout(function () {
        backdrop.classList.add('open');
    }, 10);


    mobileNav.classList.add('open');
});

ctaButton.addEventListener('animationstart',)

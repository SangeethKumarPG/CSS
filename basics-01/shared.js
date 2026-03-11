var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalClose = document.querySelector('.modal button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// backdrop.style.display = "block";

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = "block";
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {

        modal.classList.remove('open');

        backdrop.classList.remove('open');
    });
}


backdrop.addEventListener("click", () => {
    // mobileNav.style.display = "none";
    mobileNav.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
});

toggleButton.addEventListener("click", () => {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
})

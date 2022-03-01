let menu_icon_bar = document.querySelector('#menu-icon-bar');
let navbar_toggler = document.querySelector('.navbar-toggler');
let lines = document.querySelectorAll('.line');



navbar_toggler.onclick = function() {
    if (menu_icon_bar.classList.contains('unfull')) {
        lines.forEach((line) => {
            line.classList.add('width-24')
        });
        menu_icon_bar.classList.remove('unfull')
    } else {
        lines.forEach((line) => {
            line.classList.remove('width-24')
        });
        menu_icon_bar.classList.add('unfull')
    }

}
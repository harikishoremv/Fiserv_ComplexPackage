// Relocate Site Notice Bottom (out of header)
let noticeBottom = document.querySelector('[class*="Table-Notice"][class*="-Bottom"]');
let footer = document.querySelector('footer');

if (noticeBottom) {
    footer.append(noticeBottom);
}

// Relocate Down Arrow to first Promo
let downArrow = document.querySelector('.down-arrow');
let firstPromo = document.querySelector('[class*="Subsection-Table"][class*="-Full-Height"]:first-of-type');

if (document.body.classList.contains('home')) {
    firstPromo.append(downArrow);
}

jQuery(function () {

    // Set Color Contrast of Page - Theme light or dark
    const pageContrastClass = new ContrastClass({
        "querySelectorAll": 'footer div.theme-color',
        "classReceiver": "body"
    });

});
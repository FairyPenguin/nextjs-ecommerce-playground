// Global Selectors

const openButton = document.querySelector('#openBtn')
const closeButton = document.querySelector('#closeBtn')

// Open Button Functionality

function openMobileMenu() {
    if (openButton) {
        openButton.setAttribute('aria-expanded', 'true')
    }

}

if (openButton) {
    openButton.addEventListener('click', openMobileMenu)

}


// Close Button Functionality


function closeMobileMenu() {
    if (openButton) {
        openButton.setAttribute('aria-expanded', 'false')

    }
}


if (closeButton) {
    closeButton.addEventListener('click', closeMobileMenu)

}


export { openMobileMenu, closeMobileMenu }
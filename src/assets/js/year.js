// Function to update the copyright year dynamically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('dynamic-copyright');

    if (!copyrightElement) {
        return;
    }

    copyrightElement.innerHTML = `&copy; ${currentYear} - <a href="/" class="cs-copyright-link">Gateway Cornerstone Technologies</a>`;
}

window.addEventListener('load', updateCopyrightYear);

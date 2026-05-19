// Function to update the copyright year dynamically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('dynamic-copyright').textContent = `&copy; ${currentYear}`;
    window.addEventListener('load', updateCopyrightYear);
  }

  updateCopyrightYear();
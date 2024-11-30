document.addEventListener('DOMContentLoaded', function () {
    let navbarOpen = false;

    const button = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    const updateContent = () => {
        content.innerHTML = navbarOpen ? 'Naiem' : 'Foysal';
    };

    button.addEventListener('click', () => {
        navbarOpen = !navbarOpen;
        updateContent();
    });

    // Initialize content on page load
    updateContent();
});

function collapseNav() {
    navb = document.getElementById("navBox");
    if (navb.classList.contains('hidden')) {
        navb.classList.add('block');
        navb.classList.remove('hidden');
    } else {
        navb.classList.remove('block');
        navb.classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split('/').pop();
    // Map of pages to nav link IDs
    const navLinks = {
        '': 'nav-home',
        'about': 'nav-about',
        'contact': 'nav-contact',
        'portfolio': 'nav-portfolio' // Add more pages as needed
    };

    // Load the navigation bar
    fetch('./pages/components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-id').innerHTML = data;
            window.scrollTo(0, 0);
            // Add 'active' class to the corresponding nav item
            if (navLinks[currentPage]) {
                document.getElementById(navLinks[currentPage]).classList.add('text-orange-600');
            }
        });

    // Load the footer
    fetch('./pages/components/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer-id').innerHTML = data);

    var footer = document.getElementById('footer-id');
    if (document.body.scrollHeight <= window.innerHeight) {
        footer.classList.add('fixed');
        footer.classList.add('bottom-0');
        footer.classList.add('inset-x-0');
    }
});
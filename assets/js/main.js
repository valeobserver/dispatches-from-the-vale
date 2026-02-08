// Menu toggle – works on all devices
const menuToggle = document.getElementById('menuToggle');
const sidebar    = document.getElementById('sidebar');
const closeBtn   = document.querySelector('.close-sidebar');

if (menuToggle && sidebar) {
    function openMenu() {
        sidebar.classList.add('active');
        document.body.classList.add('sidebar-open');
    }

    function closeMenu() {
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }

    menuToggle.addEventListener('click', openMenu);

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    // Click outside to close
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeMenu();
        }
    });
}

// Keep your smooth scroll
document.documentElement.style.scrollBehavior = 'smooth';

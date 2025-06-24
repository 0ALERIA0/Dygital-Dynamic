function toggleBackground() {
      document.body.classList.toggle("white-bg");
      document.body.classList.toggle("gradient-bg");
    }

 const floatingNav = document.getElementById('floating-nav');
    const floatingToggle = document.getElementById('floating-toggle');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            floatingNav.classList.add('show');
        } else {
            floatingNav.classList.remove('show');
            floatingNav.classList.remove('menu-open'); // close menu when hidden
        }
    });

    floatingToggle.addEventListener('click', () => {
        floatingNav.classList.toggle('menu-open');
    });

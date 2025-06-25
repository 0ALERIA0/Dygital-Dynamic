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

    document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach(button => {
    button.addEventListener("click", function () {
      const title = this.getAttribute("data-title");
      const description = this.getAttribute("data-description");

      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalBody").textContent = description;

      const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
      modal.show();
    });
  });
});

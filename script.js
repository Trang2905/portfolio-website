/* =========================
   FORM LIÊN HỆ
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Kiểm tra dữ liệu
    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "⚠️ Vui lòng nhập đầy đủ thông tin!";

        formMessage.style.color = "#d45b5b";

        return;
    }


    // Kiểm tra email
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "⚠️ Email không hợp lệ!";

        formMessage.style.color = "#d45b5b";

        return;
    }


    // Thông báo thành công
    formMessage.textContent =
        "💌 Gửi tin nhắn thành công! Cảm ơn bạn nhé 🌸";

    formMessage.style.color = "#4c9b67";


    // Xóa form
    contactForm.reset();

});


/* =========================
   LỌC DỰ ÁN
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Xóa active ở tất cả button
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Thêm active cho button đang chọn
        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(function(card) {

            const category =
                card.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

const navLinks =
    document.querySelectorAll(".navbar a");

menuToggle.addEventListener("click", function() {

    navbar.classList.toggle("show");

    const isOpen = navbar.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", false);

        menuToggle.textContent = "☰";

    });

});


/* =========================
   MENU ACTIVE KHI CUỘN
========================= */

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
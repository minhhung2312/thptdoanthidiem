let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let slideInterval;

// Hàm hiển thị slide
function showSlide(index) {
    // Đảm bảo vòng lặp khi vượt quá số ảnh
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    // Dịch chuyển slider theo index
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Cập nhật chấm tròn
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

// Tự động chuyển slide mỗi 3 giây
function startSlideShow() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 7000);
}

// Dừng slide khi có tương tác
function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Nút điều hướng
prevButton.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
    resetSlideShow();
});

nextButton.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
    resetSlideShow();
});

// Chuyển slide khi nhấn chấm tròn
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slideIndex = index;
        showSlide(slideIndex);
        resetSlideShow();
    });
});

// Khởi chạy slider
showSlide(slideIndex);
startSlideShow();

// Back top
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight / 2) {
            backToTopButton.classList.add("show");
            backToTopButton.classList.remove("hide");
        } else {
            backToTopButton.classList.add("hide");
            backToTopButton.classList.remove("show");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Trigger bottom
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".news-card");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 400); // Mỗi phần tử xuất hiện cách nhau 300ms
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Kiểm tra ngay khi load trang
});

// Overview
document.addEventListener("DOMContentLoaded", function () {
    const overviewSection = document.querySelector(".overview-info");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Chỉ chạy một lần
                }
            });
        },
        { threshold: 0.2 } // Kích hoạt khi 20% phần tử xuất hiện
    );

    observer.observe(overviewSection);
});

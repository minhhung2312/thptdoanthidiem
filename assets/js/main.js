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
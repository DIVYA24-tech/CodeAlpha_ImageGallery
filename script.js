const images = document.querySelectorAll(".image-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

// Open
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

// Show
function showImage() {
  lightboxImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].nextElementSibling.textContent;
}

// Next
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

// Prev
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

// Close
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Filter
function filterImages(category) {
  const boxes = document.querySelectorAll(".image-box");

  boxes.forEach(box => {
    if (category === "all" || box.classList.contains(category)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}
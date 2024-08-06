const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentImageIndex = 0;

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightbox.style.display = 'flex';
        lightboxImage.src = e.target.src;
        currentImageIndex = Array.prototype.indexOf.call(gallery.children, e.target);
        lightboxImage.classList.add('show');
        lightboxImage.classList.add('cut-radius');
    }
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImage.classList.remove('show');
    lightboxImage.classList.remove('cut-radius');
});

prevBtn.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = gallery.children.length - 1;
    }
    lightboxImage.src = gallery.children[currentImageIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= gallery.children.length) {
        currentImageIndex = 0;
    }
    lightboxImage.src = gallery.children[currentImageIndex].src;
});
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(imageContainer => {
    const image = imageContainer.querySelector('img');
    const clickmeImage = imageContainer.querySelector('.clickme-image');

    image.addEventListener('click', () => {
        if (window.innerWidth > 800) {
            image.classList.toggle('expanded');
        }
    });

    clickmeImage.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

const triggerImage = document.querySelector(".trigger-image");
const hoverImageContainer = document.querySelector(".hover-image-container");
const hoverImage = document.querySelector(".hover-image");

triggerImage.addEventListener("mouseover", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    hoverImageContainer.style.left = `${mouseX}px`;
    hoverImageContainer.style.top = `${mouseY + 20}px`;
    hoverImageContainer.style.display = "block";
});

triggerImage.addEventListener("mouseout", () => {
    hoverImageContainer.style.display = "none";
});
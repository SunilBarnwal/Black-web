const slider = document.querySelector(".slider");

const images = [
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg",
    "images/image5.jpeg",
    "images/image6.jpeg",
    "images/image7.jpeg",
    "images/image8.jpeg",
    "images/image9.jpeg",
    "images/image10.jpeg"
];

let index = 0;

function changeImage() {
    slider.style.backgroundImage = `url('${images[index]}')`;
    index++;

    if (index >= images.length) {
        index = 0;
    }
}

changeImage();
setInterval(changeImage, 3000);

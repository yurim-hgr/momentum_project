const imgList = ["0.jpg", "1.jpg", "2.jpg"];

const chooseImg = imgList[Math.floor(Math.random() * imgList.length)];

const image = document.createElement("img");
image.classList.add("bgImage");

image.src = `img/${chooseImg}`;

document.body.appendChild(image);

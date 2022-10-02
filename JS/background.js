const images = ["background.jpg", "cat.jpg", "dog.jpg", "rabbit.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

// console.log(choseImage);

const bgImage = document.createElement("img"); // <img>

// console.log(bgImage);
bgImage.src = `img/${choseImage}`; // "img/cat.jpg"

// console.log(bgImage);

document.body.appendChild(bgImage); // appendchild -> body에 html 추가
/*
append-> 가장 뒤에
prepend-> 가장 위에 온다
in html.body
*/
const body = document.querySelector("body")

const IMG_COUNT = 6;

function paintImage(imgNumber){
  const img = new Image();
  img.src = `images/${imgNumber + 1}.jpg`;
  img.onload = function(){
    img.classList.add("bgImage");
    body.prepend(img);  
  }
}

function genRandom(){
  const number = Math.floor(Math.random() * 5);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber)
}

init();
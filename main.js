function strikeFirst(){
document.querySelector("ul li").style.textDecoration = "line-through";
}

strikeFirst();

function setImage(id, url){
    document.querySelector(`#${id}`).src = url;
}

setImage("image-1", "https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-11/IMG_5577.JPG?itok=Vl0aR9EE");

setImage("image-2", "https://image.cnbcfm.com/api/v1/image/104548349-Large_house_suburb.jpg?v=1532563813&w=1600&h=900");

setImage("image-3", "https://multifiles.pressherald.com/uploads/sites/10/2020/03/TF.NC_.FrptHabitatHouse.0319.jpg?rel=related");

function removeLast(){
    document.querySelector("ul").lastElementChild.remove();
}

removeLast();
removeLast();

function setTextSize(id, size){
    document.querySelector(`#${id}`).style.fontSize = size;
}

setTextSize("heading", "40px");

//part 2=====================================

function appendToUL(element){
    document.querySelector("ul").appendChild(element);
}

const newImg = document.createElement("img");
newImg.src = "https://laurenslatest.com/wp-content/uploads/2020/08/vanilla-ice-cream-5-copy.jpg"

appendToUL(newImg);

function setImgHeight(element){
    element.style.height = "30px";
}

setImgHeight(document.querySelector("#image-1"));

function makeInvis(element){
    element.classList.add("invisible");
}

makeInvis(document.querySelector("#image-3"));

//Part 3 =====================================

function newLi(text){
    const newEl = document.createElement("li");
    newEl.innerText = text;
    return newEl;
}

appendToUL(newLi("Hello There"));

function newHeader(size, text){
    const newEl = document.createElement(`h${size}`);
    newEl.innerText = text;
    return newEl;
}

appendToUL(newHeader(2, "This is an <h2> element"));


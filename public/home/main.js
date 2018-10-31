imagen = document.querySelector(".interaction__right");

orange = document.querySelector(".orange");
violet = document.querySelector(".violet");
blue = document.querySelector(".blue");
purple = document.querySelector(".purple");
yellow = document.querySelector(".yellow");
red = document.querySelector(".red");
pink = document.querySelector(".pink");
brown = document.querySelector(".brown");
gray = document.querySelector(".gray");
lightBrown = document.querySelector(".lightBrown");

imagenArray = [
    "url('/home/Insumos/orange.png')",
    "url('/home/Insumos/violet.png')",
    "url('/home/Insumos/purple.png')",
    "url('/home/Insumos/blue.png')",
    "url('/home/Insumos/yellow.png')",
    "url('/home/Insumos/red.png')",
    "url('/home/Insumos/pink.png')",
    "url('/home/Insumos/brown.png')",
    "url('/home/Insumos/gray.png')",
    "url('/home/Insumos/lightBrown.png')"]

if (orange != null) {

    orange.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[0];
    });
}

if (violet != null) {

    violet.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[1];
    });
}

if (blue != null) {

    blue.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[2];
    });
}

if (purple != null) {

    purple.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[3];
    });
}

if (yellow != null) {

    yellow.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[4];
    });
}

if (red != null) {

    red.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[5];
    });
}

if (pink != null) {

    pink.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[6];
    });
}

if (brown != null) {

    brown.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[7];
    });
}

if (gray != null) {

    gray.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[8];
    });
}
if (lightBrown != null) {

    lightBrown.addEventListener("click", (e) => {
        imagen.style.backgroundImage = imagenArray[9];
    });
}


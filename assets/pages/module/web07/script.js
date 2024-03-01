console.log("Script de la sesion Web07");

document.getElementById("title").innerHTML="El Elote en CDMX cuesta $30.00";

function handleTitle() {
    document.getElementById("title").style.color = "blue";    
}

function changeColor( color ){
    document.getElementById("description").style.color = color;
}

function changeColorTextUsingThis(color, elementRef) {
    console.log(elementRef);
    elementRef.style.color = color;
    //El elemeto HTML no tiene un id asignado
    //document.getElementById(?)
}

function changeColorUsingClass() {
    //getElementsByClassName: seleccionar y devuellve una coleccion de elementos que tengan un atributo de clase espeficica
    const collection = document.getElementsByClassName("title-article");
    console.log(collection);
    for (let index = 0; index < collection.length; index++) {
        collection[index].style.color = "#9FE2BF";
    }
}

function resetColorsParagraph() {
    //Opcion 1: Ir a todos los paragrapsgh y agregar una clase. E. class="paragraph-style"
    
    //getElementsByClassName: seleccionar y devuellve una coleccion de elementos que tengan un atributo de clase espeficica
    const collection = document.getElementsByTagName("p");
    console.log(collection);
    for (let index = 0; index < collection.length; index++) {
        collection[index].style.color = "black";
    }
}

function (coleccion, color) {
    
}
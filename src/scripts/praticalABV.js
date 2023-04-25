export function say (object){
    console.log(object);
}

function one(String){
    return document.querySelector(String);
}

function many(String){
    return document.querySelectorAll(String);
}

export function ear(String, Function){
    return document.addEventListener(String, Function);
}

export function randRGB(){
    return Math.floor(Math.random() * 256)
}

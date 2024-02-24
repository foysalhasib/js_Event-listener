// =======================  event listener ======================

let btn = document.getElementById('sample_btn').addEventListener('click',message,prompt);

function message(){
    prompt("hello") 
    console.log('hello')

}

let hov = document.getElementById('hover').addEventListener('mouseover',message,prompt);

function message(){
    prompt("hello") 
    console.log('hello')

}


//-----------------------------------
document.querySelector('.hero').addEventListener("focus",color)

function color(){
    this.style.background = "pink";
}
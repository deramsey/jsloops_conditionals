const d = new Date();
var h = d.getHours();
var inputs = document.querySelectorAll("input");


const setBG = () =>{
    if(h > 14){
        document.querySelector("body").style.backgroundColor = "#6a112f";
    }
    else if(h >= 0 && h <= 9){
        document.querySelector("body").style.backgroundColor = "#2f206a";
    }
    else{
        document.querySelector("body").style.backgroundColor = "#fad711";
    }
}

function alertName(){
    let x = document.querySelector("#fname").value;
    if(x == "John"){
        alert("Welcome, Johnny");
    }
    else{
        alert("Hello, " + x);
    }
}


for(let inp of inputs){
    inp.addEventListener("focus", (e) => inp.style.border="5px solid red")
}

for(let inp of inputs){
    inp.addEventListener("blur", (e) => inp.style.border="1px solid black")
}

window.addEventListener("DOMContentLoaded", setBG);
document.querySelector("button").addEventListener("click", alertName);
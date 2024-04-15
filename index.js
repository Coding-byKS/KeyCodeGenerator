document.addEventListener("keydown", (event) =>{
    let key =event.key;
    let code=event.code;
    let which=event.which;
    document.getElementById("detail").innerHTML = "You pressed " + key +"!!";
    document.getElementById("itemkey").innerHTML = "event.key";
    document.getElementById("itemcode").innerHTML = "event.code";
    document.getElementById("itemwhich").innerHTML = "event.which";
    document.getElementById("key").innerHTML = key;
    document.getElementById("code").innerHTML = code;
    document.getElementById("which").innerHTML = which;
})


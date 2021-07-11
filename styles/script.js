//display home page -->  gallery 
document.getElementById("go").addEventListener("click",function(){
    document.getElementsByClassName("home")[0].style.display = "none"
})
document.getElementById("go").addEventListener("click",function(){
    document.getElementsByClassName("gallery")[0].style.display = "block"
})
document.getElementById("go").addEventListener("click",function(){
    document.getElementById("showatback").style.display = "none"
})

//about hover
document.getElementById("abthover").onmouseover = function(){
    document.getElementById("showatback").style.display = "block"
}


//pic 1

document.getElementById("l1-count").innerText = localStorage.getItem("l1key")
let l1=0
document.getElementById("l1").onclick=function(){
    if (localStorage.getItem("l1key") > 0){
        l1 = localStorage.getItem("l1key")
        l1++
    }
    else{
        l1++
    }
    window.localStorage.setItem("l1key",l1)
    let temp = localStorage.getItem("l1key")
    document.getElementById("l1-count").innerText = temp
}  
document.getElementById("d1-count").innerText = localStorage.getItem("d1key")
let d1 = 0
document.getElementById("d1").onclick=function(){
    if (localStorage.getItem("d1key") > 0){
        d1 = localStorage.getItem("d1key")
        d1++
    }
    else{
        d1++
    }
    window.localStorage.setItem("d1key",d1)
    let temp2 = localStorage.getItem("d1key")
    document.getElementById("d1-count").innerText = temp2
}

// pic 2

document.getElementById("l2-count").innerText = localStorage.getItem("l2key")
let l2=0
document.getElementById("l2").onclick=function(){
    if (localStorage.getItem("l2key") > 0){
        l2 = localStorage.getItem("l2key")
        l2++
    }
    else{
        l2++
    }
    window.localStorage.setItem("l2key",l2)
    let temp = localStorage.getItem("l2key")
    document.getElementById("l2-count").innerText = temp
}  
document.getElementById("d2-count").innerText = localStorage.getItem("d2key")
let d2 = 0
document.getElementById("d2").onclick=function(){
    if (localStorage.getItem("d2key") > 0){
        d2 = localStorage.getItem("d2key")
        d2++
    }
    else{
        d2++
    }
    window.localStorage.setItem("d2key",d2)
    let temp2 = localStorage.getItem("d2key")
    document.getElementById("d2-count").innerText = temp2
}

// pic 3

document.getElementById("l3-count").innerText = localStorage.getItem("l3key")
let l3=0
document.getElementById("l3").onclick=function(){
    if (localStorage.getItem("l3key") > 0){
        l3 = localStorage.getItem("l3key")
        l3++
    }
    else{
        l3++
    }
    window.localStorage.setItem("l3key",l3)
    let temp = localStorage.getItem("l3key")
    document.getElementById("l3-count").innerText = temp
}  
document.getElementById("d3-count").innerText = localStorage.getItem("d3key")
let d3 = 0
document.getElementById("d3").onclick=function(){
    if (localStorage.getItem("d3key") > 0){
        d3 = localStorage.getItem("d3key")
        d3++
    }
    else{
        d3++
    }
    window.localStorage.setItem("d3key",d3)
    let temp2 = localStorage.getItem("d3key")
    document.getElementById("d3-count").innerText = temp2
}

// pic 4


document.getElementById("l4-count").innerText = localStorage.getItem("l4key")
let l4=0
document.getElementById("l4").onclick=function(){
    if (localStorage.getItem("l4key") > 0){
        l4 = localStorage.getItem("l4key")
        l4++
    }
    else{
        l4++
    }
    window.localStorage.setItem("l4key",l4)
    let temp = localStorage.getItem("l4key")
    document.getElementById("l4-count").innerText = temp
}  
document.getElementById("d4-count").innerText = localStorage.getItem("d4key")
let d4 = 0
document.getElementById("d4").onclick=function(){
    if (localStorage.getItem("d4key") > 0){
        d4 = localStorage.getItem("d4key")
        d4++
    }
    else{
        d4++
    }
    window.localStorage.setItem("d4key",d4)
    let temp2 = localStorage.getItem("d4key")
    document.getElementById("d4-count").innerText = temp2
}

//pic 5


document.getElementById("l5-count").innerText = localStorage.getItem("l5key")
let l5=0
document.getElementById("l5").onclick=function(){
    if (localStorage.getItem("l5key") > 0){
        l5 = localStorage.getItem("l5key")
        l5++
    }
    else{
        l5++
    }
    window.localStorage.setItem("l5key",l5)
    let temp = localStorage.getItem("l5key")
    document.getElementById("l5-count").innerText = temp
}  
document.getElementById("d5-count").innerText = localStorage.getItem("d5key")
let d5 = 0
document.getElementById("d5").onclick=function(){
    if (localStorage.getItem("d5key") > 0){
        d5 = localStorage.getItem("d5key")
        d5++
    }
    else{
        d5++
    }
    window.localStorage.setItem("d5key",d5)
    let temp2 = localStorage.getItem("d5key")
    document.getElementById("d5-count").innerText = temp2
}

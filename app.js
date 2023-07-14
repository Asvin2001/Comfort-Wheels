var leftarrow=document.getElementById("pre")
var rightarrow=document.getElementById("next")
pop=document.getElementsByTagName("div")
var a=document.getElementById("sn")







function leftbtn(){
    leftarrow.className="carousel-control-prev-icon bg-success rounded-2"
    rightarrow.className="carousel-control-next-icon bg-danger rounded-2"

}

function rightbtn(){
    rightarrow.className="carousel-control-next-icon bg-success rounded-2"
    leftarrow.className="carousel-control-prev-icon bg-danger rounded-2"

}

// leftarrow.className="bg-success"


function logee(){
    open("Login.html","_self")
}

function signnn(){
    open("signup.html","_self")
}

setTimeout(function looo(){
    
    
pop[18].classList.remove("d-none")
pop[18].style.animation="box ease 2s"
a.style.filter="blur(3px)"





},3000)




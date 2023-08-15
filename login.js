a = document.getElementById("namel")
b = document.getElementById("sipaso")
c = document.getElementById("dat")
d = document.getElementById("datt")
e = document.getElementById("npa")
f = document.getElementById("nepas")
g = document.getElementById("epass")
h = document.getElementById("lbt")
i = document.getElementById("resebt")
j = document.getElementById("nem")
k = document.getElementById("alet")
l = document.getElementById("alt")
m = document.getElementById("sin")

assw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
ico = document.getElementsByTagName("i")



// if(localStorage.getItem("Name")==null){
//     alert("You don't have an account Please Sign up first")
//     window.open("signup.html","_self")
// }










function show() {

    if (f.type == "password") {
        f.type = "text"
        ico[0].className = "bi bi-eye-slash-fill"
    }

    else {
        f.type = "password"
        ico[0].className = "bi bi-eye-fill"
    }

}
function showo() {

    if (b.type == "password") {
        b.type = "text"
        ico[1].className = "bi bi-eye-slash-fill"
    }

    else {
        b.type = "password"
        ico[1].className = "bi bi-eye-fill"
    }

}



m.classList.add("d-none")
m.innerHTML="Sign up"
function loo() {
    if (a.value == localStorage.getItem("Name")) {
        // m.remove()
        m.classList.add("d-none")



        if (b.value == localStorage.getItem("Password")) {
            open("home.html", "_self")
            l.classList.add("d-none")

        }
        else {
            alt.classList.remove("d-none")
            k.innerHTML = ("Wrong  password")
        }




    }

    else if (a.value == localStorage.getItem("Email")) {
        m.classList.add("d-none")


        if (b.value == localStorage.getItem("Password")) {
            open("home.html", "_self")

            l.classList.add("d-none")

        }
        else {
            alt.classList.remove("d-none")
            k.innerHTML = ("Wrong  password")
        }



    }
    else {
        alt.classList.remove("d-none")
        k.innerHTML = ("User name or email not found Please sign in !!")
        m.classList.remove("d-none")
    }
}



function forp() {
    c.classList.remove("d-none")
    e.classList.remove("d-none")
    g.classList.add("d-none")
    i.classList.remove("d-none")
    h.classList.add("d-none")
    j.innerHTML = ("Email")





}


function res() {
    if (a.value == localStorage.getItem("Email")) {
        l.classList.add("d-none")

        if (d.value == localStorage.getItem("Date of birth")) {
            l.classList.add("d-none")




            if (f.value.match(assw)) {
                alert("Your Password has been changes please login to continue")
                localStorage.setItem("Password", f.value)
                open("Login.html", "_self")
                l.classList.add("d-none")


            }
            else {
                alt.classList.remove("d-none")
                k.innerHTML = ("Password must containes a upper case, number, and a special case")

            }
        }
        else {
            alt.classList.remove("d-none")
            k.innerHTML = ("Wrong date of birth")

        }





    }
    else {
        alt.classList.remove("d-none")
        k.innerHTML = ("Invalid email")

    }
}











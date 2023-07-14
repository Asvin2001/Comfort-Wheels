var a = document.getElementById("namee")
var b = document.getElementById("mail")
var c = document.getElementById("sipaso")
var d = document.getElementById("rpassword")
var e = document.getElementById("num")
var f = document.getElementById("country")
var g = document.getElementById("aadar")
var h = document.getElementById("pan")
var j = document.getElementById("other")
var k = document.getElementById("male")
var l = document.getElementById("female")
var m = document.getElementById("dob")

var p = document.getElementsByTagName("p")
var i = document.getElementsByTagName("i")




const n = new Date()
day = n.getDate()
mont = n.getMonth() + 1
yea = n.getFullYear()

today = (yea + "-0" + mont + "-" + day)




m.setAttribute("max", today)

letteronly = /^[a-zA-Z ]+$/
aile = /^[a-zA-Z0-9._]+\@[a-zA-Z0-9]+\.[a-zA-Z0-9-]*$/
assw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
ind = /^[0-9]{10,10}$/
usa = /^[0-9]{11,11}$/
uk = /^[0]{1}[0-9]{10,10}$/
idr = /^[0-9]{12,12}$/
pan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/




function namm() {
    if (a.value.match(letteronly)) {
        p[0].className = "d-none"

    }
    else {

        p[0].className = "d-block text-white bg-danger rounded-3 pb-2"

    }
}


function mai() {
    if (b.value.match(aile)) {
        p[1].className = "d-none"

    }
    else {
        p[1].className = "d-block text-white bg-danger rounded-3 pb-2"


    }

}

function show() {

    if (c.type == "password") {
        c.type = "text"
        i[2].className = "bi bi-eye-slash-fill"
    }

    else {
        c.type = "password"
        i[2].className = "bi bi-eye-fill"
    }
}


function pass() {
    if (c.value.match(assw)) {
        p[2].className = "d-none"


    }
    else {

        p[2].className = "d-block text-white bg-danger rounded-3 pb-2"



    }

}

function rp() {
    if (c.value.match(assw)) {

        p[2].className = "d-none"

        if (c.value == d.value) {

            p[3].className = "d-none"


        }
        else {
            p[3].className = "d-block text-white bg-danger rounded-3 pb-2"


        }



    }

    else {

        p[2].className = "d-block text-white bg-danger rounded-3 pb-2"



    }

}





function pno() {

    if (f.value == 0) {

        
        p[4].className = "d-block text-white bg-danger rounded-3 pb-2"



    }

    else if (f.value == 1) {
        p[4].className = "d-none"


        if (e.value.match(ind)) {

            p[4].className = "d-none"


        }
        else {
            p[4].className = "d-block text-white bg-danger rounded-3 pb-2"

        }

    }


    else if (f.value == 2) {
        p[4].className = "d-none"


        if (e.value.match(usa)) {

            p[4].className = "d-none"


        }
        else {
            p[4].className = "d-block text-white bg-danger rounded-3 pb-2"

        }

    }


    else if (f.value == 3) {
        p[4].className = "d-none"


        if (e.value.match(uk)) {

            p[4].className = "d-none"


        }
        else {
            p[4].className = "d-block text-white bg-danger rounded-3 pb-2"

        }

    }


}

function add() {
    if (g.value.match(idr)) {

        p[5].className = "d-none"


    }
    else {
        p[5].className = "d-block text-white bg-danger rounded-3 pb-2"

    }
}

function paa() {
    if (h.value.match(pan)) {

        p[6].className = "d-none"


    }
    else {
        p[6].className = "d-block text-white bg-danger rounded-3 pb-2"

    }
}

function con(){
    if(f.value == 0){
        x="Not selected"
    }

    if(f.value == 1){
        x="INDIA"
    } if(f.value == 2){
        x="USA"
    } if(f.value == 3){
        x="UK"
    }
}





function ge() {
    if (k.checked) {
        p[7].className = "d-none"
        z="male"


    }

    else if (j.checked) {
        p[7].className = "d-block text-white bg-danger rounded-3 pb-2"
z="Other"

    }

    else if (l.checked) {
        p[7].className = "d-none"

z="Female"
    }
    else {
        p[7].className = "d-block text-white bg-danger rounded-3 pb-2"
z=0
    }
}


function sig() {
    if (a.value.match(letteronly)) {



        if (b.value.match(aile)) {

            if (c.value.match(assw)) {

                if (c.value.match(assw)) {


                    if (c.value == d.value) {
                        if (g.value.match(idr)) {
                            if (h.value.match(pan)) {



                                if (f.value == 1) {

                                    if (e.value.match(ind)) {
                                        if (k.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")
                                        }

                                        else if (j.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")

                                        }

                                        else if (l.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")

                                        }

                                    }
                                }



                                else if (f.value == 2) {


                                    if (e.value.match(usa)) {

                                        if (k.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")

                                        }

                                        else if (j.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")

                                        }

                                        else if (l.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")

                                        }



                                    }
                                }

                                if (f.value == 3) {


                                    if (e.value.match(uk)) {

                                        if (k.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")

                                        }

                                        else if (j.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")

                                        }

                                        else if (l.checked) {

                                            localStorage.setItem("Name",a.value)
                                            localStorage.setItem("Email",b.value)
                                            localStorage.setItem("Password",c.value)
                                            localStorage.setItem("Country",x)
                                            localStorage.setItem("Mobile Number",e.value)
                                            localStorage.setItem("Adhaar Number",g.value)
                                            localStorage.setItem("Pan card number",h.value)
                                            localStorage.setItem("gender",z)
                                            localStorage.setItem("Date of birth",m.value)
                                            open("Login.html","_self")

                                        }


                                    }
                                }














                            }




                        }
                    }

                }

            }








        }



    }


}

















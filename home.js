a = document.getElementById("from")
b = document.getElementById("to")
c = document.getElementById("busno")
d = document.getElementById("child")
e = document.getElementById("adult")
f = document.getElementById("senior")
g = document.getElementById("aadar")
h = document.getElementById("buty")
i = document.getElementById("marti")
j = document.getElementById("ale")
k = document.getElementById("date")
o = document.getElementById("lou")
p = document.getElementById("man")


letteronly = /^[a-zA-Z ]+$/
idr = /^[0-9]{12,12}$/
pan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
bus = /^[A-Z]{2}[0-9]{5}$/


l = new Date()

day = l.getDate()
mont = l.getMonth() + 1
yea = l.getFullYear()

today = (yea + "-0" + mont + "-" + day)

k.setAttribute("min", today)

o.innerHTML = ("log out " + (localStorage.getItem("Name")))




function lor() {
    open("Login.html", "_self")

}


function intr() {
    var p = document.getElementById("from").value
    var m = document.getElementById("to").value

    n = p;
    p = m;
    m = n;

    document.getElementById("from").value = p;
    document.getElementById("to").value = m;


}


function bnoo() {
    if (c.value.length > 7) {
        c.value = c.value.slice(0, 7)

    }
}


function adrin(){

    if (g.value.length > 12) {
        g.value = g.value.slice(0, 12)

    }

}


function ser() {
    if (a.value.match(letteronly)) {



        if (b.value.match(letteronly)) {
            if (c.value.match(bus)) {
                if (g.value.match(idr)) {

                    if (h.value == 1) {

                        if (i.value == 1) {

                            if (d.checked) {

                                alert("Search successfull")
                                j.classList.add("d-none")


                            }

                            else if (e.checked) {
                                alert("Search successfull")
                                j.classList.add("d-none")



                            }

                            else if (f.checked) {
                                alert("Search successfull")
                                j.classList.add("d-none")


                            }





                        }

                        else if (i.value == 2) {


                            if (d.checked) {
                                alert("Search successfull")
                                j.classList.add("d-none")



                            }

                            else if (e.checked) {
                                alert("Search successfull")
                                j.classList.add("d-none")



                            }

                            else if (f.checked) {
                                alert("Search successfull")
                                j.classList.add("d-none")



                            }


                        }

                        else if (i.value == 0) {

                            j.classList.remove("d-none")
                            j.innerHTML = ("Enter the martial status")

                        }



                    }
                    else if (h.value == 2) {

                        if (i.value == 1) {

                            if (d.checked) {

                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }




                            }

                            else if (e.checked) {

                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }

                            }

                            else if (f.checked) {

                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }


                            }


                        }

                        else if (i.value == 2) {

                            if (d.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }



                            }

                            else if (e.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }



                            }

                            else if (f.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }



                            }

                        }

                        else if (i.value == 0) {

                            j.classList.remove("d-none")
                            j.innerHTML = ("Enter the martial status")

                        }


                    }

                    else if (h.value == 3) {

                        if (i.value == 1) {

                            if (d.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }



                            }

                            else if (e.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }



                            }

                            else if (f.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }


                            }

                        }



                        else if (i.value == 2) {
                            if (d.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }


                            }

                            else if (e.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }


                            }

                            else if (f.checked) {

                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }

                            }



                            else if (i.value == 0) {

                                j.classList.remove("d-none")
                                j.innerHTML = ("Enter the martial status")

                            }

                        }

                    }

                    else if (h.value == 4) {

                        if (i.value == 1) {

                            if (d.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }


                            }

                            else if (e.checked) {

                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }

                            }

                            else if (f.checked) {

                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }

                            }

                        }

                        else if (i.value == 2) {

                            if (d.checked) {
                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }


                            }

                            else if (e.checked) {

                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }

                            }

                            else if (f.checked) {

                                if (k.value.length == 10) {
                                    alert("Search successfull")
                                    j.classList.add("d-none")
                                }

                            }

                        }

                        else if (i.value == 0) {

                            j.classList.remove("d-none")
                            j.innerHTML = ("Enter the martial status")

                        }


                    }
                    else if (h.value == 0) {
                        j.classList.remove("d-none")
                        j.innerHTML = ("Select the bus type")

                    }






                }

                else {
                    j.classList.remove("d-none")
                    j.innerHTML = ("Enter 12 digit aadhar number")
                }



            }

            else {
                j.classList.remove("d-none")
                j.innerHTML = ("Enter the correct bus code eg (AA12345)")
            }

        }
        else {
            j.classList.remove("d-none")
            j.innerHTML = ("Enter the to place")
        }


    }

    else {
        j.classList.remove("d-none")
        j.innerHTML = ("Enter the from place")
    }



}










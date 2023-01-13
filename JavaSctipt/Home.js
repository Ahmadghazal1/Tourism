function passvalues() {
    var firstname = document.getElementById("form1Example13").value;
 
    localStorage.setItem("textvalue", firstname);
    return false;
}

document.getElementById("login").innerHTML = "Welcome " + localStorage.getItem("textvalue");


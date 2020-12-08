function requestaccess() {
    var inp = document.getElementById("nrac").value;
    if (inp == "412d003e4977173f4cfe1e9cc6451b75") {
        window.open("nr.html");
    } else {
        window.alert("INVALID TOKEN")
    }
}
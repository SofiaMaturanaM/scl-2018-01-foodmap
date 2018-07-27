window.onload = timeout;

function timeout() {
    window.setTimeout("redirect()", 4000)
}

function redirect() {
    window.location = "principal.html"
    return
}
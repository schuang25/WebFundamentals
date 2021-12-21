function hide(element) {
    element.remove();
}

function ninjaLike(element) {
    alert("Ninja was liked");
}

function login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else if (element.innerText == "Logout") {
        element.innerText = "Login";
    }
}
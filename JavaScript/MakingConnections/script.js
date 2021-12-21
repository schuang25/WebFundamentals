var notifications = 2;
var connections = 334;

function changeName() {
    document.querySelector("#user_name").innerText = "James Doe";
}

function requestResponse(requestNum, response) {
    notifications--;
    if (response) {
        connections++;
        document.querySelector("#connection_count").innerText = connections;
    }
    document.querySelector("#request_" + requestNum).remove();
    document.querySelector("#request_count").innerText = notifications;
}
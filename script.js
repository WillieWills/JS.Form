function displayMessage(event) {
    event.preventDefault();
    let name = document.getElementById("username").value;
    let message = document.getElementById("Message");
    message.innerHTML = "Hello, " + name + "<br>" +  "Ready to explore, learn, and grow?<br>" +"Let’s get started!";
}

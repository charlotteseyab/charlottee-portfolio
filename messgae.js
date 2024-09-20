const messageForm = document.querySelector("#message")
console.log(messageForm);

messageForm.addEventListener("submit", function(event)
{
    event.preventDefault();
    const formData = new FormData(messageForm);
    const successMsg = document.querySelector("#msg");
    successMsg.textContent  = "Message Sent. Thank You";

}
)

// )const registerForm = document.querySelector("#register")
// console.log(registerForm)

// registerForm.addEventListener("submit", function(event)
// {
//     event.preventDefault();
//     const formData = new FormData(registerForm);
//     const successMsg = document.querySelector("#msg");
//     successMsg.textContent  = "registration successful";

// }

// )
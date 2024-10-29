// const text = "Hello, I'm Charlotte Seyab. A web developer.";
const messages = [
    "Welcome to my website!",
    "I am Charlotte Seyab.",
    "I am a web developer.",
    // "I love coding and creating websites."
];
let messageIndex = 0; // Track which message is being typed
let i = 0; // Track current character of the message
let isDeleting = false; // Track if the text is being deleted
const speed = 100; // Typing speed in milliseconds
const pauseBetween = 1500; // Pause before typing the next message (in ms)
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
    const currentMessage = messages[messageIndex]; // Get the current message

    if (!isDeleting) {
        // Typing the message
        typewriterElement.textContent += currentMessage.charAt(i);
        i++;

        if (i === currentMessage.length) {
            isDeleting = true; // Start deleting after the message is fully typed
            setTimeout(typeWriter, pauseBetween); // Pause before deleting
        } else {
            setTimeout(typeWriter, speed);
        }
    } else {
        // Deleting the message
        typewriterElement.textContent = currentMessage.substring(0, i - 1);
        i--;

        if (i === 0) {
            isDeleting = false; // Switch to typing mode for the next message
            messageIndex = (messageIndex + 1) % messages.length; // Move to the next message, loop back if at the end
        }

        setTimeout(typeWriter, speed);
    }
}

// Start the infinite typewriter effect
typeWriter();




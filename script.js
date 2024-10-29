document.getElementById("openFormBtn").onclick = function() {
    document.getElementById("popupForm").style.display = "block";
};

document.getElementById("closeFormBtn").onclick = function() {
    document.getElementById("popupForm").style.display = "none";
};

// Optional: Close the form if clicking outside it
window.onclick = function(event) {
    if (event.target == document.getElementById("popupForm")) {
        document.getElementById("popupForm").style.display = "none";
    }
};





// Get elements
const hireMeBtn = document.getElementById("hireMeBtn");
const hireMeForm = document.getElementById("hireMeForm");
const closeFormBtn = document.getElementById("closeFormBtn");

// Open the form when "Hire Me" button is clicked
hireMeBtn.onclick = function() {
    hireMeForm.style.display = "block";
}

// Close the form when "X" button is clicked
closeFormBtn.onclick = function() {
    hireMeForm.style.display = "none";
}

// Close the form when clicking outside of the form
window.onclick = function(event) {
    if (event.target == hireMeForm) {
        hireMeForm.style.display = "none";
    }
}

const boxes = document.querySelectorAll(".box");

// Function to handle activation logic
const activateBox = (box) => {
    boxes.forEach(b => b.classList.remove("active"));
    box.classList.add("active");
    box.querySelector('input[type="radio"]').checked = true;
};

boxes.forEach((box, index) => {
    const radio = box.querySelector('input[type="radio"]');

    // Click anywhere on the box selects radio
    box.addEventListener("click", () => {
        activateBox(box);
    });

    // Prevent double event when clicking exactly on radio
    radio.addEventListener("click", (e) => {
        e.stopPropagation();
        activateBox(box);
    });
});

// --- NEW CODE: Set initial state to match screenshot ---
// Find the second box (index 1) and activate it on load
if (boxes.length > 1) {
    activateBox(boxes[1]); 
}

// Since the total price displayed is $18.00 USD, we'll assume the 2-unit box
// is the intended default selection.


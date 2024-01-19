// Function to open the overlay
function openOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

// Function to close the overlay
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Open the overlay when the page loads (you can trigger it based on your requirements)
document.addEventListener('DOMContentLoaded', function() {
    openOverlay();
});

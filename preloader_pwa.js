// Create the overlay and loader elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

// Create the loader element
const loader = document.createElement('div');
loader.className = 'loader';
loader.style.cssText = `
    border: 3px solid #e0e0e0;
    border-top: 3px solid #0771c3;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: spin 0.4s linear infinite;
`;

// Append the loader to the overlay
overlay.appendChild(loader);

// Append the overlay to the body
document.body.appendChild(overlay);

// Add keyframes dynamically to ensure CSS animation works
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Function to hide the overlay
function hideOverlay() {
  overlay.style.display = 'none';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
  // Replace the following lines with the actual code that loads your external JS files
  // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
  setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);

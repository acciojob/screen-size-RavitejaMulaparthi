//your JS code here. If required.
// Function to update the window dimensions
function updateWindowDimensions() {
    // Get the window width and height
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Display the dimensions in the console (you can use these values as needed)
    console.log(`Window Width: ${windowWidth}px`);
    console.log(`Window Height: ${windowHeight}px`);
}

// Initial call to set dimensions when the page loads
updateWindowDimensions();

// Add an event listener for the window's resize event
window.addEventListener('resize', updateWindowDimensions);

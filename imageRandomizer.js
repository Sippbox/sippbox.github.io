// Array of image sources
const imageSources = ["sipp1.png", "sipp2.png", "sipp3.png"];

// Delay before the animation starts
const animationDelay = 500; // milliseconds

// Function to randomly select an image source
function getRandomImageSource() {
    const randomIndex = Math.floor(Math.random() * imageSources.length); 
    return imageSources[randomIndex];
}

// Function to update the src attribute of the image element
function updateRandomImage() {
    const imgElement = document.getElementById("sippimages");
    const randomImageSource = getRandomImageSource();

    imgElement.src = randomImageSource;
    imgElement.alt = "A random picture of Sippbox"; // Update alt attribute if needed

    // Trigger animation after a delay
    setTimeout(() => {
        imgElement.style.animationPlayState = "running";
    }, animationDelay);

    // Add an event listener for the 'animationend' event of the image element
    imgElement.addEventListener("animationend", () => {
    document.body.style.overflow = "auto"; // Restore scrolling
});

}

// Add an event listener for the 'load' event of the window
window.addEventListener("load", updateRandomImage);

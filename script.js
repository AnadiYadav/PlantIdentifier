// Get the file input element and image preview element
const imageUpload = document.getElementById('image-upload');
const uploadedImage = document.getElementById('uploaded-image');

// Add an event listener to the file input element
imageUpload.addEventListener('change', function () {
    const file = this.files[0];

    // Check if a file was selected
    if (file) {
        // Create a FileReader to read the selected image
        const reader = new FileReader();

        reader.onload = function (e) {
            // Set the source of the image preview to the selected image
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block'; // Display the image
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(file);
    }
});

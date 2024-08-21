// Initialize an empty array
const valuesArray = [];

// Function to handle button click
function handleButtonClick() {
    // Get the value from the input field
    const inputField = document.getElementById('valueInput');
    const value = inputField.value.trim();

    // Check if the input field is not empty
    if (value) {
        // Add the value to the array
        valuesArray.push(value);

        // Print the current state of the array to the console
        console.log('Current Array:', valuesArray);

        // Optionally clear the input field
        inputField.value = '';
    } else {
        console.log('Input field is empty. Please enter a value.');
    }
}

// Add event listener to the button
document.getElementById('addButton').addEventListener('click', handleButtonClick);

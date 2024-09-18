// Initialize the array
let numbers = [5, 3, 8, 1, 2];

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
    console.log("After adding ${number}:", array);
}

// Function to remove the first occurrence of a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
        console.log("After removing ${number}:", array);
    } else {
        console.log("${number} not found in the array.");
    }
}

// Function to sort the array in ascending order
function sortNumbers(array) {
    const sortedArray = [...array].sort((a, b) => a - b);
    console.log("After sorting:", sortedArray);
    return sortedArray;
}

// Function to calculate the sum of the numbers in the array
function calculateSum(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of the numbers:", sum);
    return sum;
}

// Function to calculate the average of the numbers in the array
function calculateAverage(array) {
    const sum = calculateSum(array);
    const average = sum / array.length;
    console.log("Average of the numbers:", average);
    return average;
}

// Main program execution
console.log("Initial array:", numbers);

// Add a number
addNumber(numbers, 4);

// Remove a number
removeNumber(numbers, 3);

// Sort the array
sortNumbers(numbers);

// Calculate the sum of the array
calculateSum(numbers);

// Calculate the average of the array
calculateAverage(numbers);
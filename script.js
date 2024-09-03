//your JS code here. If required.
// Function to return a promise that resolves with an array after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers
function filterOddNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = numbers.filter(number => number % 2 === 0);
            document.getElementById("output").innerText = evenNumbers.join(",");
            resolve(evenNumbers);
        }, 1000);
    });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = numbers.map(number => number * 2);
            document.getElementById("output").innerText = multipliedNumbers.join(",");
            resolve(multipliedNumbers);
        }, 2000);
    });
}

// Chaining the promises
getNumbers()
    .then(filterOddNumbers)
    .then(multiplyEvenNumbers)
    .catch(error => console.error("Error:", error));

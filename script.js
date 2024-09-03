//your JS code here. If required.
function getArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function filterEvenNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            document.getElementById('output').textContent = evenNumbers.join(', ');
            resolve(evenNumbers);
        }, 1000);
    });
}

function multiplyByTwo(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = array.map(num => num * 2);
            document.getElementById('output').textContent = multipliedNumbers.join(', ');
            resolve(multipliedNumbers);
        }, 2000);
    });
}

getArray()
    .then(filterEvenNumbers)
    .then(multiplyByTwo)
    .catch(error => console.error(error));


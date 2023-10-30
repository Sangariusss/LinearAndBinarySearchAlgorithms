// Функція лінійного пошуку
function linearSearch() {
    const input = document.getElementById("search-input").value;
    const array = [3, 8, 15, 20, 27, 32, 42, 55, 60, 71, 85, 90, 99];

    if (input.trim() === "" || isNaN(input)) {
        displayResult("Будь ласка, введіть число для пошуку.");
        return;
    }

    const searchValue = parseInt(input, 10);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue) {
            displayResult(`Елемент '${searchValue}' знайдено за індексом ${i} (лінійний пошук)`);
            return;
        }
    }

    displayResult(`Елемент '${searchValue}' не знайдено (лінійний пошук)`);
}

// Функція бінарного пошуку
function binarySearch() {
    const input = document.getElementById("search-input").value;
    const array = [3, 8, 15, 20, 27, 32, 42, 55, 60, 71, 85, 90, 99];

    if (input.trim() === "" || isNaN(input)) {
        displayResult("Будь ласка, введіть число для пошуку.");
        return;
    }

    const searchValue = parseInt(input, 10);
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === searchValue) {
            displayResult(`Елемент '${searchValue}' знайдено за індексом ${mid} (бінарний пошук)`);
            return;
        } else if (array[mid] < searchValue) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    displayResult(`Елемент '${searchValue}' не знайдено (бінарний пошук)`);
}

// Функція для відображення результату
function displayResult(message) {
    document.getElementById("result-text").textContent = message;
}

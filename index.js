// Code your solution here

function findMatching(array, name) {
    return array.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(array, letter) {
    return array.filter(driver => driver.slice(0, letter.length) === letter)
}

function matchName(array, match) {
    return array.filter(driver => driver.name === match);
}
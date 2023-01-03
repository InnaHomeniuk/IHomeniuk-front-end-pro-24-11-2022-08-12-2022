function randomElement(array) {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}
console.log(randomElement([1, -2, "muse", 4, false, 6, 7]));

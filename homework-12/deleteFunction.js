function removeElement(array, element) {
    let index = 0;
    for (var i = 0; i < array.length; i++) {
        if (array.includes(element)) {
            index = array.indexOf(element);
            array.splice(index, 1);
        }
    }
    return array;
}
console.log(removeElement([1, 2, 3, 4, 5, 6, 7], 5));

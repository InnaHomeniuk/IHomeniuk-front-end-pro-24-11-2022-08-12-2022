function removeElement(array, element) {
  if (array.includes(element)) {
    array.splice(array.indexOf(element), 1);
  }
  return array;
}
console.log(removeElement([1, 2, 3, 4, 5, 6, 7], 5));
function unical(array1, array2) {
    const uniqeArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (!(Array.isArray(array1) & Array.isArray(array2))) {
            console.log(`2елемент не масив ${uniqeArray}`);
            break;
        }
        const element = array1[i];
        if (array2.includes(element)) {
            continue;
        }
        uniqeArray.push((element));
    }

    for (let i = 0; i < array2.length; i++) {
        if (!(Array.isArray(array1) & Array.isArray(array2))) {
            console.log(`1елемент не масив ${uniqeArray}`);
            break;
        }
        const element2 = array2[i];
        if (array1.includes(element2)) {
            continue;
        }
        uniqeArray.push((element2));
    }
    return uniqeArray
}

console.log(unical(['Lviv', 'Dnipro', 'Ternopil', 'London'], ['Dnipro', 'Paris', 'York', 'Ternopil']));

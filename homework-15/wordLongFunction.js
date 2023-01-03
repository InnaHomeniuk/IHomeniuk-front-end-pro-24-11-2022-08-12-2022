function longestWord(myString) {
    if (!(typeof myString === 'string')) {
        console.log('аргумент не стрiчка');
        return ('');
    }
    let myStringSplit = myString.split(' ');
    let wordLength = 0;
    let longestWord;
    for (let i = 0; i < myStringSplit.length; i++) {
        if (myStringSplit[i].length > wordLength) {
            wordLength = myStringSplit[i].length;
            longestWord = myStringSplit[i];
        }
    }
    return longestWord;
};
console.log(longestWord('london is the capital of great britain its political economic and cultural centre'));
//console.log(longestWord([5, 5]));
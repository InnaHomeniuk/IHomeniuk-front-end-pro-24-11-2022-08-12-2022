const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = function generateKey(len) {
  let letter = '';
  for (let i = 0; i < len; i++) {
    const position = Math.floor(Math.random() * characters.length);
    letter += characters.substring(position, position - 1);
  }
  return letter;
}
console.log(key(16));

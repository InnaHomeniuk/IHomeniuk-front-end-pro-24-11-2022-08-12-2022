function sum(i=0){
  return{
    plus (a){
     i+=a;
      return this;
    },
    show(){
      return i
    }
  }
}
const total = sum();
console.log(total.plus(3).plus(5).plus(20).show())

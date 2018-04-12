
main();

function main(){
  let arr = [];

  for(let i = 5; i <= 10; ++i){
    arr[i] = i;
  }

  console.log(arr); // [ <5 empty items>, 5, 6, 7, 8, 9, 10 ]

  let count = 0;

  arr.forEach(val=>count++);
  
  console.log(count); // 6

  console.log(arr.length); // 11

  for(let i = 0; i < arr.length; ++i){
    console.log(arr[i]);
    // undefined
    // undefined
    // undefined
    // undefined
    // undefined
    // 5
    // 6
    // 7
    // 8
    // 9
    // 10
  }

  console.log('Why?'); // Why?

}
// for( var i=1; i<21; i++ ) {
//     if( (i%3) === 0 && (i%5) === 0 ) {
//         console.log( "FizzBuzz" );
//     }else if( (i%3) === 0 ) {
//         console.log( "Fizz" );
//     }else if( (i%5) === 0 ) {
//         console.log( "Buzz" );
//     }else{
//         console.log( i );
//     }
// }
let num = 5
if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0 ) {
    console.log("Buzz");
  } else if (num % 3 && 5 == 0){
    console.log("FizzBuzz");
  }else {
    console.log(num);
  }

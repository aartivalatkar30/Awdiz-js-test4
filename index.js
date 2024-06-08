

// question1 
// for( i =0;i<=20;i++)
// if(i%2==0){

// if(i!=10)
// console.log(i+"The even number is")

// }

// question2
// let n=10,
// i=1,
// fact = 1;

// while(i<=n){

//   fact = fact*i;
//   i++;
// }
// console.log("factorial num is"+fact);

// for( i =0;i<=n;i++){

// fact =  fact*i
// }

// console.log(fact)


// question3

// function sumofArray(arr){

//   let sum = 0;
//   for(let i=0;i<arr.length;i++){

//     if(arr[i]%2 === 0){

//       sum +=arr[i];
//     }
//   }
//   return sum;

// }
// const num =[1,7,9,4,4,5,6,2]
// sum= sumofArray(num);
// console.log(sum);


// question 5


// function divisibleby3and5 (num) {
//   let sum =0;
// for (let i=1;i<=1000;i++) {
//   if(i % 3 === 0 || i % 5 ===0 || i % 7 === 0){
//     sum+=i;
//     console.log(i);
// }
// }
//  return sum;

// }

// const num2 = divisibleby3and5();
// console.log(num2)


// question3


// function FibonacciNumber(num){

//   let fibo =[];
//   let i=0;
//   let a=0;
//   let b = 1;

//   while( i<num ){

//     fibo.push(a);

//     let next = a+b;
//     a=b;
//     b=next;
//     i++;
//     console.log(i)
//   }
// return FibonacciNumber;
// }

// const num1 = 10;
// const Fibonacciseries =  FibonacciNumber(num1);
  
// console.log(Fibonacciseries);



// question8

// function revString(str){

//   let revstr= '';

//   for(let i = str.length -1;i>=0;i--){

//     revstr +=str[i];
//   }
//   return revstr;
// }

// const string1 = "hello";
// const reversestring = revString(string1);
// console.log(string1);
// console.log(reversestring);
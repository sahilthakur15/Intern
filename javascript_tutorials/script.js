//while loop

// let i=1;

// while(i<=5){
//     console.log('Namaste JavaScript');
//     i++;
// }


// let i=1;
// while(i<6){
//     console.log(i);
//     i++;
// }

//Break in while loop

// let i=1;
// while(i<=5){
//     if(i==3)
//         break;
//     else
//     console.log(i)
//     i++;
// }

//continue statement 

// let i=1;
// while(i<5){
//     if(i==3){
//         i++;
//         continue;
//     }

//     else
//     console.log(i)
//     i++;
// }

//Do while loop
// let i=1;
// do{
//     console.log(i);
//     i++
// }while(i<6);

//Strings
// let name='Sahil'
// console.log(name);

// let name=`Sahil
// Thakur`;
// console.log(name);

// let firstname= new String('Kaise ha ap sab log');
// console.log(firstname);


// //Strings

// let op1='English ';
// let op2='Hindi';
// // let finalAns=op1+op2;
// // console.log(finalAns);
// // let ans=`${op1}${op2}`;
// // console.log(ans);

// //lenght fucntion
// console.log(op2.length);

// //uppercase
// console.log(op2.toUpperCase());

// //lowercase
// console.log(op2.toLowerCase());

//split
// let sentance ='Kaise ha ap sab log';
// let words= sentance.split(' ');
// console.log(words);

// //join
// console.log(words.join(' '))


//Functions
//function defination
// function sayMyName(){
//     console.log("Hi, Im Sahil")
// }
//  // function call
//  sayMyName()

// function printCounting(){
//     for(let i=1;i<100;i++){
//         console.log(i);
//     }
// }
// printCounting()


//passing parameter
// function printNum(num){
//     console.log('Printing Number:',num);
// }
// printNum(10)


// function getAverage(num1, num2){
//     let avg=(num1+num2)/2;
//     console.log("Average: ",avg);
// }
// getAverage(10,20)


//return functions
// function getSum(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }
// let ans=getSum(1,65,20);
// console.log('Printing Sum:', ans)


//expression 

// const getMultiplication = function(a,b){
//     return a*b;
// }
// let ans= getMultiplication(2,8);
// console.log(ans);


// const getSquare= function(num){
//     return num**2;
// }
// let ans= getSquare(5);
// console.log(ans)



//Arrow function

// const getExp= (x,y) => {
//     return x**y;
// }
// ans= getExp(2,4);
// console.log(ans)



//Array
// const fruits=['apple','banana','kiwi'];
// console.log(fruits);
// console.log(fruits[2]); accessing using index
// console.log(fruits[fruits.length -1]);  accessing last element of an array
// const index=1; accessing element using a variable
// console.log(fruits[index])

// Insertion in Array 
//insert at End

// fruits.push('grapes');
// fruits.push('orange');
// console.log(fruits);

//Insertion at Start
// fruits.unshift('papaya');
// console.log(fruits);

//Inserting at random index
// fruits.splice(1,0,'cherry');
// console.log(fruits);


//Filter Methods on Arrays


//Objects in Javascript

let obj={
    name: 'Sahil',
    age: 21,
    weight: 80,
    height: '5ft 10in',
    greet: function(){
        console.log('hello ji, kaise ho sare');
    }
};
console.log(obj)
obj.greet();

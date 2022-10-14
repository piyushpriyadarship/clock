 // 1. way to print in javascript
    // console.log("hello world");
    // alert("me");
    // document.write("this document write")  


    //2. javascript console API
    // console.log('who am i')
    // console.warn("i am dengoures")
    // console.error("this very big error")

// how to do multi line Comment
/*
how be what you 
want ever
 in your life
 */
    // 3. javascript variables
    // what are variables? -container to store data values
    var num1=33;
    var num2=77;
    // console.log(num1+num2);
    // 4. data types in javascript
    // number
    var numb1=988;
    var numb2=560.1;
    // String
    var str1="this is the string";
    var str2="this is the second string "
    // object
    var marks ={
        piyush:44,
        rahul:33,
        rohit:88
    }
    // console.log(marks);
    // boolleans
    var a=true;
    var b= false;
    // console.log(a, b)
    // var  und=undefined;
    var und;
    // console.log(und);
    
    var n=null;
    // console.log(n);
    /*
    at very high level,there are two types of types in javascript
    1.primtive data types:undifined,null,number,string,boolean,symbol
    2.reference data types:arrays and objects

    */
   var arr=[1,2,3,4,5,6]
//    console.log(arr)

// operator in javascript
// arthematic operators
var a= 100;
var b= 15;
// console.log("the value of a+b is",a+b);
// console.log("the value of a-b is",a-b);
// console.log("the value of a*b is",a*b);
// console.log("the value of a/b is",a/b);

// assiment operators
var c=b;
c+=2;
c-=2;//c=c-2;
//c*=2;
//c/=2;
// console.log(c);
// comparision operator
// var x=34;
// var y=56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

// logical operATOR

// logical and

// console.log(true  && true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)
// jab tak dono true na ho jaye yee true nhi hota

// logical or

// console.log(true  || true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)

// logical not

// console.log(!false);
// console.log(!true);

// function  in javascript
function  avg(a,b){
c=(a+b)/2;
return c;

}
// DRY= do not repeat yourself
c1=avg(4,6);
c2=avg(14,16);
// console.log(c1,c2)

// condition in javascript

var age =24
// single if statement
// if(age>18){
//     console.log('you are eligibal to have alocohal')
// }
// // if-else statement
// if(age>18){
//     console.log('you are eligibal to have alocohal')
// }
// else{
//     console.log('you are not eligibal to have alocohal')
// }

// if-else ladder
// if(age>32){
//     console.log('you can have sex')
// }
// else if(age>28){
//     console.log('you can have with two sex')
// }
// else if(age>26){
//     console.log('you can have absolutly sex')
// }
// else if(age>18){
//     console.log('18you cannot have sex')
// }
// else {
//     console.log('you can have sex')
// }
// console.log('end of the conversation')


var arr=[1,2,3,4,5,6,7,];
// console.log(arr)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

arr.forEach(function(element){
// console.log(element);
})

let j=0; 

let mydate = new Date();
// console.log(mydate);

// console.log(mydate.getFullYear())
function clicked(){
    console.log('the button is clicked');
}
// event in javaScript
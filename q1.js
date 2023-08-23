// function sum(a,b){
//     return (a+b);
// }
// var res = sum(5,6);
// console.log(res);



// function t1(cb){
//     console.log("x");
// }
// function cb(n){
//     setTimeout(2*1000);
// }
// var d = t1;
//


// app.get 
// -------------------------------------------------------------------
// var arr = [{
//     "name" : "hari",
//     "age"  : 23
// }   ,{
//     "name" : "max",
//     "age"  : 25
// }]
// var arr2 = arr.map((value) => {
//     if(value.age>=
        
        
        
        
        
//         25){
//         return{
//             name: value.name,
//             age: value.age,
//             isallowed: true
//         }
//     } else{
//         return{
//             name: value.name,
//             age: value.age,
//             isallowed: false
//         }
//     }
// })
// console.log(arr2);

// ----------------------------------------------------

const fs = require("fs");

function ca(err, data) {
    console.log(data);
}
fs.readFile("a.txt","utf-8",ca)

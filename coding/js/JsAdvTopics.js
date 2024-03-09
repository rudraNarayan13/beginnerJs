 // Arrays []
// // // // (),[],{} 
// // // //  what is shallow copy an deep copy ?
// // // // ans: shaloow coppy - copy with same reference point , means .. if any changes made to copied data original data will also be altered .just like heap memory . so array is a non-primitive data type .
// // // // Deep copies are oposite of shaloow copy

// // // // declaration of array 
// // // const arr =[23,56,98,32,94];
// // // const arr2 = new Array(1,2,3,4);
// // // console.log(typeof arr , typeof arr2)
// // // console.log(arr);
// // // // push method : add values to array
// // // arr.push(1997);
// // // console.log(arr);
// // // // POP method: Last value of array deleted
// // // arr.pop();
// // // console.log(arr);
// // // //shift : remove the 1st element of array
// // // // UNSHIFT add extra element at begining of array.
// // // //Question methods in arrays ... 
// // // // 1. includes : shows if any specified element present in array or not
// // // //2. IndexOf : shows the index of value . if any such value passed in argument that doesnt exist in array , it willl return (-1).
// // // // Join methods 
// // // // 1. .join : it add elements of an array to a variable in *STRING format*.
// // // //SLICE VS SPLICE 
// // // // SLICE : It doesnt manipulate original array
// // // // SPLICE :it eliminate the values from original array and show it .
/// // Example 
 // let arr = [1,2,3,4,5];
 // console.log(`A`, arr);
// console.log(`Slice`,arr.slice(0,3));
 // console.log(`B`, arr);
 // console.log(`Splice`,arr.splice(0,3));
 // console.log(`C` , arr);// original arr changed 
/// ====================================================
// // PUSH VS CONCAT VS SPREAD 
// // PUSH: return the same array and take any elemenmt as a single elemet .
// // CONCAT : Returns a new asrray by merging two arrays or two elements into a single array;
// // SPREAD : ... this is syntax of spread method . it is same as concat but easy to use and mordern .
// // example :
// let arr = [1,2,3,4];
// let arr2 = [ 5,6,7,8];
// // arr.push(arr2)
// // console.log(`Push `,arr);
// let arr3=[9,10];
// // console.log(`Concat`, arr2.concat(arr3));
// // let newDoc = ...arr , ...arr2 , ...arr3
// let newDoc= [...arr , ...arr2, ...arr3]
// console.log(`spread`,newDoc );
// more mnethods like .of , .from , etc are important
//===========================================================
// OBJECTS
// WAY OF Declaring object
//1.singleton : obj whcih made by using a constructor
//2. consturcter : (Object.create)
//3. litterals :

// obj gor key and value

// How to acccess data inside objects
// --------------------------------------
//1. dot notation [ obj.name , obj.surname etc]
//2. Sqaure notation { obj[name], obj[surname] etc} {THIS IS GOOD PRACTICE }
// symbols , strings key values are easy to get acess with square notation .
// (How to write symbol in obj ?
// var mySymbol = Symbol("hello");
// const obj ={
//     name:'rudra',
//     [mySymbol]:'hello'
// }
// console.log(obj[mySymbol]);//getting symbol value by []notaion
// alter the value of obj
// obj.name="chatGpt";
// console.log(obj.name);
// obj["name"]="bhalu";
// console.log(obj[`name`]);
// ASSIGN method ; it bind multiple objects and return a new modified object

// DESTRUCTERATION OF OBJECT
    // ==========================
// const obj ={
//     name:`rudra`,
//     class: `graduate`,
//     payScale: 25000

// }
// obj.name is equals to const{name:moNaaHela}=obj;
// console.log(obj.name);
// const {name:moNaaHela}=obj; // this is destructering of object
// console.log(moNaaHela); 
// --------------------------------
// FUNCTION
// ------------------------

// explist[()=>()] vs implisit 
// implisit when return keyword used .. and return keyword used (must be used , ow value wont be returend)when {curly breces} used .
// to return obj as value of function it is complsory to use (obj detail). eg: const abc = ()=> ({user:"rudra"})

//========================
//.****IMPORTANT****
//========================
// IIfE :: immidiately invoked function Expression 
// (1) Use to avoid pollution of global scope 
//(2) syntax : (Function (){})(execution); here we wrap the whole fn inside () to create a block scope , sothat outer var or global variables dont disturb the inside data.
// (3) It become important to add " ; " semicolon at the end of IIFE . cause it doesnt know where to stop execution . so code might get  crash .
// eg : 
// (function abc (parameter) {console.log(`hello `)})(argument);
// ( xyz=()=>console.log(`World`))();
// (pqr = (x)=> console.log(`hello mr ${x}`))(`rudra`);
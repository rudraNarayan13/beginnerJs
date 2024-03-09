//========= HIGH ORDER LOOPS ============[ for in , for each , map ]
//"iterating" is the technical term for looping.(applying a single thing on all element of array , like ading value to each item , doing mathematical operations )

// Array and object and strings are iterator .
 let arr = ["Hello","world", "hey", "Universe"];

// How forEach works?

const addTwo= (e)=>{
    // console.log(e+2)
}// declaring adding function
let a = [10,20,30,40]// declaring an array

arr.forEach( (item , index , array )=>{
    // console.log(item , index , array);
})
// a.forEach(addTwo);
// result : 12,22,32,42;
// here we are applying a function on each element of array .


// =======ForEach in arrays which contain objects ======

let mySec=[
    {
        name:"Rudra",
        height:"5ft",
        color: "black"
    },
    {
        name:"Sritam",
        height:"5.6ft",
        color: "white"
    } ,
    {
        name:"ram",
        height:"8ft",
        color: "black"
    } ,
    {
        name:"sam",
        height:"4.65ft",
        color: "grey"
    }
];
mySec.forEach(
    (item, index, array)=>{
        // console.log(`${item.name}'s color is ${item.color}`);
    }
)





// ---------------For of loops------------------//
//It is used to iterate values inside an array . Any formula applied is applied to every element of array .
for (const a of arr) {
    // console.log(a);
    let c = a.indexOf("Hello")
    // const b = a.toUpperCase();
    // console.log(c)
}
if (-1==true) {
    // console.log(`-1 is falsy `);
}else{
    // console.log(` -1 is not falsy`);
}

//  MAP //

// No duplicat evalue can be used , Always rermeber the chronology
 const area = new Map();
 area.set('IN', 'India');
//  console.log(area);
//  console.log(typeof(area));
// destructering of map i.e. Area , by which we can access both ket and value of map.
 for (const [x,y] of area) {
    // console.log(x);
    // console.log(y);
    
 }

//  ================== OBjects ===================

// To Iterate Objects we use For In loop

const mysub={
    "Rb": " Rubby",
    "Py": " python",
    "Js":"javaScript"
};
// console.log(mysub);



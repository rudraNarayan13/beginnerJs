// ==========Map,Filter,Reduce==========[most IMP]
let a = [ 1,2,3,4];

// a.splice(2)
// a.pop()
// console.log(a);
let newA=a.filter(
    (x)=> x>3 );
    // filter takes a callback fn in which we specify the condition to filter . those values who fulfill the condtions will be returned . 
// console.log(newA);// value greater than 3 will be returned . Unlike foreach loop , filter loop returns value . 

// deriving same result using forEach

let newNum=[]; // creating a blank array to store new data 
a.forEach(
    (item)=>{
        if(item>3){
            newNum.push(item);
        }
    }
)
// console.log(newNum);

let w= [30 ,36,25,556,5,8578,534];
// Give me all number divisible by 3 
let divisibleByThree=[]

function check (e){
    e.forEach(
        (item)=>{
            if(item%3!==0){
                console.log(`${item} is not divisible by 3`);
            }else{
                console.log(`${item} is divisible by 3`)
            }

        }
    )
};
// check(w);

// ===========MAP===============
// console.log(w);
// let y =w.map((e)=>e*10);
// y= w.map((e)=>e*10)
// .map((e)=>e*2)
// .filter((e)=>{return e>550})
// console.log(y);

// ====================REDUCE==================
//  Used to add array values and do totaling . Normally used in shopping cart totall. There are two things we get 1. accumulator 2. items to be add or store in acumulator . Initial value mention is must . 

// syntax : arr.reduce(cllBackFn(accumulator , items ){
//     new variable = accumulator+itemsValue
// }, initialValue);
const myMall=[
    {
        item:"shirt",
        price: 999
    },
    {
        item:"pant",
        price: 1999
    },
    {
        item:"T-shirt",
        price: 989
    },
    {
        item:"shoes",
        price: 499
    },
    {
        item:"jacket",
        price: 2999
    },
]
let totalValue = myMall.reduce(
    (acc,itemPrice)=>{
        // console.log(`acc:${acc} , itemPrice: ${itemPrice.price}`);
        return acc+itemPrice.price
    },0
);
// console.log(totalValue);


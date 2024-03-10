console.log(`JS is runnig`);
const body =document.body;
body.style.backgroundColor="#212121"
// console.log(body.children); 


// create function for color chgange 

// function colorChange (e){
//     e.addEventListener("click", ()=>{
//         body.style.backgroundColor=`${e.id}`
//     }
//     )
// }
// After creating for each this function not needed 


const mainDiv= document.createElement("div");// a new div created 
mainDiv.id="main";
// mainDiv.className="colorBox"
body.appendChild(mainDiv);
mainDiv.style.display="flex";
mainDiv.style.justifyContent="space-around" 
// console.log(mainDiv)





const divOne= document.createElement("div");// a new div created 
// console.log(divOne);
divOne.id="grey";
divOne.className="colorBox"
// divOne.style.width ="100px";divOne.style.height="100px";
// divOne.style.backgroundColor="grey";
// divOne.style.padding="10px"
// const in_text_divOne = document.createTextNode("Grey");
// divOne.appendChild(in_text_divOne);
mainDiv.appendChild(divOne);
// colorChange(divOne);
// divOne.appendChild(colorChange(divOne));

const divTwo= document.createElement("div");// a new div created 
// console.log(divTwo);
divTwo.id="Red";
divTwo.className="colorBox"
// divTwo.style.width ="100px";divTwo.style.height="100px";
// divTwo.style.backgroundColor="red";
// divTwo.style.padding="10px"
// const in_text_divTwo = document.createTextNode("RED");
// divTwo.appendChild(in_text_divTwo);
mainDiv.appendChild(divTwo);
// colorChange(divTwo);

const divThree= document.createElement("div");// a new div created 
// console.log(divThree);
divThree.id="white";
divThree.className="colorBox"
// divThree.style.width ="100px";divThree.style.height="100px";
// divThree.style.backgroundColor="white";
// divThree.style.padding="10px"
// const in_text_divThree = document.createTextNode("White");
// divThree.appendChild(in_text_divThree);
mainDiv.appendChild(divThree);
// colorChange(divThree);

const divFour= document.createElement("div");// a new div created 
// console.log(divFour);
divFour.id="blue";
divFour.className="colorBox"
// divFour.style.width ="100px";divFour.style.height="100px";
// divFour.style.backgroundColor="blue";
// divFour.style.padding="10px"
// const in_text_divFour = document.createTextNode("Blue");
// divFour.appendChild(in_text_divFour);
mainDiv.appendChild(divFour);
// colorChange(divFour);


// reset button 

const btn= document.createElement("button");
// btn.className=`colorBox`
btn.id=`#212121`
btn.appendChild(document.createTextNode(`Reset`));
mainDiv.appendChild(btn)
// btn.append(()=>{
//     btn.addEventListener("click",()=>{
//         body.style.backgroundColor="#212121"
//     })
// });
btn.addEventListener("click", ()=>{body.style.backgroundColor="#212121"})


// Applying ForEach to divs to apply function on all at once . To avoid writing and calling function manually .
const  boxes = document.querySelectorAll(".colorBox");
// console.log(boxes);
boxes.forEach(
    (e)=>{
        // console.log(e)
        e.addEventListener(`click`,()=>{
            body.style.backgroundColor=`${e.id}`
            
        })
    }
);

// applying css properties to all divs
boxes.forEach(
    (e)=>{
        e.style.width="100px";
        e.style.height="50px"
        e.style.border="2px solid black"
        e.style.borderRadius="50px"
        e.style.padding='25px'
        // e[3].style.color='white'
        e.style.backgroundColor=`${e.id}`
        e.appendChild( document.createTextNode(`${e.id}`));
    }
)
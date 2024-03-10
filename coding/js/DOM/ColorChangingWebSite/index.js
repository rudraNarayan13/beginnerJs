console.log(`JS is runnig`);
const body =document.body;
body.style.backgroundColor="#212121"


const mainDiv= document.createElement("div");// a new div created 
mainDiv.id="main";
body.appendChild(mainDiv);
mainDiv.style.display="flex";
mainDiv.style.justifyContent="space-around" 

const divOne= document.createElement("div");
divOne.id="grey";
divOne.className="colorBox"
mainDiv.appendChild(divOne);

const divTwo= document.createElement("div");
divTwo.id="Red";
divTwo.className="colorBox"
mainDiv.appendChild(divTwo);

const divThree= document.createElement("div");
divThree.id="white";
divThree.className="colorBox"
mainDiv.appendChild(divThree);

const divFour= document.createElement("div");
divFour.id="blue";
divFour.className="colorBox"
mainDiv.appendChild(divFour);


// reset button 

const btn= document.createElement("button");
btn.id=`#212121`
btn.appendChild(document.createTextNode(`Reset`));
mainDiv.appendChild(btn)
//adding event listner to reser btn
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
const form = document.querySelector(`form`)
// const calculate= document.querySelector(`button`)
// const weight= document.querySelector(`#weight`)
// const height = document.querySelector(`#height`)

// console.log(weight);
// console.log(height);

form.addEventListener(`submit`,
    (e)=>{
        e.preventDefault();// the default behaviour of form is instantlt get submitted .here we stop that 
        // console.log(e);
        const weight = parseInt(document.querySelector(`#weight`).value)// getting the value in box and convert it in to number from string by using parseint
        const height = parseInt(document.querySelector(`#height`).value)
        console.log(weight,height);
        const result= document.querySelector(`.result`)
// checking the value inputed
        if(height===" "||isNaN(height)|| height<0){
            result.innerHTML=`data invalid`
        }else if(weight===" "||isNaN(weight)|| weight<0){
            result.innerHTML=`data invalid`
        }else{
            let bmi = (weight / ((height*height)/10000)).toFixed(2);
            result.innerHTML=`Your BMI is ${bmi}`
            const msg= document.querySelector(`#msg`);
            
            if(bmi<18.6){
                msg.style.color="red"
                msg.innerHTML=`You are under weight`
            }else if(bmi>18.6 && bmi < 24.9){
                msg.innerHTML=`You are normal weight`
                msg.style.color="green"
            }else if(bmi>24.9){
                msg.innerHTML=`You are over weight`
                msg.style.color="red"
            }
        }
    }
)


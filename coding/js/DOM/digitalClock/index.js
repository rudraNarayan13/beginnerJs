const clock = document.querySelector(`#clock`)

setInterval(()=>{
    const time = new Date ();
    // console.log(time.toLocaleTimeString());
    clock.innerHTML=`${time.toLocaleTimeString()}`
},1000)

//setinterval is a feature that run a funtion in specified time interval . continously
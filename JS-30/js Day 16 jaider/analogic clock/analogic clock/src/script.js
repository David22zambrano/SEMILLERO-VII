//variables
let secondHand = document.querySelector('.second-hand');
let minsHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
//funciones
 function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) +90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    

   const mins = now.getMinutes();
   const minsDegrees = ((mins/60)*360) + ((seconds/60)*6) + 90;
   minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour/12)*360) + ((mins/60)*30)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 }
 //eventos-invocaciones
 setInterval(setDate)
 setDate()

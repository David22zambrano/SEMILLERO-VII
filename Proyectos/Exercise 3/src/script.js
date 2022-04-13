let nameContainer = document.getElementById("names")
let rContainer = document.getElementById("role")
let pContainer = document.getElementById("photo")
let qContainer = document.getElementById("quote")

let buttons = Array.from(document.getElementsByTagName("button"))
let counter = 0
let people = [
{
  name: "Tanya Sinclair",
    role: "UX-Enginner",
  photo:
    "./3 coding-bootcamp-testimonials-slider/images/image-tanya.jpg",
    quote: "“I’ve been interesting in coding for a while but never taken the jump until now. I couldn’t recommend this course enough. I’m now in the jop of my dreams an so excited about the future.”"
    
},
{
  name: "Jhon Tarkpor",
  role: "Junior front-end Developer",
  photo:
    "./3 coding-bootcamp-testimonials-slider/images/image-john.jpg",
    quote: " “If you want to lay  the best foundation possible I’d recommended taking this course. The depth the intructors go into is incredible. I now feel so confident about starting up as a proffesional developer.” "
},
{
  name: "James Chaves",
  role: "Aux Software Developer",
  photo:
    "./3 coding-bootcamp-testimonials-slider/images/image-james.jpg",
    quote: " “If you want to lay a foundation for English learning Combined with Software course. Look no further, English4Coders is here. I’m gettin bettet at coding and improving my English at th same time. ” "
}
];

console.log("script ")


nameContainer.innerText = people[0].name
rContainer.innerHTML = people[0].role
pContainer.src = people[0].photo
qContainer.innerText = people[0].quote



// -1 indica la ultima posi. del arreglo 
function swapInfo(btn){
counter >= people.length-1 && btn.id == 'next' ? counter = 0 : 
counter <= 0 && btn.id == "prev" ? counter = people.length-1 :
btn.id == "prev" ? counter--: counter++;
showInfo(counter)
console.log("swap Info ejecutada")
}

// Como coleccionar array de elementos para pasarles evento onclick a todos
function showInfo(counter){
nameContainer.innerText = `${people[counter].name}`
rContainer.innerText = `${people[counter].role}`
 pContainer.src = `${people[counter].photo}`
 qContainer.innerText = `${people[counter].quote}`
 
 console.log("show Info ejecutada")
} 

buttons.forEach((button)=>{
button.addEventListener("click", ()=>{
    swapInfo(button)
})
})

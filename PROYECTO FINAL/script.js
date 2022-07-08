



//variables
const main = document.querySelector('main')
const sectionSettings = document.getElementById('setting')
const footer = document.querySelector('footer')
const sectionStarGame = document.getElementById('startGameSection')

const rulesBtn = document.querySelector('#btnRules')

const modalScore = document.getElementById('poopScore')
const modalRules = document.getElementById('poop');

console.log(sectionStarGame)

//Validaciones ( Regex ) 
const expReg = {
    option: /^[\s\S]{4,16}$/,

  };
  const inputs = document.getElementsByTagName("input");
  let arrayInputs = Array.from(inputs);
  arrayInputs.forEach((input) => {
    input.addEventListener("keyup", validateForm);
  });
  function validateInput({ target }) {
    expReg[`${target.name}`].test(target.value)
      ? target.style.border = "2px solid green"
      : target.style.border = "2px solid red"
  }

//funciones

function display()
{

    const openPoopUp = [...document.querySelectorAll('#openModalBtn')]
    const btnNextSite = [...document.querySelectorAll('#nextPart')]


    openPoopUp.forEach(btn => 
    {
        btn.addEventListener('click',() =>
        {
            if(btn.classList.contains('openRules'))
            {       
                modalRules.style.display = "flex";
            }
            else if(btn.classList.contains('openScore'))
            {
                modalScore.style.display = "flex";
            }

        })    
    })

    btnNextSite.forEach(btn =>
        {
            btn.addEventListener('click',()=>
            {
                if (btn.classList.contains('toSettings')) 
                {
                    main.style.display = "none";
                    sectionSettings.style.display = "flex";
                    footer.style.display="flex";
                }
                else if(btn.classList.contains('toStartGame'))
                {
                    sectionSettings.style.display = "none";
                    footer.style.display="none";
                    sectionStarGame.style.display="flex";
                }
            })
        })

}
display()
const closePoopUp = [...document.querySelectorAll('#closePopup')]
function close()
{
    const closePoopUp = [...document.querySelectorAll('#closePopup')]

    closePoopUp.forEach(btn => 
    {
        btn.addEventListener('click',() =>
        {
            if(btn.classList.contains('closeRules') || btn.classList.contains('closeScore'))
            {       
                modalRules.style.display = "none";
                modalScore.style.display = "none";
            }
        })    
    })

}

close();
//eventos
function returnSettings(){

console.log("Me estrese");
//alv

}
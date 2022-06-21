import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const expReg = {
  descripcion: /^[\s\S]{5,25}$/
};
const pop = document.getElementById("pop");
const form = document.getElementById("form_Add_New");
const button_Open_Form = document.getElementById("form_Add_New");
const button_Close_Form = document.getElementById("close_Window_Add_New");
const submit = document.getElementById("button_Guardar");
const tbody = document.getElementById("tBody");
let items = JSON.parse(localStorage.getItem("items")) || [];
const table_Aside_Right = document.querySelector('#right');
const tableView = document.querySelector("table");
const button_add_new = document.getElementById("button_add_new");
const header_table = document.getElementById("impactos");
const buttons_Navegation = [...document.querySelectorAll('.buttons_nav')];
let edit = [];
let btnDelete = [];

open_Form = () => (pop.style.display = "flex");
close_Form = () => (pop.style.display = "none" );

buttons_Navegation.forEach(btn => btn.addEventListener('click',(e)=>{
  toggleHeader(e)
}))
const inputsForm = document.getElementsByTagName("label");
let arrayInputs = Array.from(inputsForm);
arrayInputs.forEach((label) => {
  label.addEventListener("keyup", validateForm);
});
function validateForm({target}) {
  expReg[`${target.name}`].test(target.value)
    ? (target.style.border = "2px solid green")
    : (target.style.border = "2px solid red");
}
function addItem(e) {
  e.preventDefault();
  const description = this.querySelector("[name=descripcion]").value;
  const valMin = this.querySelector("[name=valorMinimo]").value;
  const valMax = this.querySelector("[name=valorMaximo]").value;
  const item = {
    description,
    valMin,
    valMax,
  };
  items.push(item);
  localStorage.setItem(document.querySelector('h2').innerText.toLowerCase(),JSON.stringify(items));
  location.reload();
  validateForm();
}  



function toggleHeader({target}){
  let id = UUID.create(4)
  let rows = [...document.querySelectorAll(".trRow")];
 document.querySelector('h2').innerText = target.innerText;
 items = JSON.parse(localStorage.getItem(target.innerText.toLowerCase())) || [];
 tbody.innerHTML = items
    .map((item, i) => {
      return ` 
      <tr class="trRow" id=${id}>

            <td>${item.valMin}</td>
            <td>${item.description}</td>
            <td>${item.valMax}</td>
            <td>
            <button><img src="./src/img/editar.svg" alt="Edit" class="edit" id="${id}" onclick="editTable()"></button>
            <button><img src="./src/img/eliminar.svg" alt="Delete" class="delete" id="${id}" ></button>
            </td>
        </tr>
        `;
    })
    .join("");
  edit = [...document.querySelectorAll(".edit")];
  btnDelete = [...document.querySelectorAll(".delete")];
  btnDelete.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
      deleteRows(e);
      editTable(e)
    })}

  );
}
function deleteRows({target}) {
let datosActuales = document.querySelector('h2').innerText;
let datosRecibidos = [...JSON.parse(localStorage.getItem(`${datosActuales.toLowerCase()}`))] || [];
let nuevo_arreglo =  datosRecibidos.filter((datos)=> datos.item != datos.item);
  localStorage.setItem( `${datosActuales.toLowerCase()}`,JSON.stringify(nuevo_arreglo) );

};
function editTable({target}) {
  let datosRecibidos = [...JSON.parse(localStorage.getItem(`${datosActuales.toLowerCase()}`))];
  console.log(target.id)
  let nuevo_arreglo =  datosRecibidos.filter((datos)=> datos.item != datos.item);
  localStorage.setItem( `${datosActuales.toLowerCase()}`,JSON.stringify(nuevo_arreglo) );
 document.getElementById
  };


  
const createEl = (tagName, clase, texto, parent) => {
  let element = document.createElement(`${tagName}`);
  element.classList.add(`${clase}`);
  element.innerText = `${texto}`;
  parent.append(element);
};


pop.addEventListener("submit", addItem);

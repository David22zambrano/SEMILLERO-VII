
const poop = document.getElementById("poop");
const form = document.getElementById('form_Add_New');
const button_Open_Form = document.getElementById("form_Add_New");
const button_Close_Form = document.getElementById("close_Window_Add_New");
const submit = document.getElementById("button_Guardar");
const tbody = document.getElementById("tbody");
const items = JSON.parse(localStorage.getItem("items")) || [];

open_Form = () => (poop.style.display = "flex");
close_Form = () => (poop.style.display = "none");

mapElementList(items, tbody);

function addItem (e)  {
  e.preventDefault();
  const description = this.querySelector("[name=descripcion]").value;
  const valMin = this.querySelector("[name=valorMinimo]").value;
  const valMax = this.querySelector("[name=valorMaximo]").value;
  const item = {
    description,
    valMin,
    valMax
  };
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
  location.reload();
  let resetForm = document.querySelector("form").reset();
}

function mapElementList(elements, tbody)  {
    console.log(elements);
  tbody.innerHTML = elements.map((element, i) => {
      return `
        <tr>
            <td>${element.description}</td>
            <td>${element.valMin}</td>
            <td>${element.valMax}</td>
            <td>
                <img src="./img/pencil-edit.svg"">
                <img src="./img/trash-svgrepo-com (1).svg">
            </td>
        </tr>
        `;
    }).join("");
}
poop.addEventListener('submit', addItem);

const input = document.getElementById("input");
const submit = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];

submit.addEventListener("click", ()=>{
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
})
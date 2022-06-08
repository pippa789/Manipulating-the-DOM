const input = document.getElementById("input");
const submit = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];
const removebutton = getElementsByTagName("ul")[0]


submit.addEventListener("click", ()=>{
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    // list.appendChild(listItem);
    list.appendChild(listItem);
    input.value = "";
})


removeBtn.addEventListener('click', () => {
    let listItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];
    list.removeChild(listItem);
});
const listItem = document.getElementsByTagName("li");

for
const listItems = document.querySelectorAll("li:nth-child(even)");
for(let i=0; i < listItems.lenght; i++){
    listItems[i].style.color = "lightgreen";
}
// console.log(listItems);
// console.log(listItems.lenght);
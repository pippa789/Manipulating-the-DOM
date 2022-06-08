const input =document.getElementById('input');
const button = document.getElementById('submit');
 
input = document.addEventListener("click", ()=>(
    Image.src = input.value;
    input = "";
))
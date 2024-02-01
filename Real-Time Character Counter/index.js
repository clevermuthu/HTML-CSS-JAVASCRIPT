const textareaEl = document.querySelector("#text");
const totalEl = document.querySelector("#total");
const balance = document.querySelector("#balance");

textareaEl.addEventListener("keyup", ()=> {
   update(); 
});

function update(){
    totalEl.innerHTML = textareaEl.value.length;
    balance.innerHTML = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
update();
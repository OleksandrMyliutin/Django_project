const mainForm = document.getElementById("Mybtn");
let inputs = document.getElementsByTagName("input");
let inputName , inputTel, inputDate;

let span = document.getElementsByClassName("close")[0];

for (let i of inputs){
    if(i.getAttribute("tabindex") == "1") inputName = i;
    if(i.getAttribute("tabindex") == "2") inputTel = i;
    if(i.getAttribute("tabindex") == "3") inputDate = i;
}

mainForm.addEventListener("click", function (event) {
if(inputName.checkValidity() && /^([+][0-9]{12})$/.test(inputTel.value) && inputDate.checkValidity()) {
    document.getElementById("openModal").style.display= "block";
    document.getElementById("info-text").innerHTML = `Ваші дані записані, ви ${inputName.value}, дякуємо!`;
    span.addEventListener("click", function () {
        document.getElementById("openModal").style.display = "none";
    });
    inputName.value = "";
    inputTel.value = "";
    inputDate.value = "";
    event.preventDefault();
}
});

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
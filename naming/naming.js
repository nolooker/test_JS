const param = document.querySelector("p");

param.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Write Your Name.");
    param.textContent = `Your Name : ${name}`;
}
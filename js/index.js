const myButton = document.getElementById("btnClick");
const myUl = document.getElementById("contenedor");
const liReferences = [];
let contador = 1;
myButton.onclick = (event) => {
  const miLi =  document.createElement("li");
  miLi.innerText = `Elemento lista #${contador}`;
  liReferences.push(miLi);
  myUl.appendChild(miLi);
  contador++;
}
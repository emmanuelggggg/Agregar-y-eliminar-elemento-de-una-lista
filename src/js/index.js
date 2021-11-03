const myButton = document.getElementById("btnClick");
const myUl = document.getElementById("contenedor");
const liReferences = [];
let contador = 1;


myButton.onclick = (event) => {
  const miLi =  document.createElement("li");
  const x = document.createElement("button");
  miLi.innerText = `Elemento lista #${contador}`;
  x.innerText= `X`;

  x.onclick = (event) => {
    myUl.removeChild(miLi);
    liReferences.splice(liReferences.indexOf(mili),1);  
  }

  miLi.appendChild(x);
  liReferences.push(miLi);
  myUl.appendChild(miLi);
  contador++;
}

const titolo = document.getElementById("titolo");
console.log(titolo);

const paragrafi = document.getElementsByClassName("descrizione");
console.log(paragrafi);

const lista = document.querySelectorAll("li");
console.log(lista[1].textContent);

const tag = document.querySelector("li").parentElement.nodeName;
console.log(tag);

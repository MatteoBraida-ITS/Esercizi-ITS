const titolo = document.getElementById("titolo");
titolo.textContent = "Ciao!";

const paragrafo = document.querySelectorAll("p");
paragrafo[0].innerHTML = `<p class="descrizione" style="background-color: yellow; padding: 4px">Questa è una pagina di prova.</p>`;

titolo.style.backgroundColor = "lightblue";

const lista = document.querySelector("ul");
lista.dataset.versione = "2.0";

const items = document.querySelectorAll("li");
items[2].textContent = "Terzo (modificato)";

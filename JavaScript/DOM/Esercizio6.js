const acc = document.getElementsByClassName("accordion");

let i;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function (event) {
    if (event.target.classList.contains("accordion-header")) {
      let panel = event.target.nextElementSibling;

      let openPanels = document.querySelectorAll(".accordion-body.aperto");
      openPanels.forEach(funcion (openPanels)) {
        if (openPanels !== panel) {
            openPanels.classList.remove("aperto");
        }
      }
    }
  });
}

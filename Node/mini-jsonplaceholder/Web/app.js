document.getElementById("body-section").style.display = "none";

document.getElementById("method").addEventListener("change", (e) => {
  const metodiConBody = ["POST", "PUT", "PATCH"];
  const bodySection = document.getElementById("body-section");
  bodySection.style.display = metodiConBody.includes(e.target.value)
    ? "block"
    : "none";
});

document.getElementById("send-btn").addEventListener("click", async () => {
  const method = document.getElementById("method").value;
  const url = document.getElementById("url").value;
  const bodyText = document.getElementById("body").value;
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (["POST", "PUT", "PATCH"].includes(method) && bodyText.trim()) {
    options.body = bodyText;
  }

  const risposta = await fetch(url, options);
  const dati = await risposta.json();

  document.getElementById("status").textContent = risposta.status;
  document.getElementById("response-body").textContent = JSON.stringify(
    dati,
    null,
    2,
  );
});

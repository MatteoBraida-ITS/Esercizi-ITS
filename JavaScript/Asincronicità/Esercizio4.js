async function fetchSicuro() {
  const maxTentativi = 3;
  let successo = false;

  for (let i = 0; i < maxTentativi; i++) {
    const timeout = new Promise((_, reject) =>
      setTimeout(
        () =>
          reject(
            new Error(
              "Timeout: risposta non ricevuta entro 5 secondi, riprovo",
            ),
          ),
        5000,
      ),
    );

    try {
      const Response = await Promise.race([
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        timeout,
      ]);

      if (!Response.ok) {
        throw new Error("Dati non trovati");
      }

      const data = await Response.json();
      console.log(data);
      successo = true;
      break;
    } catch (error) {
      console.log(error);
    }
  }
  if (!successo) {
    console.log("Massimo numero di tentativi raggiunto!");
  }
}

fetchSicuro();

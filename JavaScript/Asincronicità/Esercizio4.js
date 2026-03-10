async function fetchSicuro(url) {
  const max_tentativi = 3;
  const attesa_ms = 1000;
  const timeout_ms = 5000;

  function conTimeout(promise, ms) {
    const timeout = new promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms),
    );
    return promise.race([promise, timeout]);
  }
}

function attendi(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let ultimoErrore;

for (let tentativo = 1; tentativo <= max_tentativi; tentativo++) {
  try {
    const response = await conTimeout(fetch(url), timeout_ms);

    if (!response.ok) {
      throw new error(`Errore HTTP: ${response.status}`);
    }
    const dati = await response.json();
    return dati;
  } catch (errore) {
    ultimoErrore = errore;
    console.warn(
      `Tentativo ${tentativo}/${max_tentativi} fallito:`,
      errore.message,
    );

    if (tentativo < max_tentativi) {
      await attendi(attesa_ms);
    }
  }
}

throw new Error(
  `Tutti i tentativi falliti. Ultimo errore: ${ultimoErrore.message}`,
);

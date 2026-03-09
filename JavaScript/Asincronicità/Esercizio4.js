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

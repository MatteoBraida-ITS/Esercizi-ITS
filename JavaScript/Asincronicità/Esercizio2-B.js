function generaCasuale(min, max) {
  return new Promise((resolve, reject) => {
    if (min >= max) {
      reject(new Error("min deve essere minore di max"));
    } else {
      const numero = Math.floor(Math.random() * (max - min + 1) + min);
      resolve(numero);
    }
  });
}

generaCasuale(1, 10)
  .then((num) => console.log("Numero:", num))
  .catch((err) => console.error(err.message));

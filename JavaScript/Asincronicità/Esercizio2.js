function aspetta(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

aspetta(2000).then(() => console.log("fatto!"));

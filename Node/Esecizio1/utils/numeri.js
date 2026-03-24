export function isPari(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

export function fattoriale(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fattoriale(n - 1);
  }
}

export function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

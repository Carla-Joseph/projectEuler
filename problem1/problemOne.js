function multiplesOf3And5(number) {
  let total = 0;

  for (i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

multiplesOf3And5(1000);
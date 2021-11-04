function getPrimesUpTo(num) {
  const composites = new Set()
  for (i=2; i<=Math.sqrt(num); i++) {
    if (i > 2 && i%2 === 0) continue;
    if (composites.has(i)) continue;
    for (j=2; i*j<=num; j++) {
      composites.add(i*j)
    }
  }

  const primes = []
  for (k=2; k<=num; k++) {
    if (!composites.has(k)) {
      primes.push(k)
    }
  }
  return primes
}



describe("largest prime factor", () => {
  test("getPrimesUpTo", () => {
    expect(getPrimesUpTo(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    expect(getPrimesUpTo(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
  });

  test("getFactors", () => {
    expect(getFactors(10)).toEqual([1,2,5,10])
    expect(getFactors(30)).toEqual([1,2,3,5,6,10,15,30])
  })
});

function markComposites(num, start=2, composites=new Set()) {
  if (start>=Math.sqrt(num)) return composites

  if (start > 2 && start%2 === 0)
  return markComposites(num, start+1, composites)

  if (composites.has(start))
  return markComposites(num, start+1, composites)
  
  for (j=2; start*j<=num; j++) {
    composites.add(start*j)
  }

  return markComposites(num, start+1, composites)
}

function getPrimesUpTo(num) {  
  
  const composites = markComposites(num)
  const primes = []
  for (k=2; k<=num; k++) {
    if (!composites.has(k)) {
      primes.push(k)
    }
  }
  return primes
}

function benchmark(num) {
  let i=0
  while (i < num) {
    i++
  }
}

function largestPrimeFactor(num) {
  const primes = getPrimesUpTo(num/2) 
  for (i=primes.length-1; i>=0; i--) {
    if (num % primes[i] === 0) return primes[i]
  }
  return 1
}


describe("largest prime factor", () => {
  test("getPrimesUpTo", () => {
    expect(getPrimesUpTo(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    expect(getPrimesUpTo(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
  });

  test("getLargestPrimeFactor", () => {
    expect(largestPrimeFactor(10)).toEqual(5)
    expect(largestPrimeFactor(14)).toEqual(7)
    expect(largestPrimeFactor(21)).toEqual(7)
    expect(largestPrimeFactor(121)).toEqual(11)
  })

  const TEST_VALUE = 600851475143
  test("sandbox", () => {
    console.time('lpf')
    // console.log(largestPrimeFactor(1000000))
    benchmark(10000000000)
    console.timeEnd('lpf')
  })
});

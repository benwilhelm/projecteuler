function answer(upperLimit) {
    let i=upperLimit;
    let sum = 0
    while (i-- > 0) {
        // console.log("evaluating", i)
        if (include(i)) {
            console.log(` ${sum} + ${i}`)
            sum += i
            console.log(` ${sum}`)
            
        }
    }

    return sum
}

function include(num) {
    return (num % 5 === 0) || (num % 3 === 0)
}

const UPPER_LIMIT = 1000

console.log(answer(UPPER_LIMIT))
const ip = [3, 2, 4, 2, 2, 1, 3, 5, 1, 3, 2, 4, 2, 2, 3, 2, 1, 3, 1]

// const r = [...new Set(ip)]
// console.log(r)

const r = ip.reduce((acc, i) => {
    if (!acc.includes(i)) {
        acc.push(i)
    }
    return acc
}, [])

console.log(r)

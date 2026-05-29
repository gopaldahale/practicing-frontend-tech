// Reduce Method - Flat Array
const ip = [1, [2, [3, [4]], 5]]

function reduceToFlatArray(oz) {
    return oz.reduce((acc, i) => {
        if (Array.isArray(i)) {
            return acc.concat(reduceToFlatArray(i))
        }
        else {
            return acc.concat(i)
        }
    }, [])
}

console.log(reduceToFlatArray(ip))

// For loop - Flat Array
flatarry = (arry) => {
    let newaarry = [];
    for (let i of arry) {
        if (Array.isArray(i)) {
            newaarry = newaarry.concat(flatarry(i))
        } else {
            newaarry.push(i)
        }
    }
    return newaarry
}

// console.log(flatarry(ip))
const capitalize = (string) => {

    let first = string.split('').slice(0, 1).join('').toUpperCase()
    let second = string.split('').slice(1).join('').toLowerCase()
    console.log(first.concat(second))
    return first.concat(second)
}

module.exports = capitalize
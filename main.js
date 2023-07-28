const mapFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i]
    }
    return arr
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`${arr1} squared equals ${mapFunc(arr1)}`)

const reduceFunc = (orders) => {
    let total = 0
    for (let i = 0; i < orders.length; i++) {
        total += orders[i].price
    }
    return total
}

let order1 = [{
    item: 'Cheeseburger',
    price: 8.99
}, {
    item: 'Hot Dog',
    price: 6.99
}, {
    item: 'French Fries',
    price: 3.99
}, {
    item: 'Milk Shake',
    price: 4.99
}]
console.log(`Total price: $${reduceFunc(order1)}`)

const filterFunc = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

let arr2 = [1, 2, 4, 7, 11, 16, 22, 29, 37, 46]
console.log(`Even numbers: ${filterFunc(arr2)}`)
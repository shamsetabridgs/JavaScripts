var persons = [
    {
        name: 'A',
        age : 24
    },
    {
        name: 'B',
        age : 19
    },
    {
        name: 'C',
        age : 26
    },
    {
        name: 'D',
        age : 21
    }
]


var arr2 = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7, -3, 0, -2, -6]

/** The every() method checks it that every element of the array is remain this condition....and it returns boolean value */
var isitEvery = arr2.every(function(value){
    return value > 0
})
console.log(isitEvery)


/** The some() method checks it that if only one element of the array remain in this condition.... then it will return true */
var isItSome = arr2.some(function(value){
    return value > 0
})
console.log(isItSome)

var allPersonEligible = persons.every(function(value){
    return value.age > 20
})
console.log('allPersonEligible: ' + allPersonEligible)

var atLeastOnePersonEligible = persons.some(function(value){
    return value.age > 20
})
console.log('atLeastOnePersonEligible: ' + atLeastOnePersonEligible)

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
console.log('Unsorted Array: ' + arr2)

arr2.sort(function(a, b){
    if(a > b)
        {
            return 1
        }
    else if(a < b)
        {
            return -1
        }
    else
        {
            return 0
        }
})
console.log('Sorted Array: '+arr2)


/** If we want to sort it in reverse order then the implementation will be */
arr2.sort(function(a, b){
    if(a > b)
        {
            return -1
        }
    else if(a < b)
        {
            return 1
        }
    else
        {
            return 0
        }
})
console.log('Reversely Sorted Array: ' + arr2)

/** So, If we want to sort the perosn object array by age of the persons then we have to implement it that */

persons.sort(function(a, b){
    if(a.age > b.age)
        {
            return 1
        }
    else if(a.age < b.age)
        {
            return -1
        }
    else
        {
            return 0
        }
})
console.log('Sorted by age: ')
console.log(persons)


/** If we want to sort person with their age in reverse order then the implementation will */
persons.sort(function(a, b){
    if(a.age > b.age)
        {
            return -1
        }
    else if(a.age < b.age)
        {
            return 1
        }
    else
        {
            return 0
        }
})
console.log('Reversely sorted by age of persons: ')
console.log(persons)

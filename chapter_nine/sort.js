
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

var arr = [4,8,1,6,7,9,4,3,5,6,8,2,1,7]


console.log('Unsorted Array: '+ arr)
console.log('Sorted Array: '+ arr.sort())

/** If we take here negative value in the array then it will not provide the exact output for this sort method. 
 * If we want to get exact output then we have to bring some change in the sort method....
 */

var arr2 = [4,8,1,6,7,9,4,3,5,6,8,2,1,7, -3,0,-2,-6]

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
console.log(arr2)

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
console.log(persons)
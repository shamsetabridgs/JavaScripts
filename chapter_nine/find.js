
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var findValue = arr.find(function(value){
//     return value === 9
// })
// console.log(findValue)

// var findIndex = arr.findIndex(function(value){
//     return value === 9
// })
// console.log(findIndex)

function findValue(arr, cb)
    {
        for (var i = 0; i < arr.length; i++)
            {
                if (cb(arr[i]))
                    {
                        return arr[i]
                    }
            }
    }

var value = findValue(arr, function(value){
    return value === 9
})
console.log('Value is : ' + value)



function findIndex(arr, cb)
    {
        for (var i = 0; i < arr.length; i++)
            {
                if (cb(arr[i]))
                    {
                        return i
                    }
            }
    }
var index = findIndex(arr, function(value){
    return value === 9
})
console.log('Index is : ' + index)

var arr = [1, 2, 3]

// var sqrArr = arr.map(function(value){
//     return value * value
// })

// console.log(arr)
// console.log(sqrArr)

// function myMap(arr)
//     {
//         var newArr = []
//         for(var i = 0; i < arr.length; i++)
//             {
//                 var temp = arr[i]
//                 newArr.push(temp)
//             }
//             return newArr
//     }

// console.log(myMap(arr))

function myMap(arr, cb)
    {
        var newArr = []
        for(var i = 0; i < arr.length; i++)
            {
                var temp = cb(arr[i])
                newArr.push(temp)
            }
            return newArr
    }

var sum = myMap(arr, function(value){
    return value + value
})

console.log(sum)


var mul = myMap(arr, function(value){
    return value * value
})
console.log(mul)

var triple = myMap(arr, function(value){
    return value * value * value
})
console.log(triple)

randomMul = myMap(arr, function(value){
    return value*Math.random()
})
console.log(randomMul)
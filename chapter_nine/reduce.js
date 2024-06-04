
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var sum = arr.reduce(function(prev, curr){
//     return prev + curr
// }, arr[0])
// console.log(sum)

function myReduce(arr, cb, acc)
    {
        for (var i = 0; i < arr.length; i++)
            {
                acc = cb(acc, arr[i])
            }
        return acc
    }

var sum = myReduce(arr, function(prev, curr){
    return prev + curr
}, arr[0])
console.log(sum)

var max = myReduce(arr, function(prev, curr){
    return Math.max(prev, curr)
}, arr[0])
console.log(max)

var min = myReduce(arr, function(prev, curr){
    return Math.min(prev, curr)
}, arr[0])
console.log(min)


var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9]

// var filterArr = arr.filter(function(value){
//     return value % 2 === 0
// })

// console.log(filterArr)

// function myArray(array)
//     {
//         var newArr = []
//         for(var i = 0; i < arr.length; i++)
//             {
//                 if(array[i] % 2 === 0)
//                     {
//                         newArr.push(array[i])
//                     }
//             }
//             return newArr
//     }


// var myarr = myArray(arr)
// console.log(myarr)

function myFilter(array, cb)
    {
        var newArr = []
        for(var i = 0; i < array.length; i++)
            {
                if (cb(array[i]))
                    {
                        newArr.push(array[i])
                    }
            }
        return newArr
    }

var ne = myFilter(arr, function(value){
    return value % 2 === 0
})

console.log(ne)

var odd = myFilter(arr, function(value){
    return value % 2 === 1
})
console.log(odd)
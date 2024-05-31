
// function add(a, b)
// {
//     var result = a + b
//     console.log(result)
// }

// add(30, 20)


var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

function sumOfArray(arr)
{
    var sum = 0
    for (var i = 0; i < arr.length; i++)
        {
            sum += arr[i];
        }
        console.log('Sum :' + sum)
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)


// function sayHi(n)
//     {
//         if(n === 0)
//             {
//                 return 
//             }
//         console.log('Hi, My name is Shams -E- Tabridgs Masum!!!. I am calling you')

//         sayHi(n-1)
//     }

// sayHi(5)

function sum(num)
    {
        if(num === 1)
            {
                return 1
            }
        return num + sum(num - 1)
    }


var sumOfFive = sum(5)
console.log('Sum is : ' + sumOfFive)


function fact(num)
    {
        if (num === 1)
            {
                return 1
            }
        return num * fact(num -1)
    }

var factOfFive = fact(5)
console.log('Factorial is : ' + factOfFive)


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumOfArray(array, arrayLength)
    {
        if (arrayLength === 0)
            {
                return 0
            }
        return array[arrayLength-1] + sumOfArray(array, (arrayLength-1))
    }

var sumArray = sumOfArray(arr, arr.length)
console.log('Sum of array is : ' + sumArray)
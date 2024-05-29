
var arr = [4, 5, 1, 6, 8, 9, 40]

// for(var i = 0; i<arr.length; i++){
//     // console.log(arr[i])
//     arr[i] = arr[i] + 2
// }

// console.log(arr)

// var sum = 0
// for(var i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

var sum = 0
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        //console.log(arr[i])
        sum += arr[i]
    }
}
console.log(sum)
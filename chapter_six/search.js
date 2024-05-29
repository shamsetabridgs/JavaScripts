// Search data....

var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27]

var found = 6
var isFound = false

for (var i = 0; i < arr.length; i++){
    if (arr[i] === found){
        console.log('Data found at index ' + i)
        isFound = true
        break;
    }
}

if (!isFound){
    console.log('Data is not founded!!!')
}
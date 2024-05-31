
// 'in' is a powerfull  keyword for iterating object.

var obj = {
    x: 40,
    y: 50,
    z: 60
}

// console.log('x' in obj)
// console.log('d' in obj)


for (var i in obj)
    {
        //console.log(i)
        console.log(i + ': ' + obj[i])
    }

var obj1 = {
    x: 10,
    y: 20
}

var obj2 = {
    x: 10,
    y: 20
}

console.log(obj1 === obj2)   // false ... Because it comapre the memory location of the objects....

if(obj1.x === obj2.x && obj1.y === obj2.y)
    {
        console.log(true)
    }


console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))

// Magic tricks to compare two objects....
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

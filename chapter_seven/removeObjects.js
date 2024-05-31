
var point = {
    x: 10,
    y: 20,
    z: 30
}

point.x = 45
point.a = 16

console.log(point)

point.a = undefined
console.log(point)

delete point.a
console.log(point)
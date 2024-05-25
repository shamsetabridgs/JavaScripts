
// &&  || !

// A && B
// true && true   = true
// true && false  = false
// false && true  = false
// false && false = false


// A || B
// true || true   = true
// true || false  = true
// false || true  = true
// false || false = false

var a = 30
var b = 20
var c = 40
var d = 30

if (a > b && c > d){
    console.log('A is greater than b and c is greater then d!!!')
}
else{
    console.log('At least one condition is false!!!')
}


if (a > b || c > d){
    console.log('A is greater than b or c is greater then d!!!')
}
else{
    console.log('Both condition are false!!!')
}


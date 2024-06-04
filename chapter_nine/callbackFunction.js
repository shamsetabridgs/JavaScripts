
function sample(a, b, cb)
    {
        var c = a + b
        var d = a - b

        var result = cb(c, d)
        return result
    }

function sum(a, b)
    {
        return a + b
    }

// var result = sample(5, 8, sum)
// console.log('Sum : '+result)
var sum = sample(5, 8, function(c, d)
                            {
                                return c + d
                            })
console.log('Sum : ' + sum)

//............ Subtract .............//
var sub = sample(5, 8, function(c, d)
                            {
                                return c -d
                            })
console.log('Subtract : '+sub)


//............ Multiply .............//
var mul = sample(5, 8, function(c, d)
                            {
                                return c * d
                            })
console.log('Multiply : ' + mul)


//............ Division ...............//
var div = sample(5, 8, function(c, d)
                            {
                                return c / d
                            })
console.log('Division : ' + div)
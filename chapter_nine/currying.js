
// function add(a, b, c)
//     {
//         return a + b + c;
//     }

// var adding =  add(2,3,4)
// console.log(adding)

function currying(a)
    {
        return function(b)
            {
                return function(c)
                    {
                        return a+ b +c
                    }
            }
    }

var result = currying(5)(10)(15)
console.log(result)
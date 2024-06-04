// 5. We can Pass Function as an Arguments
// 6. We can return Functions from Another Function

function add(a, b)
    {
        return a + b
    }


function manipulate(a, b, func)
    {
        var c = a + b
        var d = a - b

        // function multiply()
        //     {
        //         var m = func(a, b)
        //         return m*c*d
        //     }
            // return multiply

        return function()
            {
                var m = func(a, b)
                return m*c*d
            }
    }

var multiply = manipulate(3, 4, add)
console.log(multiply())
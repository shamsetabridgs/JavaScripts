
// First Look at Closure

/******* Run This Function in the console of any browser,
Then you will get information about closure and global objects ***** */

var b = 10

function a()
    {
        var x = 5

        return function()
            {
                console.log(x)
            }
    }

var abc = a()
console.dir(abc)

function test()
{
    for (var i = 0; i < arguments.length; i++)
        {
            console.log(arguments[i])
        }
}

test(3, 6, 9)


function addAll()
{
    var sum = 0
    for ( var i = 0; i < arguments.length; i++)
        {
            sum += arguments[i]
        }
        console.log('Sum : ' + sum)
}

addAll(1, 2, 3)
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
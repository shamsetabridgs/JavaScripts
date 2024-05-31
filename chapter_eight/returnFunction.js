

function sum()
{
    var sum = 0

    for (var i = 0; i < arguments.length; i++)
        {
            sum += arguments[i]
        }

    return sum
}

var x = sum(1, 2, 3)
console.log(x)


function person(name, email)
{
    return{
        name  : name,
        email : email
    }

    //........ If once return statement is called, it will not execute any code under the return statement........//
}

var masum = person('Shams -E- Tabridgs Masum', 'Masum15@cse.pstu.ac.bd / ssets333@gmail.com')
console.log(masum)
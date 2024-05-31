
// function someThing(greet, name)
// {
//     function sayHi()
//     {
//         console.log(greet, name)
//     }

//     sayHi()
// }

// someThing('Good Morning', 'Shams -E- Tabridgs Masum')


function something(greet, name)
{
    function getFirstName()
    {
        if(name)
            {
                return name.split(' ')[0]
            }
        else
        {
            return ' '
        }
    }

    var message = greet + ' ' + getFirstName()
    console.log(message)
}

something('Good morning', 'Shams -E- Tabridgs Masum')
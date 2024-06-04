// 

function bases(base)
    {
        function indexx(index)
            {
                var result = 1
                for(var i = 1; i <= index; i++)
                    {
                        result *= base
                    }
                return result
            }
        return indexx
    }

var ten = bases(10)
var two = ten(3)
console.log(typeof(ten))
console.log(two)
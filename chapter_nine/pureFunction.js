
//............What is Pure Function?....................//

//`* It returns the same result if given the same arguments`
//`* It does not cause any observable side effects`

function sqr(n)
{
    return n*n
}

console.log(sqr(4))
console.log(sqr(4))
console.log(sqr(4))

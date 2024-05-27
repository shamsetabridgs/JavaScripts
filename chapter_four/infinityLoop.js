// Infinity For Loop

// while(true){
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if(rand === 9){
//         console.log('Winner Winner You are Winner!!!')
//         break
//     }else{
//         console.log('You have got '+ rand)
//     }
// }

for(; ;) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 9){
        console.log('Winner Winner You are Winner')
        break
    }else{
        console.log('You have got ' + rand)
    }
}
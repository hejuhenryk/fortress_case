export const numberToPrice = num => { // function do not suport decimals or negative numers 
    num = num.toString().split('').reverse()
    let price = ''

    for (let i = num.length - 1; i >= 0; i--) {
        price += num[i]
        if ( num.length > 4) { // on picture 3050,- -> condition not needed if it was mistake 
            if(i%3 === 0 && i!==0){
                price += '.'
            }
        }
    }
    price = price + ',-'
    return price
}


export const numberToPhoneNumber = num => {
    let newNum = num.toString().split('')
    if (newNum.length === 8) {
        return `+47 ${newNum.splice(0, 3).join('')} ${newNum.splice(0, 2).join('')} ${newNum.splice(0, 3).join('')}`
    } else {
        throw new Error('Not veild norwegian number')
    }
}

// export const numberToPhoneNumber = num => {
//     num = num.toString().split('')
//     let phone = '+47 '

//     for (let i = 0; i < num.length; i++) {
//         phone += num[i]
//         if(i === 2 || i === 4 ) {
//             phone += ' '
//         }
//     }
//     return phone
// }
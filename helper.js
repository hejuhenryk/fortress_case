export const numberToPrice = num => {
    num = num.toString().split('').reverse()
    let ret = ''

    for (let i = num.length - 1; i >= 0; i--) {
        ret += num[i]
        if(i%3 === 0 && i!==0){
            ret += '.'
        }
    }
    ret = ret + ',-'
    return ret
}

export const numberToPhoneNumber = num => {
    num = num.toString().split('')
    let ret = '+47 '

    for (let i = 0; i < num.length; i++) {
        ret += num[i]
        if(i === 2 || i === 4 ) {
            ret += ' '
        }
    }
    return ret
}

export function fullTransfer(payer, reciever, amount) {
    const fixFees = 100
    const payerAmount = payer.amount
    const receiverAmount = reciever.amount

    if(amount >= 1000 && amount <= 5000){
        const tax = amount * 0.05
        const valueToSub = fixFees + tax + amount
        if(valueToSub > payerAmount ){
            throw new Error(`insufficient amount of payer: ${payerAmount}`)
        }else{
            payer.amount = payerAmount - valueToSub
            reciever.amount = receiverAmount + amount
            return[ payer, reciever ]
        }

    }else if(amount < 10000){
        const tax = amount * 0.10
        const valueToSub = fixFees + tax + amount
        if(valueToSub > payerAmount ){
            throw new Error(`insufficient amount of payer: ${payerAmount}`)
        }else{
            payer.amount = payerAmount - valueToSub
            reciever.amount = receiverAmount + amount
            return[ payer, reciever ]
        }
    } else{
        throw new Error(`Invalid value to transfer: ${amount}`)
    }
    
}
// export function transfer(payer, receiver, transferAmount) {
//     payer.balance = payer.balance - transferAmount
//     receiver.balance = receiver.balance + transferAmount
//     return [payer, receiver]
// }

/// REFACTORIN FUNCTION TO A BETTER FORM::

export function transfer (payer, receiver, transferAmount) {
    if(transferAmount >= 0){
        payer.balance = payer.balance - transferAmount
        receiver.balance = receiver.balance + transferAmount
        return [payer, receiver]
    } else {
        throw new Error(`Invalid value to transfer: ${transferAmount}`)
    }
}


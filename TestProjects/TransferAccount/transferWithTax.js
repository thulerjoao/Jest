export function transferWithTax(payer, receiver, transferAmount) {
        const tax = 100
        payer.balance = payer.balance - transferAmount - tax
        receiver.balance = receiver.balance + transferAmount
        return [payer, receiver]
}
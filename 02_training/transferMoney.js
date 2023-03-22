import { Account } from "./account";
import { getAccount } from "./account";
import { validateAmountLimit, validatePayerAmount} from "./validations"

export function transferMoney(payerId, receiverId, transferAmount) {

    validateAmountLimit(transferAmount)

    const tax = calculateTax(transferAmount)

    const payer = getAccount(payerId)
    const receiver = getAccount(receiverId)

    // const payer = getAccount(5) //to force error on call test on getAccount
    // const receiver = getAccount(3) //to force error on call test on getAccount

    validatePayerAmount(payer.balance, transferAmount, tax)

    const updatedPayerAccount = new Account(payerId, payer.balance - transferAmount - tax)
    const updatedReceiverAccount = new Account(receiverId, receiver.balance + transferAmount)

    return [updatedPayerAccount, updatedReceiverAccount]

}

//  FUNCTIONS OF THE CHALLENGE

function calculateTax(transferAmount) {
    if(transferAmount >= 1000 && transferAmount < 5000){
        const tax = transferAmount * 0.05 + 100;
        return tax;
    }else if(transferAmount < 10000){
        const tax = transferAmount * 0.10 + 100;
        return tax;
    }
}
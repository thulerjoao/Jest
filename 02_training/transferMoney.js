import { Account } from "./account";
import { getAccount } from "./account";

export function transferMoney(payerId, receiverId, transferAmount) {

    validateAmountLimit(transferAmount)

    const tax = calculateTax(transferAmount)

    const payer = getAccount(payerId)
    const receiver = getAccount(receiverId)

    validatePayerAmount(payer, transferAmount, tax)

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

function validateAmountLimit(transferAmount) {
  if (transferAmount < 1000 || transferAmount > 10000) {
      throw new Error(`Transfer amount is invalid: ${transferAmount}`);
  }
}

function validatePayerAmount(payer, transferAmount, tax) {
  if (payer.balance < transferAmount + tax) {
      throw new Error(`Insufficient funds`);
  }
}
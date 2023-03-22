export function validateAmountLimit(transferAmount) {
    if (transferAmount <= 1000 || transferAmount >= 10000) {
        throw new Error(`Transfer amount is invalid: ${transferAmount}`);
    }
  }
  
 export function validatePayerAmount(payer, transferAmount, tax) {
    if (payer.balance < transferAmount + tax) {
        throw new Error(`Insufficient funds`);
    }
}
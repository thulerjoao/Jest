import { User } from "../../Projects/Challenge_01/constructor";
import { fullTransfer } from "../../Projects/Challenge_01/fullTransfer";

describe("transfer",()=>{

    //test 01: 
    // test("it should return that the value must be bigger than 1000 or less than 10000",()=>{
    //     const payerAmount = new User(1, 2000)
    //     const receiverAmount = new User(2, 2000)

    //     const updatedAccounts = () =>{
    //         fullTransfer(payerAmount, receiverAmount, 500)
    //     }

    //     expect(updatedAccounts).toThrow(Error('Invalid value to transfer: 500'));
    // })


    // test 02
    // test("tax between 1000 and 5000 must be 5% and above, 10%",()=>{
    //         const payer = new User(1, 10000)
    //         const receiver = new User(2, 10000)

    //         const result = fullTransfer(payer, receiver, 2000) //6000(10%) => expect values as 3300 and 16000

    //         expect(result).toEqual(
    //             expect.arrayContaining([
    //                     expect.objectContaining({id:1, amount: 7800}),
    //                     expect.objectContaining({id:2, amount: 12000})
    //                 ])
    //             )


    // })
    

    // test 03
    test("money to be transfered + fees can`t be bigger than the amount of the payer",()=>{
        const payer = new User(1, 5000)
        const receiver = new User(2, 5000)

        const result = fullTransfer(payer, receiver, 5000)

        expect(result).toThrow(Error(`insufficient amount of payer: 5000`));


    })

})
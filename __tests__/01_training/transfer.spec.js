import { Account } from "../TestProjects/TransferAccount/account.js"
import { transfer } from "../TestProjects/TransferAccount/transfer.js"

// describe("tranfer amount of value between user`s accounts",()=>{
//     test("it should tranfer 500 bucks from an account with 1000 to another with 600", ()=>{
        
//         const payerAccount = new Account(1, 1000);
//         const receiverAccount = new Account(2, 600);

//         const result = transfer(payerAccount, receiverAccount, 500)

//         expect(result.length).toBe(2)
       

//         expect(result[0].id).toBe(1)
//         expect(result[1].id).toBe(2)
        
//         expect(result[0].balance).toBe(500)
//         expect(result[1].balance).toBe(1100)
        
//     })
// })  

/// REFACTORIN ASSERTS TO A BETTER CODE::

describe("transfer",()=>{
    test("it should tranfer 500 bucks from an account with 1000 to another with 600", ()=>{
        
        const payerAccount = new Account(1, 1000);
        const receiverAccount = new Account(2, 600);

        const result = transfer(payerAccount, receiverAccount, 500)

        expect(result).toHaveLength(2)
        
        
        expect(result).toEqual(
                    expect.arrayContaining([
                            expect.objectContaining({id:1, balance: 500}),
                            expect.objectContaining({id:2, balance: 1100})
                        ])
                    )
        })

    /// TEST TO SHOW IF AMOUNT IS NEGATIVE or NULL::
            
    // test('it should throw an error when transfer amount is negative', () => {
    //     const payerAccount = new Account(1, 1000);
    //     const receiverAccount = new Account(2, 1000);
    
    //     const updatedAccounts = () => {
    //         transfer(payerAccount, receiverAccount, -10);
    //     };
    
    //     expect(updatedAccounts).toThrow(Error('Invalid value to transfer: -10'));
    // });

    
    
}) 



 

    




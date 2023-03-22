import { transferMoney } from "../../02_training/transferMoney";
import * as accounts from "../../02_training/account";
import * as validations from "../../02_training/validations"

describe("Transfer Money", ()=>{
    test("it should calculate the total amount the payer will need to pay in a value between 1000 and 5000",()=>{
        
        const payerId = 1
        const receiverId = 2
        const transferAmount = 1000
        const payerInitialBalance = 10000
        const expectedTax = 150

        // creating a new mock:

        // accounts.getAccount = jest.fn() //create mock to getAccount(like cancel the function logic and putting new returns)
        //     .mockReturnValueOnce(new accounts.Account(payerId, 10000)) //if u call it once, this is gonna be de return
        //     .mockReturnValueOnce(new accounts.Account(receiverId, 0)) //if u call it again, this one is gonna be de new return


        //NEW METHOD WITH NEW MOCKS IMPLEMENTATION (SAME RESULT):

        accounts.getAccount = jest.fn()
            .mockImplementationOnce((id)=> new accounts.Account(id, 10000)) //by this way, u can use the prop that was sent to the function
            .mockImplementationOnce((id)=> new accounts.Account(id, 0))
            
        // OBS:: You can use the subs mockReturnValue and mockImplementation to make the mock always act

        // Validate function of limits of value::

        validations.validateAmountLimit = jest.fn()
        validations.validatePayerAmount = jest.fn()

        const updatedAcounts = transferMoney(payerId, receiverId, 1000)

        //expects for the functions (testing functions calls!)::
        expect(validations.validateAmountLimit).toHaveBeenCalledWith(transferAmount);
        expect(validations.validatePayerAmount).toHaveBeenCalledWith(payerInitialBalance, transferAmount, expectedTax);
        
        //OBS:: if no param, use toHaveBeenCalled()


        //test to verify if the function are been called with the correct userId::
        expect(accounts.getAccount).toHaveBeenCalledWith(payerId)
        expect(accounts.getAccount).toHaveBeenCalledWith(receiverId)


        expect(updatedAcounts).toHaveLength(2);

        expect(updatedAcounts).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ id:1 , balance: 8850 }),
                expect.objectContaining({ id:2 , balance: 1000 })
            ]
            )
        )
    })
})
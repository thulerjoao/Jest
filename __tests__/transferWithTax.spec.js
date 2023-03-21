
import { Account } from '../TestProjects/TransferAccount/account.js';
import { transferWithTax } from '../TestProjects/TransferAccount/transferWithTax.js';

describe('transferWithTax',()=>{
    test('it should transfer a certain amount charging a tax of 100 value', ()=>{

        const payerAccount = new Account(1, 2000);
        const receiverAccount = new Account(2, 1000);

        const result = transferWithTax(payerAccount, receiverAccount, 500)

        expect(result).toHaveLength(2)
        
        expect(result).toEqual(
                    expect.arrayContaining([
                            expect.objectContaining({id:1, balance: 1400}),
                            expect.objectContaining({id:2, balance: 1500})
                        ])
                    )

    })
})

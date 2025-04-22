import {calculaNovoSaldo as calculateNewBalance} from "./index";

describe("When i make a transaction", () => {
    test('Its a Deposit, the balance must increse', () => {
        const transaction = {
            transacao: 'Balance',
            valor: 50,
        }

        const newBalance = calculateNewBalance(transaction, 100);

        expect(newBalance).toBe(150);
    })

    test('Its a transfer, the balance must decresses', () => {
        const transaction = {
            transacao: 'transfer',
            valor: 50,
        }

        const newBalance = calculateNewBalance(transaction, 100);

        expect(newBalance).toBe(50);
    })
})

test("To be return the balance value updated with the income", () => {
    const calculateYield = jest.fn(balance => balance + balance * 0.005)

    const balance = 100;

    const newBalance = calculateYield(balance);

    expect(newBalance).toBe(100.5);
    expect(calculateYield).toBeCalled();
    expect(calculateYield).toHaveBeenCalledWith(balance);
})
test("To be return the balance value updated with the income", () => {
    const calculateYield = jest.fn(balance => balance + balance * 0.005)

    const balance = 100;

    const newBalance = calculateYield(balance);

    expect(newBalance).toBe(100.5);
    expect(calculateYield).toBeCalled();
    expect(calculateYield).toHaveBeenCalledWith(balance);
})
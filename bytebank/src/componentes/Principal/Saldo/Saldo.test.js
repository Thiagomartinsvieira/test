import { render, screen } from "@testing-library/react"
import Saldo from "./index"

describe('Component <Saldo />', () => {
    test('To be render the balance with monetary value', () => {
        render(<Saldo saldo={1000} />)

        const balance = screen.getByTestId('saldo')
        expect(balance).toHaveTextContent('R$ 1000')
    })
})
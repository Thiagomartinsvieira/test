import { render, screen } from '@testing-library/react'
import Formulario from './index'
import userEvent from '@testing-library/user-event'

describe('To render an input field', () => {
    test('renders the input field', () => {
        render(<Formulario />)
        const textField = screen.getByPlaceholderText('Digite um valor')
        expect(textField).toBeInTheDocument()
    })

    test('input field has type number', () => {
        render(<Formulario />)
        const textField = screen.getByPlaceholderText('Digite um valor')
        expect(textField).toHaveAttribute('type', 'number')
    })

    test('input field can be filled', async () => {
        render(<Formulario />)
        const textField = screen.getByPlaceholderText('Digite um valor')
        await userEvent.type(textField, '50') 
        expect(textField).toHaveValue(50)
    })
})

test("Must call an onSubmit event when clicking on performa transaction", () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao}/>)
    const button = screen.getByRole('button')

    userEvent.click(button)
    expect(realizarTransacao).toHaveBeenCalled(1);
})

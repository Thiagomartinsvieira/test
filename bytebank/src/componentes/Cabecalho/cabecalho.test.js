import { render, screen } from '@testing-library/react'
import Cabecalho from './index'

test('To be render the logged user', () => {
    render(<Cabecalho />)
    const userName = screen.getByText('Joana Fonseca Gomes')
    expect(userName).toBeInTheDocument();
})

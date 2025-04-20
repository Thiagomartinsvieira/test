import { render, screen } from '@testing-library/react'
import Transacoes from './index'
import estilos from '../Extrato.module.css'

test('To be render the same component with props updated', () => {
    const transacao = {
        transacao: 'Deposit',
        valor: 100,
    }
    const { rerender } = render(<Transacoes estilos={estilos} transacao={transacao} />)
    const transactionType = screen.getByTestId('tipoTransacao')
    const transationValue = screen.getByTestId('valorTransacao')

    expect(transactionType).toHaveTextContent('Deposit')
    expect(transationValue).toHaveTextContent('R$ 100')

    const newTransacao = {
        transacao: 'Transferência',
        valor: 50,
    }

    rerender(<Transacoes estilos={estilos} transacao={newTransacao} />)
    const newTransactionType = screen.getByTestId('tipoTransacao')
    const newTransationValue = screen.getByTestId('valorTransacao')

    expect(newTransactionType).toHaveTextContent('Transferência')
    expect(newTransationValue).toHaveTextContent('- R$ 50')
})

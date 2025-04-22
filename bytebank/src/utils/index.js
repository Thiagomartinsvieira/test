export const calculaNovoSaldo = (valores, saldo) => {
    if (valores.transacao === 'Balance') {
        return saldo + parseInt(valores.valor)
    } else {
        return saldo - parseInt(valores.valor)
    }
}

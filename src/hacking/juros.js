const calculate = (taxaAnual, valorBase, meses, valorDepositoMes = 0) => {
  const percentual = (taxaAnual / 12).toFixed(2)

  let valorOriginal = valorBase
  let totalJuros = 0
  let totalDepositos = 0
  while (meses > 0) {
    valorBase += valorDepositoMes
    const juros = (valorBase * percentual) / 100
    totalJuros += juros
    totalDepositos += valorDepositoMes
    valorBase = valorBase + juros
    console.log(`Juros: ${juros.toFixed(2)} - Valor: ${valorBase.toFixed(2)}\n`)
    meses -= 1
  }

  console.log('----Totais----')
  console.log(`Original: ${valorOriginal}`)
  console.log(`Depositos: ${totalDepositos}`)
  console.log(`Juros: ${totalJuros}`)
  console.log(`Valor: ${valorBase}`)
}

calculate(13, 10000, 36, 3000)

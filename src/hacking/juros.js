
const calculate = (taxaAnual, valorBase, meses) => {
  const percentual = (taxaAnual / 12).toFixed(2)

  let totalJuros = 0
  while (meses > 0) {
    const juros = (valorBase * percentual / 100)
    totalJuros += juros
    valorBase = valorBase + juros
    console.log(`Juros: ${juros.toFixed(2)} - Valor: ${valorBase.toFixed(2)}\n`)
    meses -= 1
  }

  console.log("----Totais----")
  console.log(`Juros: ${totalJuros}`)
  console.log(`Valor: ${valorBase}`)
}

calculate(2.66, 100000, 8)
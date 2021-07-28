const prompt = require("prompt-sync")({ sigint: true });

const getImcDescription = (imc) => {
  if (imc <= 18.5)
    return "Magreza"

  if (imc <= 24.9)
   return "Peso normal"

  if (imc <= 29.9)
    return "Sobrepeso"

  if (imc <= 34.9)
    return "Obesidade Grau 1"

  if (imc <= 39.9)
    return "Obseidade Grau 2"

  return "Obseidade Grau 3"
}

// ENTRADAS
const name = prompt("Informe o nome do usuário: ");
const idade = prompt("Informe a sua idade: ");
const peso = prompt("Informe o seu peso: ");
const altura = prompt("Informe a sua altura: ");

// PROCESSAMENTO
const imc = (peso / (altura**2))
const imcDesc = getImcDescription(imc)

for (let i = 0; i < 10; i++) {
  console.log(`valor: ${i}`)
}

// SAIDA
console.log()
console.log(`Olá ${name} você tem ${idade} anos.`);
console.log(`Sua altura é ${altura} e seu peso é ${peso}.`);
console.log(`Seu IMC é ${imc.toFixed(2)}, considerado ${imcDesc}.`);

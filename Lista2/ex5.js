let input = require("readline-sync")
num1 = input.questionInt("Qual é o seu primeiro numero :")
num2 = input.questionInt("Qual é o seu segundo numero ")
resp1 = num1 - num2
resp2 = resp1 + 10
console.log('O resultado é ' + resp2)


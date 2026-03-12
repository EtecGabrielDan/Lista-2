let input = require("readline-sync")
let num1 = input.questionInt("Digite o seu primeiro numero: ")
let num2 = input.questionInt("Digite o seu segundo numero: ")
let num3 = input.questionInt("Digite o seu terceiro numero: ")
let resp1 = num1 + 10 
let resp2 = num2 - 5
let resp3 = num3 * 2
console.log("o resultado das operações são: " + resp1 + " e " + resp2 + " e " + resp3)
function somarNumeros() {
    let number1 = document.getElementById('dadosEntrada1')
    let number2 = document.getElementById('dadosEntrada2')
    num1 = Number(number1.value)
    num2 = Number(number2.value)
    let res = document.getElementById('resultado')
    soma = num1 + num2
    if(num1 == num2){
        var sin = ' são iguais'
    } else{
        sin = ' não são iguais'
    }
    const maiorQ=(soma > 10) ? 'é maior que 10' : 'não é maior que 10'
    const menorQ = (soma < 20) ? 'menor que 20' : 'maior que 20'

    res.innerHTML = `A soma de ${num1} e ${num2} é igual á ${soma}, eles ${sin} e a soma dos números ${maiorQ} e ${menorQ}`
   
}
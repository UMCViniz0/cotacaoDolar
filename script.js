// CONECTAR A API PARA SIMULAÇÃO DO DOLAR NO-SQL
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(Resposta => {
    return Resposta.json()
}).then(Economia => {
    console.log(Economia)

    document.getElementById('Valor_Dolar').innerHTML = "R$ " + Economia.USDBRL.bid
})
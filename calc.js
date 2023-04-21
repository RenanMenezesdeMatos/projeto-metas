
let convertDate = function (dataInput){
    let dataInserida = new Date(dataInput)
    let day = String(dataInserida.getDate()).padStart(2, '0'); // No método padStart você define a quantidade de caracteres (neste caso defini 2 numeros máximos) e caso não tenha 2 qual numero será utilizado para preencher, neste caso inseri a string '0'
    let month = String(dataInserida.getMonth()).padStart(2, '0') + 1;
    let year = dataInserida.getFullYear();

    let fullDate = `${day}/${month}/${year}`

    return fullDate
}


let diferencaEmDias = function (data1, data2) {
    const umDia = 24 * 60 * 60 * 1000; // número de milissegundos em um dia
    return Math.round(Math.abs((data2 - data1) / umDia)); // retorna o número de dias
}
    
let totalValue = function (valor, dataFutura){
    let dataInserida = new Date(dataFutura)
    convertDate(dataInserida)
    let valorTotal = valor * (diferencaEmDias(new Date, dataFutura)/30)
    return valorTotal
}

function adicionarDias(data, dias) {
    var dataSum = new Date(convertDate(data));
    dataSum.setDate(dataSum.getDate() + dias);
    return dataSum;
  }
  

// captura de dados

let dateInput = document.getElementById('objective-time').value
let orcamento = document.getElementById('objective-cost').value

let daysOn = diferencaEmDias(new Date(), dateInput)
let dataFutura = adicionarDias(convertDate(dateInput), daysOn)
let totalObjetivo = totalValue(orcamento, dataFutura)


let textContent = `Você atingirá o seu objetivo, em ${dataFutura}, seu objetivo custará ${totalObjetivo}, se for persistente seu objetivo te custará ${totalObjetivo} ao mês.`


export {textContent}


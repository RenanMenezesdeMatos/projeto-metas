
let convertDate = function (dataInput){
    let dataInserida = new Date(dataInput)
    let day = dataInserida.getDate()+1;
    let month = dataInserida.getMonth()+1;
    let year = dataInserida.getFullYear();

    let fullDate = `${day}/${month}/${year}`

    return fullDate
}

let atualDay = function (){
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = `${ano}-${mes}-${dia}`
    return dataAtual
}


let diferencaEmDias = function (data2, data1) {

    const diffInMs = new Date(data1) - new Date (data2) 
    const diffInDays = Math.trunc(diffInMs / (1000*60*60*24))

    return diffInDays
}
  

let totalValue = function (valor, dataFutura){
    //let dataInserida = new Date(dataFutura)
    //convertDate(dataInserida)
    let valorTotal = valor * Math.trunc((diferencaEmDias(new Date(Date.now()), (dataFutura)))/30)
    return valorTotal
}


function adicionarDias(data, dias) {
    var dataSum = new Date(data)
    dataSum.setDate((dataSum.getDate() + dias +1));
    return convertDate(dataSum);
  }

// captura de dados


let dataInput = document.getElementById('objective-time').value
let orcamento = document.getElementById('objective-cost').value

let daysOn = diferencaEmDias(atualDay(), dataInput)
let dataFutura = adicionarDias(dataInput, daysOn)
let totalObjetivo = totalValue(orcamento, dataFutura)


let textContent = `Você atingirá o seu objetivo, em ${dataInput.toString()}, seu objetivo custará ${totalObjetivo}, se for persistente seu objetivo te custará ${totalObjetivo} ao mês.`


export {textContent}


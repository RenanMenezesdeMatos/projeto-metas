
let convertDate = function (dataInput){
    let dataInserida = new Date(dataInput)
    let day = dataInserida.getDate()+1;
    let month = dataInserida.getMonth()+1;
    let year = dataInserida.getFullYear();

    let fullDate = `${day}/${month}/${year}`

    return fullDate
}


let diferencaEmDias = function (data2, data1) {

    const diffInMs = new Date(data1) - new Date (data2) -1
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
    var dataSum = new Date(data);
    dataSum.setDate(dataSum.getDate() + dias +1);
    return dataSum;
  }
  

// captura de dados

let dateInput = document.getElementById('objective-time').value
let orcamento = document.getElementById('objective-cost').value

let daysOn = diferencaEmDias(new Date(Date.now()), dateInput)
let dataFutura = adicionarDias(dateInput, daysOn)
let totalObjetivo = totalValue(orcamento, dataFutura)


let textContent = `Você atingirá o seu objetivo, em ${dataFutura}, seu objetivo custará ${totalObjetivo}, se for persistente seu objetivo te custará ${totalObjetivo} ao mês.`


export {textContent}


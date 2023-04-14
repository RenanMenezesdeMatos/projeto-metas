let containerMainContent = document.getElementById('container-main-content')
let row = 0

// Capturando os valores dos Inputs//

let objectiveName = document.getElementById('objective-name')
let objectiveCost = document.getElementById('objective-cost')
let objectiveTime = document.getElementById('objective-time')
let objectiveSavings = document.getElementById('objective-savings')
let textContent = `Você atingiu o seu objetivo, em (inserir variável de data futura) seu objetivo custará (inserir variável de valor total), se for persistente seu objetivo te custará (Inserir variável do valor mensal) ao mês.`


// Fim da captura dos valores dos Inputs//

    let creatGoalsGeneral = function (id, className = 'goals'){
        let contentGoals = document.createElement('div')
        contentGoals.className = className
        contentGoals.id = id
        return contentGoals
    }

    let creatGoalsContent = function (titulo, idb, texto){
        let titleH2 = document.querySelector(`.goals-${row}>h2`)
        titleH2.innerText = titulo

        let bin2 = document.createElement('div')
        bin2.id = idb

        let paragraph = document.createElement('p')
        paragraph.innerHTML = texto

    }

    let creatBin = function (imagem){
        let creatImageBin = document.createElement('img')
        creatImageBin.src = imagem
        creatImageBin.alt = "Lixeira"
    }

    let creatAllElementsGoals = function (){
        row++
        containerMainContent.append(
            creatGoalsGeneral('goal-'+row)
        )

        document.getElementById('goal-'+row).append(
            creatGoalsContent(objectiveName.value,'bin',textContent)
        )

        objectiveName.value=''
    }

    export {creatGoalsGeneral, creatGoalsContent, creatBin, creatAllElementsGoals, containerMainContent,row,objectiveName, textContent}


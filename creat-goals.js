import {textContent} from "/calc.js"


let containerMainContent = document.getElementById('container-main-content')
let row = 0

// Capturando os valores dos Inputs//

let objectiveName = document.getElementById('objective-name')
let objectiveCost = document.getElementById('objective-cost')
let objectiveTime = document.getElementById('objective-time')
let objectiveSavings = document.getElementById('objective-savings')





// Fim da captura dos valores dos Inputs//

    let creatGoalsGeneral = function (id, className = 'goals'){
        let contentGoals = document.createElement('div')
        contentGoals.className = className
        contentGoals.id = id
        return contentGoals
    }

    let creatGoalsContent = function (id, classe =''){
        let creatDivForContent = document.createElement('div')
        creatDivForContent.id = id
        creatDivForContent.classList = classe
        return creatDivForContent
    }

    let creatH2 = function(classe='title-plan'){
        let creatH2Tag = document.createElement('h2')
        creatH2Tag.className = classe
        creatH2Tag.innerText = objectiveName.value
        return creatH2Tag

    }

    let creatTextArea = function(){
        //let textArea = document.createElement('p')
        //textArea.innerText = `Você atingiu o seu objetivo, em (inserir variável de data futura) seu objetivo custará (inserir variável de valor total), se for persistente seu objetivo te custará (Inserir variável do valor mensal) ao mês`



        return textContent
    }

    let creatBin = function (){
        let creatImageBin = document.createElement('img')
        creatImageBin.src = "image/Bin.png"
        creatImageBin.alt = "Lixeira"

        creatImageBin.addEventListener('click', function(e){
            let image = e.currentTarget
            let bin1 = image.parentNode
            let goal = bin1.parentNode

            goal.remove()

            let divCriada = document.getElementById(`goal-${row}`)
            
            let inicializacao = document.getElementById('initialing-program')

            if(divCriada === null ){
                inicializacao.classList.remove('initialing-program-none')
                inicializacao.classList.add('initialing-program')
            }

        })

        return creatImageBin

    }



    let creatAllElementsGoals = function (){

        row++
        containerMainContent.append(
            creatGoalsGeneral('goal-'+row)
        )

        let divCriada = document.getElementById(`goal-${row}`)

        let inicializacao = document.getElementById('initialing-program')

        divCriada.append(
            creatGoalsContent(`bin-${row}`, 'bin'),
            creatH2(),
            creatTextArea(),
        )

        let lixeira = document.getElementById(`bin-${row}`)

        lixeira.append(
            creatBin()
        )

        if(divCriada !== ''){
        inicializacao.classList.remove('initialing-program')
        inicializacao.classList.add('initialing-program-none')

        document.getElementById('content-forms-none').classList.add('content-forms-none')
        document.getElementById('content-forms-none').classList.remove('content-forms')

        } 

           
        objectiveName.value=''

    }

        

    export {creatGoalsGeneral, creatGoalsContent, creatBin, creatAllElementsGoals, containerMainContent,row,objectiveName, textContent, }


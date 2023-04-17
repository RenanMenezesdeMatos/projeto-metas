
let openPopUp = document.getElementById('content-forms-none')

let callPopUp = function (){
    openPopUp.classList.remove('content-forms-none')
    openPopUp.classList.add('content-forms')
}

let exitPopUp = function(){
    openPopUp.classList.remove('content-forms')
    openPopUp.classList.add('content-forms-none')
}

export {openPopUp, callPopUp, exitPopUp}
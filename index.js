import {openPopUp, callPopUp, exitPopUp} from "/management-popup.js"
import {creatAllElementsGoals,} from "/creat-goals.js"


let registerGoal = document.getElementById('container-register-goals')
let closePopUp = document.getElementById('closed-btn')
let creatGoal = document.getElementById('create-goal-btn')
let row = 0

registerGoal.addEventListener('click', callPopUp)
closePopUp.addEventListener('click', exitPopUp)
creatGoal.addEventListener('click', creatAllElementsGoals)




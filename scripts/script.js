console.log("Script loaded!");

const cake = document.getElementById("theThing")
const leftBlock = document.getElementById("leftBlock")
const rightBlock = document.getElementById("rightBlock")
let cakePose = 0

function moveTheThing(){
    if (cakePose === 0){
        rightBlock.appendChild(cake)
        cakePose = 1
    }
    else{
        leftBlock.appendChild(cake)
        cakePose = 0;
    }
}

const fancyText = document.getElementById("fancyText");

function styleTheText(){
    fancyText.style.fontFamily = 'Brush Script MT, Brush Script Std, cursive'
    fancyText.style.fontSize = '100px'
    fancyText.style.color = 'yellow'
}

const firstField = document.getElementById("firstField");
const secField = document.getElementById("secondField");
const thirdField = document.getElementById("thirdField");

const firstResult = document.getElementById("firstResult");
const secResult = document.getElementById("secondResult");
const thirdResult = document.getElementById("thirdResult");


function getFormValues(){

    let firstInput = firstField.value
    let secInput = secField.value
    let thirdInput = thirdField.checked

    firstResult.textContent = firstInput
    secResult.textContent = secInput
    thirdResult.textContent = thirdInput
}

const p = document.querySelectorAll("p").length
const h2 = document.querySelectorAll("H2").length
const tD = document.querySelectorAll("TD").length

const pResult = document.getElementById("countOfP")
const h2Result = document.getElementById("countOfH2")
const tDResult = document.getElementById("countOfTD")

function countTheStuff(){
    pResult.textContent = p
    h2Result.textContent = h2
    tDResult.textContent = tD
}

const rowsTable = document.getElementById("addRowsTable")
const tableBody = rowsTable.childNodes[1];

function addNewRow(){
    let lastRow = tableBody.children[tableBody.children.length - 1];
    let currentCount = lastRow.innerText;
    let newRow = rowsTable.insertRow();
    newRow.innerHTML = `<td>${+currentCount + 1}</td>`;
}

function yourBonusChallenge(){

}
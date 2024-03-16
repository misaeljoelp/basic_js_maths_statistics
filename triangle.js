const inputSide1 = document.querySelector('#side_value1')
const inputSide2 = document.querySelector('#side_value2')
const inputSideBase = document.querySelector('#side_base')
const inputHigh = document.querySelector('#high_value')
const imgTriangle = document.querySelector('.triangle')
const btnArea = document.querySelector('#area')
const btnPerimeter = document.querySelector('#perimeter')
const labelResult = document.querySelector('.text_result')

btnArea.addEventListener('click', findAreaTriangle)
function findAreaTriangle() {

    if(Number(inputSideBase.value) && Number(inputHigh.value)){
        labelResult.innerHTML  = `Area: ${( Number(inputSideBase.value) * Number(inputHigh.value)) / 2}` 
    } else{
        labelResult.innerHTML = 'Enter data'
    }
}

btnPerimeter.addEventListener('click', findPerimeterTriangle)
function findPerimeterTriangle() {
    if(Number(inputSide1.value) && Number(inputSide2.value) && Number(inputSideBase.value) ){
        labelResult.innerHTML = `Perimeter: ${Number(inputSide1.value) + Number(inputSide2.value) + Number(inputSideBase.value)}`
    } else{
        labelResult.innerHTML = 'Enter data'
    }
     
}
imgTriangle.addEventListener('click', generateDataTriangle)
function generateDataTriangle() {
    if(Number(inputSide1.value) && Number(inputSide2.value) && Number(inputSideBase.value) && Number(inputHigh.value) ){
        const perimeter = Number(inputSide1.value) + Number(inputSide2.value) + Number(inputSideBase.value)
        const area = labelResult.innerHTML  = ( Number(inputSideBase.value) * Number(inputHigh.value)) / 2
        labelResult.innerHTML = `Perimeter: ${perimeter}  and Area: ${area}`
    } else{
        labelResult.innerHTML = 'Enter data'
    }
}





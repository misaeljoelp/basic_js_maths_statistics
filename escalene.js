const inputSide1 = document.querySelector('#side_value1')
const inputSide2 = document.querySelector('#side_value2')
const inputSide3 = document.querySelector('#side_value3')

const btnHeight = document.querySelector('#height')

const labelResult = document.querySelector('.text_result')

btnHeight.addEventListener('click', findHeightEscaleneTriangle)
function findHeightEscaleneTriangle() {
    const result = calculateHeighEscaleneTriangle(Number(inputSide1.value), Number(inputSide2.value), Number(inputSide3.value))
    labelResult.innerHTML = result.heighTriangle
}

function calculateHeighEscaleneTriangle(sideOfTriangle1, sideOfTriangle2, sideOfTriangle3) {
    if(sideOfTriangle1 && sideOfTriangle2 && sideOfTriangle3){
        let S = (sideOfTriangle1 + sideOfTriangle2 + sideOfTriangle3) / 2
        let a = sideOfTriangle1
        let b = sideOfTriangle2
        let c = sideOfTriangle3
        if ((a !== b) && (a !== c) && (c !== b)) {
        return {
             heighTriangle : (2 / a * Math.sqrt(S * (S - a) * (S - b) * (S - c))).toFixed(2)
            }
        } else {
            labelResult.innerHTML = 'This isnt a escalene triangle'}
    } else{
        labelResult.innerHTML = 'Enter data'
    }

}



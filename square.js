const inputSide = document.querySelector('#side_value')
const imgSquare = document.querySelector('.square')
const btnArea = document.querySelector('#area')
const btnPerimeter = document.querySelector('#perimeter')
const labelResult = document.querySelector('.text_result')

btnArea.addEventListener('click', findAreaSquare)
function findAreaSquare() {
    //const result = Number(inputSide.value) * Number(inputSide.value)
    const result = calculationsSquare(Number(inputSide.value))
    labelResult.innerHTML = `Area: ${result.area}`
}

btnPerimeter.addEventListener('click', findPerimeterSquare)
function findPerimeterSquare() {
    //const result = Number(inputSide.value) * 4
    const result = calculationsSquare(Number(inputSide.value))
    labelResult.innerHTML = `Perimeter: ${result.perimeter}`
}

imgSquare.addEventListener('click', findDataSquare)
function findDataSquare() {
    const result = calculationsSquare(Number(inputSide.value))
    labelResult.innerHTML = `Perimeter: ${result.perimeter}  and Area: ${result.area}`
}

// Area and perimeter of a square
function calculationsSquare(sideOfSquare) {
    if (sideOfSquare){
        return {
            perimeter : sideOfSquare * 4,
            area : sideOfSquare * sideOfSquare
        }
    } else{
        labelResult.innerHTML = 'Enter data'
    }

}


const inputSide = document.querySelector('#side_value')
const imgCircle = document.querySelector('.circle')
const btnArea = document.querySelector('#area')
const btnPerimeter = document.querySelector('#perimeter')
const labelResult = document.querySelector('.text_result')

btnArea.addEventListener('click', findAreaSquare)
function findAreaSquare() {
    //const result = Number(inputSide.value) * Number(inputSide.value)
    const result = calculationsForCircle(Number(inputSide.value))
    labelResult.innerHTML = `Area: ${result.areaCircle}`
}

btnPerimeter.addEventListener('click', findPerimeterSquare)
function findPerimeterSquare() {
    //const result = Number(inputSide.value) * 4
    const result = calculationsForCircle(Number(inputSide.value))
    labelResult.innerHTML = `Perimeter: ${result.circumference}`
}
imgCircle.addEventListener('click', findDataCircle)
function findDataCircle() {
    const result = calculationsForCircle(Number(inputSide.value))
    labelResult.innerHTML = `Perimeter: ${result.circumference}  and Area: ${result.areaCircle}`
}


//Calculations of a circle
const PI = 3.1415
function calculationsForCircle(radioCircle) {
    if (radioCircle){
        return {
            circumference : (2 * radioCircle * PI).toFixed(2),
            areaCircle : (Math.pow(radioCircle,2) * Math.PI).toFixed(2)
        }
    } else{
        labelResult.innerHTML = 'Enter data'
    }

}

const inputSide1 = document.querySelector('#side_value1')
const inputSide2 = document.querySelector('#side_value2')

const btnHeight = document.querySelector('#height')

const labelResult = document.querySelector('.text_result')

btnHeight.addEventListener('click', findHeightTriangleIsosceles)
function findHeightTriangleIsosceles() {
    const result = calculateHeighIsoscelesTriangle(Number(inputSide1.value), Number(inputSide2.value))
    labelResult.innerHTML = result.heighTriangle
}

function calculateHeighIsoscelesTriangle(sideOfTriangle, baseTriangle) {
    if(sideOfTriangle && baseTriangle){
        if (sideOfTriangle == baseTriangle) {
            labelResult.innerHTML = 'This isnt a triangle isosceles'
        } else {
        return {
            heighTriangle : Math.sqrt(Math.pow(sideOfTriangle,2) - (Math.pow(baseTriangle,2) / 4)).toFixed(2)
            }
        }
    } else {
        labelResult.innerHTML = "Enter data"
    }

}




const noteStudent = document.querySelector('#notes')
const btnAddNote = document.querySelector('#btnAddNote')
const btnAverage = document.querySelector('#btnAverage')
const btnMedian = document.querySelector('#btnMedian')
const btnMode = document.querySelector('#btnMode')
const btnClean = document.querySelector('#btnClean')
const printNotes = document.querySelector('#printNotes')
const printResult = document.querySelector('#printResult')
let notesStudents = []
//Ingreso de notas de los alumnos
btnAddNote.addEventListener('click', addNotesToArray)
function addNotesToArray() {
    if (noteStudent.value !== '') {
        notesStudents.push(Number(noteStudent.value))
        printNotes.innerHTML = notesStudents.join(' - ')
        noteStudent.value = ''
    } else {
        printResult.innerHTML = `Please enter values`
    }

}
//Calculo del promedio

btnAverage.addEventListener('click', calculateAverage)
function calculateAverage() {
    if (notesStudents.length > 0) {
    const average1 = PlatziMath.calcularPromedio(notesStudents)
    printResult.innerHTML = `Average:  ${average1.toFixed(2)}`
} else {
    printResult.innerHTML = `Please enter values`
    }
}

//Calculo de la mediana
btnMedian.addEventListener('click', calculateMedian)
function calculateMedian() {
    if (notesStudents.length > 0) {
        let median = PlatziMath.calcularMediana(notesStudents)
        printResult.innerHTML = `Median:  ${median}`
        printNotes.innerHTML = notesStudents.join(' - ')
    } else {
    printResult.innerHTML = `Please enter values`
    }
}
//Calculo de la moda
btnMode.addEventListener('click', calculateMode)
function calculateMode() {
    if (notesStudents.length > 0) {
        let mode = PlatziMath.calcularModa(notesStudents)
        printResult.innerHTML = `Mode: ${mode}`
        printNotes.innerHTML = notesStudents.join(' - ')       
    } else {
        printResult.innerHTML = `Please enter values`
    }
}

//Borrar datos
btnClean.addEventListener('click', cleanData)
function cleanData() {
    notesStudents = []
    printResult.innerHTML = `Result:`
    printNotes.innerHTML = `Notes`
}
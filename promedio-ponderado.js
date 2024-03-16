const noteStudent = document.querySelector('#notes')
const creditStudent = document.querySelector('#credits')
const btnAddNote = document.querySelector('#btnAddNote')
const btnWeigthAverage = document.querySelector('#btnWeigtedAverage')
const printNotes = document.querySelector('#printNotes')
const printWeightedAverage = document.querySelector('#printWeightedAverage')
let notesStudents = []
btnAddNote.addEventListener('click', addNotesToArray)
function addNotesToArray() {
    if (!noteStudent.value =='' && !creditStudent.value=='') {
        notesStudents.push({note : Number(noteStudent.value), credit : Number(creditStudent.value)})
        printNotes.innerHTML +=  `{${noteStudent.value} , ${creditStudent.value}}`
        noteStudent.value = ''
        creditStudent.value = ''
        printWeightedAverage.innerHTML = "Weighted average"
    } else {
        printWeightedAverage.innerHTML = "Enter numbers in the textbox"
    }

}

btnWeigthAverage.addEventListener('click', calculateWeightedAverage)
function calculateWeightedAverage() {
    if (notesStudents.length > 0) {
            // Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con sus créditos.
        const notesWithCredit = notesStudents.map(function (noteObject) {
            return noteObject.note * noteObject.credit;
        });

        //sumar todas los resultados del array anterior
        const sumOfNotesWithCredit = notesWithCredit.reduce(
            function (sum = 0, newVal) {
                return sum + newVal;
            }
        );
        //Sumar todos los pesos (créditos)
        const credits = notesStudents.map(noteObject => noteObject.credit)
        console.log(credits)
        
        const sumOfCredits = credits.reduce(
            function(sum=0, newVal){
                return sum + newVal;
            }
        )
        printWeightedAverage.innerHTML = `The Weighted Average of the notes is: ${(sumOfNotesWithCredit / sumOfCredits).toFixed(2)}`
    } else {
        printWeightedAverage.innerHTML = 'Please enter values'
    }

}
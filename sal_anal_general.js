
//Interacción con el DOM, mostrar datos obtenidos y procesados en las funciones
const labelToName = document.querySelector('#labelName')
const labelToMedianSalary = document.querySelector('#labelMedianSalary')
const lblratios = document.querySelector('.lblratios')
const selectGeneral = document.getElementById('options');

//**************** */
  //ANALISIS GENERAL DE TODAS LAS PERSONAS Y EL TOP10:
//al seleccionar una opción de la lista desplegable se muestran las medianas por persona 
// de todas las personas de los trabajos que ha tenido cada persona, finalmente la media general.

selectGeneral.addEventListener('change', showGeneral) 
labelToName.innerHTML = `NAME<br>`
labelToMedianSalary.innerHTML = ` MEDIAN SALARY <br>`
function showGeneral(){
    let selectedOption = this.options[selectGeneral.selectedIndex];
    if(selectedOption.text ==='General'){
        const dataGeneral = generalMedian()
        if (dataGeneral['copyMedianPerson']) {
            labelToName.innerHTML = `NAME<br>`
            labelToMedianSalary.innerHTML = ` MEDIAN SALARY <br>` 
            for (let index = 0; index < dataGeneral['copyMedianPerson'].length; index++) {
                labelToName.innerHTML += `${dataGeneral['namesPerson'][index]} <br>`
                labelToMedianSalary.innerHTML += ` ${dataGeneral['copyMedianPerson'][index]} <br>`
            }

            lblratios.innerHTML = `MEDIAN GENERAL: ${dataGeneral['medianTotal'].toFixed(2)} `
        } 
  };

  if(selectedOption.text ==='Top10'){
    const dataTop10 = medianTop10()
    if (dataTop10['top10']) {
        labelToName.innerHTML = `NAME<br>`
        labelToMedianSalary.innerHTML = ` MEDIAN SALARY <br>`
        for (let index = 0; index < dataTop10['top10'].length; index++) {
            let nombreMediana = encontrarNombrePorMediana(dataTop10['top10'][index]) 
            labelToName.innerHTML += `${nombreMediana} <br>`
            labelToMedianSalary.innerHTML += `${dataTop10['top10'][index]}  <br>`
        }

        lblratios.innerHTML = `MEDIAN GENERAL: ${dataTop10['medianatop10'].toFixed(2)} `
    } 
  };
}

//Análisis general
function generalMedian(){
    const mediansFromAllPersons = salarios.map(persona => medianForPerson(persona.name))
    const copyMedianPerson = [...mediansFromAllPersons]
    const namesPerson = salarios.map(persona => persona.name)
    const medianTotal = PlatziMath.calcularMediana(mediansFromAllPersons)
   // return medianTotal  aqui finalizaba, lo de abajo es cambio
   return {namesPerson : namesPerson, medianTotal: medianTotal, mediansFromAllPersons:mediansFromAllPersons, copyMedianPerson : copyMedianPerson}
}

//función que a partir de su mediana general pueda encontrar el nombre
function encontrarNombrePorMediana(mediana) {
    for (let index = 0; index < salarios.length; index++) {
        const persona = salarios[index];
        if (mediana === medianForPerson(persona.name)){
            return persona.name
        }
    }
}


function medianTop10() {
    const mediansFromAllPersons = salarios.map(persona => medianForPerson(persona.name))
    const orderedMedians = PlatziMath.ordenarLista(mediansFromAllPersons)
    const quantity = mediansFromAllPersons.length / 10
    const top10 = []
    for (let i = 1; i < quantity + 1; i++) {
        const element = mediansFromAllPersons[mediansFromAllPersons.length - i];
        top10.push(element)
    }
    const medianatop10 = PlatziMath.calcularMediana(top10)
    return {top10: top10, medianatop10 : medianatop10}
}

function findPerson(personInSearch) {
    return salarios.find(persona => persona.name === personInSearch)
}
//Mediana del histórico de salarios de una persona
function medianForPerson(namePerson) {
    const works = findPerson(namePerson).trabajos
    const salaries = works.map(obj => obj.salario)
    const medianSalaries = PlatziMath.calcularMediana(salaries)
    return medianSalaries
}

 
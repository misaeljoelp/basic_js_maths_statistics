
//Análisis personal para cada empleado
//Dentro de salarios buscamos el registro que tenga el nombre deseado
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
function averageForPerson(namePerson) {
    const works = findPerson(namePerson).trabajos
    const salaries = works.map(obj => obj.salario)
    const averageSalaries = PlatziMath.calcularPromedio(salaries)
    return averageSalaries
}
function modeForPerson(namePerson) {
    const works = findPerson(namePerson).trabajos
    const salaries = works.map(obj => obj.salario)
    const modeSalaries = PlatziMath.calcularModa(salaries)
    return modeSalaries
}
//Proyección del sueldo de una persona
//Hay que encontrar el incremento porcentual anual de una persona.
//Encontrar la mediana de esos incrementos.
//Con la mediana proyectar su siguiente sueldo
function proyectionSalaryForPerson(namePerson) {
    const works = findPerson(namePerson).trabajos
    let percentegesIncreaseSalary = []
    for (let i = 1; i < works.length; i++) {
        const currentSalary = works[i].salario
        const pastSalary = works[i-1].salario
        const increase = currentSalary - pastSalary
        const percentegeIncrease = increase / pastSalary
        percentegesIncreaseSalary.push(percentegeIncrease)
       
    }
    const medianPercenteges = PlatziMath.calcularMediana(percentegesIncreaseSalary)
    const lastSalary = works[works.length -1].salario
    const newSalary = lastSalary * ( 1 + medianPercenteges)
    return newSalary
}
//Interacción con el DOM, mostrar datos obtenidos y procesados en las funciones

const labelToShowData = document.querySelector('#labelShowCabecera')
const labelToYear = document.querySelector('#labelYear')
const labelToCompany = document.querySelector('#labelCompany')
const labelToSalary = document.querySelector('#labelSalary')
const lblratios = document.querySelector('.lblratios')
const lblProyeccion = document.querySelector('.lblProyeccion')
const select = document.getElementById('names');

//ANALISIS POR PERSONA:
//al seleccionar un nombre de la lista desplegable se muestran los trabajos que ha tenido la persona
//sus estadisticas básicas y la proyección
select.addEventListener('change', filePerson) 
labelToYear.innerHTML = `YEAR <br>`
labelToCompany.innerHTML = `COMPANY<br>`
labelToSalary.innerHTML = ` SALARY <br>`
  function filePerson(){
    let selectedOption = this.options[select.selectedIndex];

    const person = findPerson(selectedOption.text)
    if (person) {
        labelToYear.innerHTML = `YEAR <br>`
        labelToCompany.innerHTML = `COMPANY<br>`
        labelToSalary.innerHTML = ` SALARY <br>`
        for (let index = 0; index < person.trabajos.length; index++) {
            labelToYear.innerHTML += `${person.trabajos[index].year} <br>`
            labelToCompany.innerHTML += `${person.trabajos[index].empresa} <br>`
            labelToSalary.innerHTML += ` ${person.trabajos[index].salario} <br>`
        }
        const medianSalariesPerson = medianForPerson(selectedOption.text)
        const averageSalariesPerson = averageForPerson(selectedOption.text)
        const modeSalariesPerson = modeForPerson(selectedOption.text)
        lblratios.innerHTML = `MEDIAN: ${medianSalariesPerson.toFixed(2)} <br>
                                AVERAGE: ${averageSalariesPerson.toFixed(2)}<br>
                                MODE: ${modeSalariesPerson}`
        const proyectionSalaryPerson = proyectionSalaryForPerson(selectedOption.text)
        lblProyeccion.innerHTML = `SALARY PROJECTION: ${proyectionSalaryPerson.toFixed(2)}`
    } else {
        labelToShowData.innerHTML = `${personName.value} doesn't exist`
    }
  };

 
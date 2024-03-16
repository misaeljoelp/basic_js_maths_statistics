//console.log(salarios)

//Análisis personal para Juanita
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

const labelToShowData = document.querySelector('#labelData')
const lblratios = document.querySelector('.lblratios')
const lblProyeccion = document.querySelector('.lblProyeccion')
const select = document.getElementById('names');
const selectGeneral = document.getElementById('options');

//ANALISIS POR PERSONA:
//al seleccionar un nombre de la lista desplegable se muestran los trabajos que ha tenido la persona
//sus estadisticas básicas y la proyección
select.addEventListener('change', filePerson) 
labelToShowData.innerHTML = `YEAR &nbsp    COMPANY    &nbsp &nbsp &nbsp &nbsp &nbsp    SALARY  <br>` 
  function filePerson(){
    let selectedOption = this.options[select.selectedIndex];

    const person = findPerson(selectedOption.text)
    if (person) {
        labelToShowData.innerHTML = `YEAR &nbsp    COMPANY    &nbsp &nbsp &nbsp &nbsp &nbsp    SALARY  <br>` 
        for (let index = 0; index < person.trabajos.length; index++) {
            labelToShowData.innerHTML += `${person.trabajos[index].year} | ${person.trabajos[index].empresa} | ${person.trabajos[index].salario} <br>`
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

  //**************** */
  //ANALISIS GENERAL DE TODAS LAS PERSONAS Y EL TOP10:
//al seleccionar una opción de la lista desplegable se muestran las medianas por persona 
// de todas las personas de los trabajos que ha tenido cada persona, finalmente la media general.

selectGeneral.addEventListener('change', showGeneral) 
labelToShowData.innerHTML = `MEDIAN SALARY &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp  NAME  <br>` 
function showGeneral(){
    let selectedOption = this.options[selectGeneral.selectedIndex];
    if(selectedOption.text ==='General'){
        const dataGeneral = generalMedian()
        if (dataGeneral['copyMedianPerson']) {
            labelToShowData.innerHTML = `MEDIAN SALARY &nbsp   &nbsp &nbsp &nbsp &nbsp &nbsp  NAME  <br>` 
            for (let index = 0; index < dataGeneral['copyMedianPerson'].length; index++) {
                labelToShowData.innerHTML += `${dataGeneral['copyMedianPerson'][index]} &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${dataGeneral['namesPerson'][index]}&nbsp &nbsp<br> `
            }

            lblratios.innerHTML = `MEDIAN GENERAL: ${dataGeneral['medianTotal'].toFixed(2)} `
            lblProyeccion.innerHTML = ``
        } 
  };
  if(selectedOption.text ==='Top10'){
    const dataTop10 = medianTop10()
    if (dataTop10['top10']) {
        labelToShowData.innerHTML = `MEDIAN SALARY &nbsp&nbsp NAME  <br>` 
        for (let index = 0; index < dataTop10['top10'].length; index++) {
            let nombreMediana = encontrarNombrePorMediana(dataTop10['top10'][index]) 
            labelToShowData.innerHTML += `${dataTop10['top10'][index]} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ${nombreMediana}&nbsp&nbsp<br> `
        }

        lblratios.innerHTML = `MEDIAN GENERAL: ${dataTop10['medianatop10'].toFixed(2)} `
        lblProyeccion.innerHTML = ``
    } 
  };
}


//Analisis empresarial, la información es arreglada con una especie de consulta, se
/* objetos empresas
{
    Industrias Mokepon: {
        2018:[salario, salario, salario ...]
        2019:[salario, salario, salario ...]
        2020:[salario, salario, salario ...]
        2021:[salario, salario, salario ...]
    },
    Industrias Mokepon: {},
    Industrias Mokepon: {},
    Industrias Mokepon: {},
    Industrias Mokepon: {},
} */
const empresas = {}
for ( persona of salarios) {
    for ( trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = []
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}


function medianCompanyYear(name, year) {
    if(!empresas[name]){
        console.warn('The company doesnt exist');
    } else if (!empresas[name][year]) {
        console.warn('The company didnt register salaries');
    } else {
        return PlatziMath.calcularMediana(empresas[name][year])
    }
}


function proyectionSalaryForCompany(nameCompany) {
    if(!empresas[nameCompany]){
        console.warn('The company doesnt exist');
    } else {
        const companyYears = Object.keys(empresas[nameCompany])
        const listMedianYears = companyYears.map((year)=>{
            return medianCompanyYear(nameCompany, year)
        })


        let percentegesIncreaseSalary = []
        for (let i = 1; i < listMedianYears.length; i++) {
            const currentSalary = listMedianYears[i]
            const pastSalary = listMedianYears[i-1]
            const increase = currentSalary - pastSalary
            const percentegeIncrease = increase / pastSalary
            percentegesIncreaseSalary.push(percentegeIncrease)
        
        }
        const medianPercenteges = PlatziMath.calcularMediana(percentegesIncreaseSalary)
        const lastMedianSalary = listMedianYears[listMedianYears.length -1]
        const newMedianSalary = lastMedianSalary * ( 1 + medianPercenteges)
        //return newMedianSalary   
        return {
            companyYears : companyYears,
            listMedianYears : listMedianYears,
            percentegesIncreaseSalary : percentegesIncreaseSalary,
            medianPercenteges : medianPercenteges,
            newMedianSalary : newMedianSalary
        }
    } 

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
/**************** */
//función que a partir de su mediana general pueda encontrar el nombre
function encontrarNombrePorMediana(mediana) {
    for (let index = 0; index < salarios.length; index++) {
        const persona = salarios[index];
        if (mediana === medianForPerson(persona.name)){
            return persona.name
        }
    }
}

/****************** */
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

/*     const top10 = ordenar.filter((item,index) => index < 10)
    const medianatop10 = PlatziMath.calcularMediana(top10) */
    return {top10: top10, medianatop10 : medianatop10}
}

//Interacción con el DOM, mostrar datos
const labelToShowData1 = document.querySelector('#labelData1')
const lblratios1 = document.querySelector('.labelratios')
const lblProyeccion1 = document.querySelector('.labelProyeccion')
const company = document.getElementById('enterpriseOPT');

company.addEventListener('change', showDataCompany) //al seleccionar un nombre de la lista desplegable
labelToShowData1.innerHTML = `YEAR &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp    SALARY  <br>` 
function showDataCompany() {
    let selectedOption = this.options[company.selectedIndex];

    const enterprise1 = Object.entries(empresas[selectedOption.text])
    const dataCompany = proyectionSalaryForCompany(selectedOption.text) 
    if (enterprise1) {
        labelToShowData1.innerHTML = `YEAR &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp    SALARY  <br>`  
        lblratios1.innerHTML = `YEAR &nbsp &nbsp &nbsp MEDIAN <br>`
        for (let index = 0; index < enterprise1.length; index++) {
            labelToShowData1.innerHTML += `${enterprise1[index]} <br>`
            lblratios1.innerHTML += `${dataCompany['companyYears'][index]} &nbsp &nbsp &nbsp${dataCompany['listMedianYears'][index]} <br>`
        }
        lblProyeccion1.innerHTML = `SALARY PROJECTION: ${dataCompany['newMedianSalary'].toFixed(2)}`

    } else {
        labelToShowData1.innerHTML = `${selectedOption.text} doesn't exist`
    }
}



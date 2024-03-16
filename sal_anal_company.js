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

//Interacción con el DOM, mostrar datos obtenidos y procesados en las funciones
const company = document.getElementById('enterpriseOPT');
const labelToYear = document.querySelector('#labelYear')
const labelToSalary = document.querySelector('#labelSalary')
const lblratios = document.querySelector('.lblratios')
const lblProyeccion = document.querySelector('.lblProyeccion')

//Análisis general

company.addEventListener('change', showDataCompany) //al seleccionar un nombre de la lista desplegable
labelToYear.innerHTML = `YEAR <br>`
labelToSalary.innerHTML = ` SALARY <br>`
function showDataCompany() {
    let selectedOption = this.options[company.selectedIndex];
    const enterprise1 = Object.entries(empresas[selectedOption.text])
    const dataCompany = proyectionSalaryForCompany(selectedOption.text) 
    if (enterprise1) {
        labelToYear.innerHTML = `YEAR <br>`
        labelToSalary.innerHTML = ` SALARY <br>`
        lblratios.innerHTML = `YEAR &nbsp &nbsp &nbsp MEDIAN <br>`
       let year = Object.keys(empresas[selectedOption.text])
       let salaries = Object.values(empresas[selectedOption.text])
        for (let index = 0; index < year.length; index++) {
            labelToYear.innerHTML += `${year[index]} <br>`
            labelToSalary.innerHTML += ` ${salaries[index]} <br>`
            lblratios.innerHTML += `${dataCompany['companyYears'][index]} &nbsp &nbsp &nbsp${dataCompany['listMedianYears'][index]} <br>`
        }
        lblProyeccion.innerHTML = `SALARY PROJECTION: ${dataCompany['newMedianSalary'].toFixed(2)}` 

    } else {
        labelToYear.innerHTML = `${selectedOption.text} doesn't exist`
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

function medianCompanyYear(name, year) {
    if(!empresas[name]){
        console.warn('The company doesnt exist');
    } else if (!empresas[name][year]) {
        console.warn('The company didnt register salaries');
    } else {
        return PlatziMath.calcularMediana(empresas[name][year])
    }
}



 
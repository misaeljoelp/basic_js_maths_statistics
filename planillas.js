/*Generar una planilla
Elaboro arrays similares a tablas enlazados por el dni de la persona
*/
/* En el array persona tiene lo basico, nombre y dni; */
const person = [];
person.push({dni: '12345678', name: 'ALIAGA SANTOS JUAN'});
person.push({dni: '12345675', name: 'ESPINOZA LUNA SOFIA'});
person.push({dni: '12345674', name: 'FERNANDEZ LUNA MAEL'});
person.push({dni: '12345676', name: 'DURAN SANTOS LAURA'});
person.push({dni: '12345673', name: 'ZARATE LUNA LUCIA'});
person.push({dni: '12345671', name: 'CASAS RODRIGUEZ ITALO'});
person.push({dni: '12345672', name: 'ROSALES MATOS ESMERALDA'});
person.push({dni: '12345677', name: 'CASTRO SANTOS MANUEL'});
person.push({dni: '12345679', name: 'BERNAOLA SANTOS PEDRO'});
person.push({dni: '12345670', name: 'SANTANA ROJAS HILARIO'});
/* En el array pension defino los datos que indican que tipo de pension tendra, 
si sera por una afp (fondo de pensiones privada) o por una onp(fondo de pensiones gubernamental). */
const pension = [];
pension.push({dni : '12345678', tipo : 'AFP', nameafp : 'HABITAT', comisionafp : 'FLUJO' });
pension.push({dni : '12345675', tipo : 'AFP', nameafp : 'HABITAT', comisionafp : 'MIXTO' });
pension.push({dni : '12345674', tipo : 'AFP', nameafp : 'PRIMA', comisionafp : 'FLUJO' });
pension.push({dni : '12345676', tipo : 'ONP', nameafp : '', comisionafp : '' });
pension.push({dni : '12345673', tipo : 'ONP', nameafp : '', comisionafp : '' });
pension.push({dni : '12345671', tipo : 'AFP', nameafp : 'INTEGRA', comisionafp : 'FLUJO' });
pension.push({dni : '12345672', tipo : 'AFP', nameafp : 'PROFUTURO', comisionafp : 'MIXTO' });
pension.push({dni : '12345677', tipo : 'AFP', nameafp : 'HABITAT', comisionafp : 'MIXTO' });
pension.push({dni : '12345679', tipo : 'AFP', nameafp : 'PRIMA', comisionafp : 'MIXTO' });
pension.push({dni : '12345670', tipo : 'AFP', nameafp : 'HABITAT', comisionafp : 'MIXTO' });
/* En el array incomes establezco todos los ingresos que tiene el trabajador en el mes: sueldo, beneficios
familiares, ingresos por comisiones u otro tipo de ingresos */
const incomes = [];
incomes.push({ dni : '12345678', salary : 5000, familyAllowances : 93, comision : 0, other : 0 });
incomes.push({ dni : '12345675', salary : 2000, familyAllowances : 93, comision : 0, other : 0 });
incomes.push({ dni : '12345674', salary : 1500, familyAllowances : 93, comision : 100, other : 0 });
incomes.push({ dni : '12345676', salary : 1500, familyAllowances : 0, comision : 100, other : 0 });
incomes.push({ dni : '12345673', salary : 1500, familyAllowances : 0, comision : 0, other : 0 });
incomes.push({ dni : '12345671', salary : 1300, familyAllowances : 93, comision : 0, other : 0 });
incomes.push({ dni : '12345672', salary : 1200, familyAllowances : 0, comision : 0, other : 0 });
incomes.push({ dni : '12345677', salary : 930, familyAllowances : 93, comision : 100, other : 0 });
incomes.push({ dni : '12345679', salary : 1000, familyAllowances : 0, comision : 0, other : 0 });
incomes.push({ dni : '12345670', salary : 500, familyAllowances : 0, comision : 0, other : 0 });
/*En el array nonaffected están los montos que no se ven afectados, como bono, quinta categoría y adelanto*/ 
const nonaffected = [];
nonaffected.push({dni : '12345678', prodbonus : 20, fifthcategory : 500, salaryadvance : 0});
nonaffected.push({dni : '12345675', prodbonus : 20, fifthcategory : 0, salaryadvance : 1000});
nonaffected.push({dni : '12345674', prodbonus : 20, fifthcategory : 0, salaryadvance : 0});
nonaffected.push({dni : '12345676', prodbonus : 0, fifthcategory : 0, salaryadvance : 0});
nonaffected.push({dni : '12345673', prodbonus : 0, fifthcategory : 0, salaryadvance : 0});
nonaffected.push({dni : '12345671', prodbonus : 0, fifthcategory : 0, salaryadvance : 0});
nonaffected.push({dni : '12345672', prodbonus : 0, fifthcategory : 0, salaryadvance : 0});
nonaffected.push({dni : '12345677', prodbonus : 0, fifthcategory : 0, salaryadvance : 0});
nonaffected.push({dni : '12345679', prodbonus : 20, fifthcategory : 0, salaryadvance : 0});
nonaffected.push({dni : '12345670', prodbonus : 0, fifthcategory : 0, salaryadvance : 0});
/* El array sistema de pensiones son los porcentajes de descuento definido por ley para las pensiones
y cambian dependiendo de el tipo de afp y el tipo de comision que el trabajador elige */
const sistemaPensiones = [
  {afpname : 'HABITAT', comisiontype : 'FLUJO', aporte : 0.10, seguro : 0.017, mantenimiento : 0.0147},
  {afpname : 'HABITAT', comisiontype : 'MIXTO', aporte : 0.10, seguro : 0.017, mantenimiento : 0.0125},
  {afpname : 'INTEGRA', comisiontype : 'FLUJO', aporte : 0.10, seguro : 0.017, mantenimiento : 0.0155},
  {afpname : 'INTEGRA', comisiontype : 'MIXTO', aporte : 0.10, seguro : 0.017, mantenimiento : 0.0078},
  {afpname : 'PRIMA', comisiontype : 'FLUJO', aporte : 0.10, seguro : 0.017, mantenimiento : 0.0160},
  {afpname : 'PRIMA', comisiontype : 'MIXTO', aporte : 0.10, seguro : 0.017, mantenimiento : 0.0125},
  {afpname : 'PROFUTURO', comisiontype : 'FLUJO', aporte : 0.10, seguro : 0.017, mantenimiento : 0.0169},
  {afpname : 'PROFUTURO', comisiontype : 'MIXTO', aporte : 0.10, seguro : 0.017, mantenimiento : 0.0120},
]

function getTotalPensionOnp(dni) {
  const totalIncome = getTotalIncomes(dni)//Total de ingresos: sueldo, comision familiar, comisiones y otros
    const totalPension = totalIncome * 0.13
     return totalPension 

}
function getTotalPensionAfp(dni) {
  const dataPension = pension.find(item => item.dni === dni)
    const totalIncome = getTotalIncomes(dni)//Total de ingresos: sueldo, comision familiar, comisiones y otros
    //conseguir los porcenajes de pension en AFP: aporte obligatorio, seguro y comision de mantenimiento 
    const percentageafp = sistemaPensiones.find((sistema)=>((sistema.afpname === dataPension.nameafp) && (sistema.comisiontype === dataPension.comisionafp)))
    const totalPercentage = percentageafp.aporte + percentageafp.seguro + percentageafp.mantenimiento
    const afpAporte = percentageafp.aporte * totalIncome
    const afpSeguros = percentageafp.seguro * totalIncome
    const afpComision = percentageafp.mantenimiento * totalIncome
    const totalPension = totalIncome * totalPercentage
    return {totalPension: totalPension, afpAporte: afpAporte, afpSeguros: afpSeguros, afpComision: afpComision}
  }

function getTotalIncomes(dni) {
  const sueldos = incomes.find(income => income.dni === dni)
  //Total de ingresos: sueldo, comision familiar, comisiones y otros
  const totalIncome = sueldos.salary + sueldos.familyAllowances + sueldos.comision + sueldos.other
  return totalIncome
}

//neto a pagar = total de ingresos - total pension + bono productividad - quinta - adelantos
function getTotalPay(dni, tipoPension) {
  const totalIncome = getTotalIncomes(dni)
  let totalPension = 0
  if (tipoPension === 'AFP'){
    const temporal = getTotalPensionAfp(dni)
    totalPension = temporal.totalPension
  } else {
    totalPension = getTotalPensionOnp(dni)
  }
  
  const dataNonaffected = nonaffected.find(item => item.dni === dni)
  const bonus = dataNonaffected.prodbonus
  const fifthcategory = dataNonaffected.fifthcategory
  const advance = dataNonaffected.salaryadvance
  const totalPay = totalIncome -totalPension + bonus - fifthcategory -advance
  let essalud = 0
  if (totalIncome <= 930){
    essalud = 930 * 0.09
  } else {
    essalud = totalIncome * 0.09
  }
 return {totalPay: totalPay, essalud: essalud}
  
}


//Interacción con el DOM, mostrar datos obtenidos y procesados en las funciones
const selectEmployee = document.querySelector('#employees')
const labelToDni = document.querySelector('#labelDni')
const labelToName = document.querySelector('#labelName')

const labelToTipoSisPension = document.getElementById('labelTipo');
const labelToNameAfp = document.getElementById('labelNameAfp');
const labelToComisionAfp = document.getElementById('labelComisionAfp');

const labelToTipoSalary = document.getElementById('labelSalary');
const labelToAllowances = document.getElementById('labelFamilyAllowances');
const labelToComisionWork = document.getElementById('labelComissionsForWork');
const labelToOthers = document.getElementById('labelOthers');

const labelToBonus = document.getElementById('labelBonus');
const labelToFithCategory = document.getElementById('labelFithCategory');
const labelToAdvance = document.getElementById('labelAdvance');



//**************** */
  //PRESENTACIÓN DE LA INFORMACIÓN NECESARIA PARA GENERAR PLANILLA POR EMPLEADO:
//al seleccionar un trabajador de la lista desplegable se muestran los items por persona 
// necesarios para generar la planilla del empleado.

selectEmployee.addEventListener('change', showGeneral) 
labelToDni.innerHTML = `DNI<br>`
labelToName.innerHTML = ` NAME <br>`
labelToTipoSisPension.innerHTML = `TYPE <br>`
labelToNameAfp.innerHTML = `NAME AFP <br>`
labelToComisionAfp.innerHTML = `COMISSION <br>`

labelToTipoSalary.innerHTML = ` SALARY <br>`
labelToAllowances.innerHTML = `ALLOWANCES <br>`
labelToComisionWork.innerHTML = `COMISSIONS <br>`
labelToOthers.innerHTML = `OTHERS <br>`

labelToBonus.innerHTML = `BONUS <br>`
labelToFithCategory.innerHTML = `FITH CATEGORY <br>`
labelToAdvance.innerHTML = `ADVANCES <br>`
function showGeneral(){
    let selectedOption = this.options[selectEmployee.selectedIndex];
    const employee = person.find(persona => persona.dni === selectEmployee.value)
    labelToDni.innerHTML = `DNI<br>`
    labelToName.innerHTML = `NAME <br>` 
    labelToDni.innerHTML += `${employee.dni} <br>`
    labelToName.innerHTML += ` ${employee.name} <br>`

    const pensiones = pension.find(item => item.dni === selectEmployee.value)
    labelToTipoSisPension.innerHTML = `TYPE <br>`
    labelToNameAfp.innerHTML = `NAME AFP <br>`
    labelToComisionAfp.innerHTML = `COMISSION <br>`
    labelToTipoSisPension.innerHTML += `${pensiones.tipo} <br>`
    labelToNameAfp.innerHTML += `${pensiones.nameafp} <br>`
    labelToComisionAfp.innerHTML += `${pensiones.comisionafp} <br>`

    const ingresos = incomes.find(item => item.dni === selectEmployee.value)
    labelToTipoSalary.innerHTML = ` SALARY <br>`
    labelToAllowances.innerHTML = `ALLOWANCES <br>`
    labelToComisionWork.innerHTML = `COMISSIONS AFP <br>`
    labelToOthers.innerHTML = `OTHERS <br>`
    labelToTipoSalary.innerHTML += `${ingresos.salary} <br>`
    labelToAllowances.innerHTML += `${ingresos.familyAllowances} <br>`
    labelToComisionWork.innerHTML += `${ingresos.comision} <br>`
    labelToOthers.innerHTML += `${ingresos.other} <br>`

    const otrosMontos = nonaffected.find(item => item.dni === selectEmployee.value)
    labelToBonus.innerHTML = `BONUS <br>`
    labelToFithCategory.innerHTML = `FITH CATEGORY <br>`
    labelToAdvance.innerHTML = `ADVANCES <br>`
    labelToBonus.innerHTML += `${otrosMontos.prodbonus} <br>`
    labelToFithCategory.innerHTML += `${otrosMontos.fifthcategory} <br>`
    labelToAdvance.innerHTML += `${otrosMontos.salaryadvance} <br>`
}

//********************************************************************************* */

//Interacción con el DOM, mostrar la información de planilla de todos los trabajadores
const btnGenerate = document.querySelector('#generate')
const labelToDni1 = document.querySelector('#labelDni1')
const labelToName1 = document.querySelector('#labelName1')
const lblratios1 = document.querySelector('.lblratios1')
const selectEmployee1 = document.getElementById('employees1');

const labelToTipoSisPension1 = document.getElementById('labelTipo1');
const labelToNameAfp1 = document.getElementById('labelNameAfp1');
const labelToComisionAfp1 = document.getElementById('labelComisionAfp1');
const labelToTipoSalary1 = document.getElementById('labelSalary1');
const labelToAllowances1 = document.getElementById('labelFamilyAllowances1');
const labelToComisionWork1 = document.getElementById('labelComissionsForWork1');
const labelToOthers1 = document.getElementById('labelOthers1');
const labelToTotalSalary1 = document.getElementById('labelTotalSalary1');

const labelToAfpAporte1 = document.getElementById('labelAfpAporte1');
const labelToAfpSeguros1 = document.getElementById('labelAfpSeguros1');
const labelToAfpComision1 = document.getElementById('labelAfpComision1');
const labelToAfpTotal1 = document.getElementById('labelAfpTotal1');
const labelToOnpTotal1 = document.getElementById('labelOnpTotal1');

const labelToBonus1 = document.getElementById('labelBonus1');
const labelToFithCategory1 = document.getElementById('labelFithCategory1');
const labelToAdvance1 = document.getElementById('labelAdvance1');

const labelToNeto1 = document.getElementById('labelNeto1');
const labelToEssalud1= document.getElementById('labelEssalud1');


//**************** */
//PRESENTACIÓN DE LA INFORMACIÓN AL GENERAR LA PLANILLA DE TODOS LOS EMPLEADOS:


btnGenerate.addEventListener('click', showPayroll) 

function showPayroll(){
for (let i = 0; i < person.length; i++) {
  const DNI = person[i].dni;
  

    const employee = person.find(persona => persona.dni === DNI)
    labelToDni1.innerHTML += `${employee.dni} <br>`
    labelToName1.innerHTML += ` ${employee.name} <br>`

    const pensiones = pension.find(item => item.dni === DNI)
    labelToTipoSisPension1.innerHTML += `${pensiones.tipo} <br>`
    labelToNameAfp1.innerHTML += `${pensiones.nameafp} <br>`
    labelToComisionAfp1.innerHTML += `${pensiones.comisionafp} <br>`

    const ingresos = incomes.find(item => item.dni === DNI)
    labelToTipoSalary1.innerHTML += `${ingresos.salary} <br>`
    labelToAllowances1.innerHTML += `${ingresos.familyAllowances} <br>`
    labelToComisionWork1.innerHTML += `${ingresos.comision} <br>`
    labelToOthers1.innerHTML += `${ingresos.other} <br>`
    labelToTotalSalary1.innerHTML += `${getTotalIncomes(DNI) } <br>` 


    if (pensiones.tipo === 'AFP'){
      const afpData = getTotalPensionAfp(DNI)
      labelToAfpAporte1.innerHTML += `${afpData.afpAporte.toFixed(1)} <br>`
      labelToAfpSeguros1.innerHTML += `${afpData.afpSeguros.toFixed(1)} <br>`
      labelToAfpComision1.innerHTML += `${afpData.afpComision.toFixed(1)} <br>`
      labelToAfpTotal1.innerHTML  += `${afpData.totalPension.toFixed(1)} <br>`
      labelToOnpTotal1.innerHTML += `${0} <br>` 
    } else {
      labelToAfpAporte1.innerHTML += `${0} <br>`
      labelToAfpSeguros1.innerHTML += `${0} <br>`
      labelToAfpComision1.innerHTML += `${0} <br>`
      labelToAfpTotal1.innerHTML  += `${0} <br>`
      labelToOnpTotal1.innerHTML += `${getTotalPensionOnp(DNI)} <br>` 
    }

    const otrosMontos = nonaffected.find(item => item.dni === DNI)
    labelToBonus1.innerHTML += `${otrosMontos.prodbonus} <br>`
    labelToFithCategory1.innerHTML += `${otrosMontos.fifthcategory} <br>`
    labelToAdvance1.innerHTML += `${otrosMontos.salaryadvance} <br>`

    const totals = getTotalPay(DNI, pensiones.tipo) 
    labelToNeto1.innerHTML += `${totals.totalPay.toFixed(1)} <br>`
    labelToEssalud1.innerHTML += `${totals.essalud.toFixed(1)} <br>`
}
}
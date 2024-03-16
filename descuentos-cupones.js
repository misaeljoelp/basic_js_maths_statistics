//En este ejemplo la cantidad de cupones es limitada a las opciones en pantalla.
const inputPrice = document.querySelector('#price')
const inputDiscount1 = document.querySelector('#discount1')
const inputDiscount2 = document.querySelector('#discount2')
const inputDiscount3 = document.querySelector('#discount3')

const labelResult = document.querySelector('#result')


inputDiscount1.addEventListener('click', calcultePriceDiscount)
inputDiscount2.addEventListener('click', calcultePriceDiscount)
inputDiscount3.addEventListener('click', calcultePriceDiscount)
inputPrice.addEventListener('input', calcultePriceDiscount)

function calcultePriceDiscount() {
    //(P * (100 - D)) / 100
    const price = Number(inputPrice.value)
    let percentageDiscount = 0
    if (inputDiscount1.checked){
        percentageDiscount = Number(inputDiscount1.value)
    }
    if (inputDiscount2.checked){
        percentageDiscount = Number(inputDiscount2.value)
    }
    if (inputDiscount3.checked){
        percentageDiscount = Number(inputDiscount3.value)
    }

    if (!price || !percentageDiscount){
        labelResult.innerText = 'Please fill the blanks'
        return
    } 
    const priceWithDiscount = (price * (100 - percentageDiscount)) / 100
    const discount = (price * percentageDiscount) / 100
    labelResult.textContent = `Price with discount: $ ${priceWithDiscount}  Discount: $ ${discount}`
}

//El profesor plantea como hacer la validación con un solo if si, son muchos cupones alojados en un objeto
const couponsObj = {
    'cmrvisaplatinum': 50,
    'cmrvisa': 45,
    'cmrpuntos': 40,
    'lunes': 35,
    'martes': 30,
    'miercoles': 25,
    'jueves': 20,
    'viernes': 15,
    'sabado': 10,
    'domingo': 5,
    'soat': 1,
    'tottusapp': 55,
    'navidad': 60,
    'peru': 65,
    'fiestas': 70,
    'halloween': 75,
    'mundial2026': 80,
    'mujer': 85,
    'hombre': 90,
    'gallo': 100,
}
const inputPrice2 = document.querySelector('#price2')
const inputCoupon = document.querySelector('#txtCoupon')
const labelResult2 = document.querySelector('#result2')
function calcultePriceDiscount2() {
    //(P * (100 - D)) / 100
    const price = Number(inputPrice2.value)
    let percentageDiscount;
    if (!price){
        labelResult2.innerText = 'Please fill in the blanks'
        return
    } 
        if (couponsObj[inputCoupon.value]) {
            percentageDiscount = couponsObj[inputCoupon.value]
        } else {
            labelResult2.innerText = 'The coupon is not valid'
            return
        }
    const priceWithDiscount = (price * (100 - percentageDiscount)) / 100
    const discount1 = (price * percentageDiscount) / 100
    labelResult2.innerHTML = `Discount percentage: ${percentageDiscount}% <br> Discount: $ ${discount1} <br> Price with discount: $ ${priceWithDiscount}`
}
inputPrice2.addEventListener('input', calcultePriceDiscount2)
inputCoupon.addEventListener('input', calcultePriceDiscount2)

//Ahora realizamos el ejercicio pero con arrays, según el profesor esta estructura es mas versatil
const inputPrice3 = document.querySelector('#price3')
const inputCoupon3 = document.querySelector('#txtCoupon3')
const labelResult3 = document.querySelector('#result3')
const couponsArray = []
couponsArray.push({
    name: 'coupon01',
    percentageDiscount: 50,
})
couponsArray.push({
    name: 'coupon02',
    percentageDiscount: 45,
})
couponsArray.push({
    name: 'coupon03',
    percentageDiscount: 40,
})
couponsArray.push({
    name: 'coupon04',
    percentageDiscount: 35,
})
function calcultePriceDiscount3() {
    //(P * (100 - D)) / 100
    const price = Number(inputPrice3.value)
    let percentageDiscount;
    
    
    if (!price){
        labelResult3.innerText = 'Please fill the blanks'
        return
    }
    //codigo con el metodo filter del array devuelve un array con elementos que cumplan la condición 
/*     let couponsFilter = couponsArray.filter((coupon)=> coupon.name === inputCoupon3.value )
        if (couponsFilter.length > 0) {
            percentageDiscount = couponsFilter[0].percentageDiscount
        } else {
            labelResult3.innerText = 'The coupon is not valid'
            return
        } */

//codigo con el metodo find devuelve un solo objeto
        let couponsFind = couponsArray.find((coupon)=> coupon.name === inputCoupon3.value )
        if (couponsFind) {
            percentageDiscount = couponsFind.percentageDiscount
        } else {
            labelResult3.innerText = 'The coupon is not valid'
            return
        }

    const priceWithDiscount = (price * (100 - percentageDiscount)) / 100
    const discount1 = (price * percentageDiscount) / 100
    labelResult3.innerHTML = `Discount percentage: ${percentageDiscount}% <br> Discount: $ ${discount1} <br> Price with discount: $ ${priceWithDiscount}`
}
inputPrice3.addEventListener('input', calcultePriceDiscount3)
inputCoupon3.addEventListener('input', calcultePriceDiscount3)
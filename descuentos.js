const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')

const labelResult = document.querySelector('#result')


inputPrice.addEventListener('input', calcultePriceDiscount)
inputDiscount.addEventListener('input', calcultePriceDiscount)
function calcultePriceDiscount() {
    //(P * (100 - D)) / 100
    const price = Number(inputPrice.value)
    const percentageDiscount = Number(inputDiscount.value)
    if (percentageDiscount > 100){
        labelResult.innerText = 'Discount must be less than 100'
        return
    } 
        const priceWithDiscount = (price * (100 - percentageDiscount)) / 100
        const discount = (price * percentageDiscount) / 100

        labelResult.innerHTML = `Price with discount: $ ${priceWithDiscount} <br> Discount: $ ${discount}`
}
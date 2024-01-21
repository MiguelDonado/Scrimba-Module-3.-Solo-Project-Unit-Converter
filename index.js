// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthConversionEl = document.getElementById("length-conversion-el")
const volumeConversionEl = document.getElementById("volume-conversion-el")
const massConversionEl = document.getElementById("mass-conversion-el")
const convertBtn = document.getElementById("convert-btn")
const numberInput = document.getElementById("number-input")

const meterToFeet = 3.281
const literToGallon = 0.264
const kgToPound = 2.204

convertBtn.addEventListener("click", function () {
    numberToConvert = numberInput.value
    lengthConversionEl.textContent = unitConverter("meters","feet", numberToConvert,meterToFeet)
    volumeConversionEl.textContent = unitConverter("liters","gallons", numberToConvert, literToGallon)
    massConversionEl.textContent = unitConverter("kilos","pounds", numberToConvert,kgToPound)
    numberInput.value = null
})

function unitConverter (firstDescription, secondDescription, numberToConvert, conversion) {
    firstConversion = numberToConvert * conversion
    secondConversion = numberToConvert / conversion
    firstPart = `${numberToConvert} ${firstDescription} = ${firstConversion.toFixed(3)} ${secondDescription}`
    secondPart = `${numberToConvert} ${secondDescription} = ${secondConversion.toFixed(3)} ${firstDescription}`
    return `${firstPart} | ${secondPart}`
}

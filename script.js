function calculatePercent() {
   const partInput = document.querySelector("#percentageCalculator #partInput")
   const wholeInput = document.querySelector("#percentageCalculator #wholeInput")
   const percentInput = document.querySelector("#percentageCalculator #percentInput")
   const resultElement = document.querySelector("#percentageCalculator .result")

   let part = parseFloat(partInput?.value)
   let whole = parseFloat(wholeInput?.value)
   let percent = parseFloat(percentInput?.value)
   let result = 0
   let numMissing = 0

   console.log(part, whole, percent)

   if (isNaN(part)) numMissing++
   if (isNaN(whole)) numMissing++
   if (isNaN(percent)) numMissing++

   resultElement.innerHTML = ""
   resultElement.style.color = "black"

   if (numMissing == 1) {
      if (isNaN(percent)) {
         result = (part / whole) * 100
         resultElement.innerHTML = `${part} is <strong>${resultConditioner(result)}%</strong> of ${whole}`
      } else if (isNaN(whole)) {
         result = part / (percent / 100)
         resultElement.innerHTML = `${part} is ${percent}% of <strong>${resultConditioner(result)}</strong>`
      } else if (isNaN(part)) {
         result = whole / percent
         resultElement.innerHTML = `<strong>${resultConditioner(result)}</strong> is ${percent}% of ${whole}`
      }
      return

   } else if (numMissing == 2) {
      resultElement.innerHTML = "Please enter one more value."
   } else if (numMissing == 3) {
      resultElement.innerHTML = "Please enter two values."
   } else if (numMissing == 0) {
      resultElement.innerHTML = "Too many values entered. Please remove one."
   }
   resultElement.style.color = "red"
}

function clearForm() {
   const partInput = document.querySelector("#percentageCalculator #partInput")
   const wholeInput = document.querySelector("#percentageCalculator #wholeInput")
   const percentInput = document.querySelector("#percentageCalculator #percentInput")
   const resultElement = document.querySelector("#percentageCalculator .result")

   partInput.value = ""
   wholeInput.value = ""
   percentInput.value = ""
   resultElement.style.color = "black"
   resultElement.innerHTML = "Example: X is Y% of Z"
}

function resultConditioner(number) {
   //Intelligent rounding. Results with only a decimal component need sig figs,
   //results greater than 1 do not
   if (number < 1 && number > -1) {
      number = numberWithCommas(+number.toPrecision(2))
   } else {
      number = numberWithCommas(+number.toFixed(2))
   }
   return number
}

function numberWithCommas(number) {
   //taken from SO. Worked better than .toLocaleString()
   return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

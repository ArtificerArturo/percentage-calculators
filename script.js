function calculatePercent(event) {
   const partInput = document.querySelector("#percentageCalculator #partInput")
   const percentInput = document.querySelector("#percentageCalculator #percentInput")
   const wholeInput = document.querySelector("#percentageCalculator #wholeInput")
   const resultElement = document.querySelector("#percentageCalculator .result")
   const calculateButton = document.querySelector("#percentageCalculator .calculate")

   let part = parseFloat(partInput?.value)
   let percent = parseFloat(percentInput?.value)
   let whole = parseFloat(wholeInput?.value)
   let numMissing = 0
   let result = 0

   if (isNaN(part)) numMissing++
   if (isNaN(whole)) numMissing++
   if (isNaN(percent)) numMissing++

   //If they press enter or the calc button we want to check for and display errors. Otherwise, only run with valid input.
   if (event?.key === "Enter" || event?.target == calculateButton) {
      if (numMissing == 2) {
         resultElement.innerHTML = "Please enter one more value."
         resultElement.style.color = "red"
         return
      } else if (numMissing == 3) {
         resultElement.innerHTML = "Please enter two values."
         resultElement.style.color = "red"
         return
      } else if (numMissing == 0) {
         resultElement.innerHTML = "Too many values entered."
         resultElement.style.color = "red"
         return
      } else if (numMissing == 1) {
         actuallyCalculate()
      }
      //If any other key is pressed. Intended for numeral input.
   } else {
      if (numMissing == 1) {
         actuallyCalculate()
      } else if (numMissing == 0) {
         resultElement.innerHTML = "Too many values entered."
         resultElement.style.color = "red"
      } else {
         let X = ""
         let Y = ""
         let Z = ""
         if (isNaN(part)) X = "X"
         else X = part
         if (isNaN(percent)) Y = "Y"
         else Y = percent
         if (isNaN(whole)) Z = "Z"
         else Z = whole
         resultElement.innerHTML = `${X} is ${Y}% of ${Z}`
         resultElement.style.color = "black"
         return
      }
   }
   function actuallyCalculate() {
      resultElement.innerHTML = ""
      resultElement.style.color = "black"

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
   }
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
   resultElement.innerHTML = "X is Y% of Z"
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

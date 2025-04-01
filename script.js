function calculatePercent() {
   const partInput = document.querySelector("#percentageCalculator #partInput")
   const wholeInput = document.querySelector("#percentageCalculator #wholeInput")
   const percentInput = document.querySelector("#percentageCalculator #percentInput")
   const resultElement = document.querySelector("#percentageCalculator .result")

   let part = partInput?.value
   let whole = wholeInput?.value
   let percent = percentInput?.value
   let result = 0
   let numMissing = 0

   if (part == "") numMissing++
   if (whole == "") numMissing++
   if (percent == "") numMissing++

   resultElement.innerHTML = ""
   resultElement.style.color = "black"

   if (numMissing == 1) {
      if (percent == "") {
         result = (part / whole) * 100
         resultElement.innerHTML = `${part} is ${resultConditioner(result)}% of ${whole}`
      } else if (whole == "") {
         result = part / (percent / 100)
         resultElement.innerHTML = `${part} is ${percent}% of ${resultConditioner(result)}`
      } else if (part == "") {
         result = whole / percent
         resultElement.innerHTML = `${resultConditioner(result)} is ${percent}% of ${whole}`
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

function resultConditioner(number) {
   //Intelligent rounding. Results with only decimal component need sig figs,
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

function calculateFindPart() {
   const percentInput = document.querySelector("#percentPartCalculator #percentInput")
   const wholeInput = document.querySelector("#percentPartCalculator #wholeInput")
   const resultElement = document.querySelector("#percentPartCalculator .result")

   let percent = percentInput.value
   let whole = wholeInput.value
   let result = whole / percent
   resultElement.innerHTML = `${resultConditioner(result)}`

   //input checking
}

function calculateFindWhole() {
   const partInput = document.querySelector("#percentWholeCalculator #partInput")
   const percentInput = document.querySelector("#percentWholeCalculator #percentInput")
   const resultElement = document.querySelector("#percentWholeCalculator .result")

   let part = partInput.value
   let percent = percentInput.value
   let result = part / (percent / 100)
   resultElement.innerHTML = `${resultConditioner(result)}`
}

function calculateFindPercent() {
   const partInput = document.querySelector("#percentageCalculator #partInput")
   const wholeInput = document.querySelector("#percentageCalculator #wholeInput")
   const resultElement = document.querySelector("#percentageCalculator .result")

   let part = partInput.value
   let whole = wholeInput.value
   let result = (part / whole) * 100
   resultElement.innerHTML = `${resultConditioner(result)}%`
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

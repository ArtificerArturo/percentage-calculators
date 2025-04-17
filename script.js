function calculateFindPart() {
   const percentInput = document.querySelector("#percentPartCalculator #percentInput")
   const wholeInput = document.querySelector("#percentPartCalculator #wholeInput")
   const backgroundElement = document.querySelector("#percentPartCalculator .background")

   let percent = parseFloat(percentInput.value)
   let whole = parseFloat(wholeInput.value)
   let result = whole * (percent / 100)

   if (document.querySelector("#percentPartCalculator .result")) {
      document.querySelector("#percentPartCalculator .result").remove()
   }

   if (isNaN(percent) || isNaN(whole)) return

   let resultElement = document.createElement("div")
   resultElement.setAttribute("class", "result")

   if (isNaN(result)) {
      resultElement.innerHTML = `Answer: <strong>Undefined</strong>.`
   } else {
      resultElement.innerHTML = `Answer: ${resultConditioner(percent)}% of ${resultConditioner(
         whole
      )} is <strong>${resultConditioner(result)}</strong>.`
   }
   backgroundElement.appendChild(resultElement)
}

function calculateFindWhole() {
   const partInput = document.querySelector("#percentWholeCalculator #partInput")
   const percentInput = document.querySelector("#percentWholeCalculator #percentInput")
   const backgroundElement = document.querySelector("#percentWholeCalculator .background")

   let part = parseFloat(partInput.value)
   let percent = parseFloat(percentInput.value)
   let result = part / (percent / 100)

   if (document.querySelector("#percentWholeCalculator .result")) {
      document.querySelector("#percentWholeCalculator .result").remove()
   }

   if (isNaN(percent) || isNaN(part)) return

   let resultElement = document.createElement("div")
   resultElement.setAttribute("class", "result")

   if (isNaN(result)) {
      resultElement.innerHTML = `Answer: <strong>Undefined</strong>.`
   } else {
      resultElement.innerHTML = `Answer: ${resultConditioner(part)} is ${resultConditioner(
         percent
      )}% of <strong>${resultConditioner(result)}</strong>.`
   }
   backgroundElement.appendChild(resultElement)
}

function calculateFindPercent() {
   const partInput = document.querySelector("#percentageCalculator #partInput")
   const wholeInput = document.querySelector("#percentageCalculator #wholeInput")
   const backgroundElement = document.querySelector("#percentageCalculator .background")

   let part = parseFloat(partInput.value)
   let whole = parseFloat(wholeInput.value)
   let result = (part / whole) * 100

   if (document.querySelector("#percentageCalculator .result")) {
      document.querySelector("#percentageCalculator .result").remove()
   }

   if (isNaN(part) || isNaN(whole)) return

   let resultElement = document.createElement("div")
   resultElement.setAttribute("class", "result")

   if (isNaN(result)) {
      resultElement.innerHTML = `Answer: <strong>Undefined</strong>.`
   } else {
      resultElement.innerHTML = `Answer: ${resultConditioner(part)} is <strong>${resultConditioner(
         result
      )}%</strong> of ${resultConditioner(whole)}.`
   }
   backgroundElement.appendChild(resultElement)
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

function calculateFindPart() {
   const percentInput = document.querySelector("#percentPartCalculator #percentInput")
   const wholeInput = document.querySelector("#percentPartCalculator #wholeInput")
   const resultElement = document.querySelector("#percentPartCalculator .result")

   let percent = percentInput.value
   let whole = wholeInput.value
   let result = whole / percent
   resultElement.innerHTML = `${result}`

   //input checking
}

function calculateFindWhole() {
   const partInput = document.querySelector("#percentWholeCalculator #partInput")
   const percentInput = document.querySelector("#percentWholeCalculator #percentInput")
   const resultElement = document.querySelector("#percentWholeCalculator .result")

   let part = partInput.value
   let percent = percentInput.value
   let result = part / (percent / 100)
   resultElement.innerHTML = `${result}`
}

function calculateFindPercent() {
   const partInput = document.querySelector("#percentageCalculator #partInput")
   const wholeInput = document.querySelector("#percentageCalculator #wholeInput")
   const resultElement = document.querySelector("#percentageCalculator .result")

   let part = partInput.value
   let whole = wholeInput.value
   let result = (part / whole) * 100
   resultElement.innerHTML = `${result}%`
}

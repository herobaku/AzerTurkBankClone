const inputAmount = document.getElementById('inputAmount')
const inputCurrency = document.getElementById('inputCurrency')
const outputCurrency = document.getElementById('outputCurrency')
const outputAmount = document.getElementById('outputAmount')

function convertCurrency() {
  const apiKey = '34d26949a41b319779df34af'
  const from = inputCurrency.value
  const to = outputCurrency.value
  const amount = inputAmount.value
  inputCurrency.addEventListener('change', (e) => {
    if (from.value === 'USD' || outputCurrency.value === 'EUR') {
      console.log(e)
    }
  })
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[to]
      const convertedAmount = (amount * rate).toFixed(2)
      outputAmount.value = `${convertedAmount} ${to}`
    })
    .catch((error) => console.log(error))
}

inputCurrency.addEventListener('change', () => {
  const inputCurr = inputCurrency.value

  Array.from(outputCurrency.options).forEach((option) => {
    option.style.display = 'block'
  })

  const selectedCurrencyOption = outputCurrency.querySelector(
    `option[value="${inputCurr}"]`
  )
  if (selectedCurrencyOption) {
    selectedCurrencyOption.style.display = 'none'
  }
})

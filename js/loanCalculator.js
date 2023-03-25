const range = document.getElementById("range"),
      form = document.querySelector("form"),
      value = document.getElementById("value"),
      result = document.getElementById("result"),
      rangeKredit = document.getElementById("range-kredit");

range.addEventListener("input", ()=>{
  percent = ( range.value / range.max ) * 100
  percentInput = ( range.value / range.max ) * 30000
  range.style.background=`linear-gradient(to right, #6c19ac ${percent}%, #dbdbdb ${percent}%)`
  value.value = percentInput
})

form.addEventListener("submit", function(e){
  e.preventDefault()
})

const linkModul = document.querySelector('.link-modul'),
  modalOrder = document.querySelector('.modal__order'),
  closeModal = document.querySelector('.subtitle i'),
  modalYellow = document.querySelector('.modal-yellow')

linkModul.addEventListener('click', () => {
  modalOrder.style.right = '0'
  modalYellow.classList.add("active")
  document.body.style.overflow="hidden"
})

closeModal.addEventListener('click', () => {
  modalOrder.style.right = '-100%'
  modalYellow.classList.remove("active")
  document.body.style.overflowX="hidden"
  document.body.style.overflowY="auto"
})

const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".ShowAll")
const ShowDiscount = document.querySelector(".Show-Discount")
const sumAll = document.querySelector(".Sum-Total")
const VeganBurguer = document.querySelector(".Vegan-Burguer")


function formatValue(product) {
  const nyFormat = product.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  return nyFormat
}



function ShowAll(arrey) {
  let myLi = ''
  arrey.forEach(element => {

    myLi +=
      `  
     <li>
      <img src="${element.src}">
      <p>${element.name}</p>
      <p class="Price"> ${formatValue(element.price)}</p>
     </li>
     `
    list.innerHTML = myLi

  });
}
function LowerPrice() {
  const Discount = menuOptions.map((value) => ({
    ...value,
    price: value.price * 0.9

  }))
  ShowAll(Discount)

}
function sumAllTotal() {
  const sum = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `<li>
 <p>O valor total sem desconto e<br> ${formatValue(sum)}</p>
</li>
 `
}
function Vegan() {
  const filtra = menuOptions.filter(filtro => filtro.vegan === true)
  ShowAll(filtra)

}



buttonShowAll.addEventListener('click', () => ShowAll(menuOptions))
ShowDiscount.addEventListener("click", LowerPrice)
sumAll.addEventListener("click", sumAllTotal)
VeganBurguer.addEventListener("click", Vegan)
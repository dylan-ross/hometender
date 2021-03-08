async function getCocktailData(cocktail) {
  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  try {
    let response = await axios.get(cocktailUrl)
    let data = response.data.drinks[0]
    const removeEmptyOrNull = (data) => {
      Object.keys(data).forEach(k =>
        (data[k] && typeof data[k] === 'object') && removeEmptyOrNull(data[k]) || 
        (!data[k] && data[k] !== undefined) && delete data[k])
      return data
    }
    data = removeEmptyOrNull(data)
    cocktailCard(data)
    return response
  } catch (err) {
    console.error(err)
  }
} 



function cocktailCard(data) {
  // creating divs
  const cardContainer = document.querySelector('.results')
  const card = document.createElement('div')
  const innerCard = document.createElement('div')
  const frontCard = document.createElement('div')
  const backCard = document.createElement('div')
  // assigning class names
  card.setAttribute('class', 'card')
  innerCard.setAttribute('class', 'inner-card')
  frontCard.setAttribute('class', 'front-card')
  backCard.setAttribute('class', 'back-card')
  const cocktailName = `<h5 class="name">${data.strDrink}</h5>`
  const cocktailImage = `<img src="${data.strDrinkThumb}" crossorigin="anonymous" alt="cocktail" class="image"/>`
  console.log(cocktailImage, cocktailName)


  let cocktailData =
    `
  <p class="back ing-msr">${data.strMeasure1} ${data.strIngredient1} </p>
  <p class="back ing-msr">${data.strMeasure2} ${data.strIngredient2}</p>
  <p class="back ing-msr">${data.strMeasure3 ?? ""} ${data.strIngredient3 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure4 ?? ""} ${data.strIngredient4 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure5 ?? ""} ${data.strIngredient5 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure6 ?? ""} ${data.strIngredient6 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure7 ?? ""} ${data.strIngredient7 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure8 ?? ""} ${data.strIngredient8 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure9 ?? ""} ${data.strIngredient9 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure10 ?? ""} ${data.strIngredient10 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure11 ?? ""} ${data.strIngredient11 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure12 ?? ""} ${data.strIngredient12 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure13 ?? ""} ${data.strIngredient13 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure14 ?? ""} ${data.strIngredient14 ?? ""}</p>
  <p class="back ing-msr">${data.strMeasure15 ?? ""} ${data.strIngredient15 ?? ""}</p>
  <p class="back instruction">${data.strInstructions}</p>
  <p class="back glassware">${data.strGlass}</p>
  `
  

  const cardBack = backCard.children
  console.log(cardBack)




  for (let i = 0; i < cardBack.length; i++) {
    for (let j = 0; j < cardBack.length; j++) {
      cardBack[j]
      if (cardBack[j].innerHTML.includes('undefined')) {
        console.log(cardBack[j].remove())
        return console.log(cardBack[j])
        // return  backCard.insertAdjacentHTML('beforeend', cocktailData)
      }
    }
  } 

  
  card.innerHTML = cocktailName
  frontCard.insertAdjacentHTML('beforeend', cocktailImage)
  backCard.insertAdjacentHTML('beforeend', cocktailData)
  card.appendChild(innerCard)
  innerCard.appendChild(frontCard)
  innerCard.append(backCard)
  cardContainer.appendChild(card)





  for (let i = 0; i < cardBack.length; i++) {
    cardBack[i]
    if (cardBack[i].innerHTML.includes('undefined')) {
    console.log(cardBack[i])
    // return console.log(cardBack[i])
    return  backCard.insertAdjacentHTML('beforeend', cocktailData)
    } 
  } 
  
    cocktailData = removeEmptyOrNull(cardBack)
    // console.log(cocktailData)
  
  
}
  // backCard.insertAdjacentHTML('beforeend', cocktailData)





  // addEventListener to take in search input value 
const search = document.querySelector('form')
search.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#cts-name').value
  removeCard()
  getCocktailData(inputValue)
  document.querySelector('#cts-name').value = ""
})

// removeCard
function removeCard() {
  const results = document.querySelector('.results')
  while(results.childElementCount > 3) {
    results.removeChild(results.firstChild)
  }
}


  



















  
// citing https://www.itsolutionstuff.com/post/how-to-remove-empty-and-null-values-from-json-object-in-jqueryexample.html

















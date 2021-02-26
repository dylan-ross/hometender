// Psuedo code
// add API endpoints
// console.log("lets get drunk")
//get cocktail Data

// const myObj = { 
//   b:'my object',
//   c: '',
//   d: null,
//   f: {v: 1, x: '', y: null, m: {a:'asd'}}
// };
// const removeEmptyOrNull = (obj) => {
//   Object.keys(obj).forEach(k =>
//     (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
//     (!obj[k] && obj[k] !== undefined) && delete obj[k]
//   );
//   return obj;
// };
// const myObj2 = removeEmptyOrNull(myObj);







async function getCocktailData(cocktail) {
  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  try {
    let response = await axios.get(cocktailUrl)
    let data = response.data
    const removeEmptyOrNull = (obj) => {
      Object.keys(obj).forEach(k =>
        (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) || 
        (!obj[k] && obj[k] !== undefined) && delete obj[k])
      return obj
    }
    const data2 = removeEmptyOrNull(data)
    // console.log(data2)
    cocktailCard(data2)
    return response
  } catch (err) {
    console.error(err)
  }
} 
getCocktailData('sazerac')
// async function getCocktailList(ingredient) {
//   const ingredientUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=>${ingredient}`
//   try {
//     let ingResponse = await axios.get(ingredientUrl)
//     let ingData = ingResponse.
//   } catch (err) {
//     console.error(err)
//   }
// }

function cocktailCard(data2) {
  const cardContainer = document.querySelector('.results')
  const card = document.createElement('div')
  const innerCard = document.createElement('div')
  const frontCard = document.createElement('div')
  const backCard = document.createElement('div')
  card.setAttribute('class', 'card')
  innerCard.setAttribute('class', 'inner-card')
  frontCard.setAttribute('class', 'front-card')
  backCard.setAttribute('class', 'back-card')
  const cocktailName = `<h5 class="name">${data2.drinks[0].strDrink}</h5>`
  const cocktailImage = `<img src="${data2.drinks[0].strDrinkThumb}" crossorigin="anonymous" alt="cocktail" class="image"/>`
  const cocktailData = `
  <p class="back ing-msr">${data2.drinks[0].strMeasure1} ${data2.drinks[0].strIngredient1} </p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure2} ${data2.drinks[0].strIngredient2}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure3} ${data2.drinks[0].strIngredient3}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure4} ${data2.drinks[0].strIngredient4}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure5} ${data2.drinks[0].strIngredient5}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure6} ${data2.drinks[0].strIngredient6}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure7} ${data2.drinks[0].strIngredient7}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure8} ${data2.drinks[0].strIngredient8}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure9} ${data2.drinks[0].strIngredient9}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure10} ${data2.drinks[0].strIngredient10}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure11} ${data2.drinks[0].strIngredient11}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure12} ${data2.drinks[0].strIngredient12}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure13} ${data2.drinks[0].strIngredient13}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure14} ${data2.drinks[0].strIngredient14}</p>
  <p class="back ing-msr">${data2.drinks[0].strMeasure15} ${data2.drinks[0].strIngredient15}</p>
  <p class="back instruction">${data2.drinks[0].strInstructions}</p>
  <p class="back glassware">${data2.drinks[0].strGlass}</p>
  `
  // const cocktailDataShrink  = cocktailData.value != null
  frontCard.innerHTML = cocktailImage
  backCard.innerHTML = cocktailData
  
  card.appendChild(innerCard)
  innerCard.appendChild(frontCard)
  innerCard.append(backCard)
  cardContainer.appendChild(card)
}

const search = document.querySelector('form')
search.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#cts-name').value
  removeCard()
  getCocktailData(inputValue)
  document.querySelector('#cts-name').value = ""
})

function removeCard() {
  const results = document.querySelector('.results')
  while(results.childElementCount > 3) {
    results.removeChild(results.firstChild)
  }
}


// request cocktails by ingredient





// create tag for cocktails set src append to DOM




// link image/recipe reveal element to cocktail names


















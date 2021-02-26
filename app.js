// Psuedo code
// add API endpoints
// console.log("lets get drunk")
//get cocktail Data

async function getCocktailData(cocktail) {
  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  try {
    let response = await axios.get(cocktailUrl)
    let ctData = response.ctData
    showCocktailImage(ctData)
    showCocktailData(ctData)
    return response
  } catch (err) {
    console.error(err)
  }
} 

async function getCocktailList(ingredient) {
  const ingredientUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`
  try {
    let 
  } catch (err) {
    console.error(err)
  }
}

function showCocktailImage(ctData) {
  const card = document.querySelector('#front')
  const imageBox = document.createElement('div')
  imageBox.setAttribute("class", "face")
  let cocktailImage = `
    <h5 class="name">${ctData.drinks[0].strDrink}</h5>
    <img src="${ctData.drinks[0].strDrinkThumb}" crossorigin="anonymous" alt="cocktail" class="image"/>
`  
  imageBox.innerHTML = cocktailImage
  card.appendChild(imageBox)
}

function showCocktailData(ctData) {
  const back = document.createElement('div')
  dataBox.setAttribute("class", "flip")
  const cocktailData = `
    <h5 class="back name">${ctData.drinks[0].strDrink}</h5>
    <p class="back ing-msr">${ctData.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1} </p>
    <p class="back ing-msr">${ctData.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}</p>
    <p class="back ing-msr">${ctData.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}</p>
    <p class="back ing-msr">${ctData.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}</p>
    <p class="back ing-msr">${ctData.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}</p>
    <p class="back instruction">${ctData.drinks[0].strInstructions}</p>
    <p class="back glassware">${ctData.drinks[0].strGlass}</p>
  `
  back.innerHTML = cocktailData
  card.appendChild(back)
}

const search = document.querySelector('form')
search.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#cts-name').value
  removeFront()
  getData(inputValue)
  document.querySelector('#cts-name').value = ""
})

function removeFront() {
  const image = document.querySelector('#front')
  while(image.childElementCount > 4) {
    image.removeChild(image.lastChild)
  }
}


// request cocktails by ingredient





// create tag for cocktails set src append to DOM




// link image/recipe reveal element to cocktail names


















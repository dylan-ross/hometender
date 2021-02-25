// Psuedo code
// add API endpoints
// console.log("lets get drunk")
//get cocktail Data

async function getData(cocktail) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  try {
    let response = await axios.get(url)
    let data = response.data
    showCocktailImage(data)
    showCocktailData(data)
    return response
  } catch (err) {
    console.error(err)
  }
} 

function showCocktailImage(data) {
  const imageContainer = document.querySelector('#front')
  const cocktailImage = `
    <h5 class="name">${data.drinks[0].strDrink}</h5>
    <img src="${data.drinks[0].strDrinkThumb}" crossorigin="anonymous" alt="cocktail" class="image"/>
`
  imageContainer.insertAdjacentHTML('afterbegin', cocktailImage)
}

function showCocktailData(data) {
  const dataContainer = document.querySelector('#back')
  const cocktailData = `
    <h5 class="back name">${data.drinks[0].strDrink}</h5>
    <p class="back ing-msr">${data.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1} </p>
    <p class="back ing-msr">${data.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}</p>
    <p class="back ing-msr">${data.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}</p>
    <p class="back ing-msr">${data.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}</p>
    <p class="back ing-msr">${data.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}</p>
    <p class="back instruction">${data.drinks[0].strInstructions}</p>
    <p class="back glassware">${data.drinks[0].strGlass}</p>
  `
  dataContainer.insertAdjacentHTML('afterbegin', cocktailData )
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


















// Psuedo code
// add API endpoints
// console.log("lets get drunk")

// const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`


//get cocktail Data

async function getData(cocktail) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  const headers = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  try {
    let response = await axios.get(url, headers)
    let data = response.data
    showCocktailImage(data)
    // showCocktailData(data)
    return response
  } catch (err) {
    console.error(err)
  }
} 

getData("old fashion")



// // create tags and set src append to DOM

function showCocktailImage(data) {
  console.log(data.drinks[0].strImageSource)
  const imageContainer = document.querySelector('#front')
  // console.log(imageContainer)
  const cocktailImage = `
    <h5 class="name">${data.strDrink}</h5>
    <img src= "https://cors-anywhere.herokuapp.com/${data.drinks[0].strImageSourcestrImageSource}" alt="cocktail" class="image"/>
`
  console.log(cocktailImage)
  imageContainer.insertAdjacentHTML('beforeend', cocktailImage)
}

function showCocktailData(data) {
  const dataContainer = document.querySelector('#back')
  console.log(dataContainer)
  const cocktailData = `
    <h5 class="back name">${data.strDrink}</h5>
    <p class="back ing-msr">${data.strMeasure1} ${data.strIngredient1} </p>
    <p class="back ing-msr">${data.strMeasure2} ${data.strIngredient2}</p>
    <p class="back ing-msr">${data.strMeasure3} ${data.strIngredient3}</p>
    <p class="back ing-msr">${data.strMeasure4} ${data.strIngredient4}</p>
    <p class="back ing-msr">${data.strMeasure5} ${data.strIngredient5}</p>
    <p class="back instruction">${data.strInstructions}</p>
    <p class="back glassware">${data.strGlass}</p>
  `
  dataContainer.insertAdjacentHTML('beforeend', cocktailData )
}


// addEventListener to take in search input

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#cts-name').value
  // console.log(inputValue)
  removeFront()
  getData(inputValue)
  document.querySelector('#cts-name').value = ""
})


// console.log(form)






// remove previous cocktails

function removeFront() {
  const frontContainer = document.querySelector('#front')
  // console.log(cocktailContainer)
  while (('.name') > 3) {
    frontContainer.removeChild(frontContainer.firstChild)
  }
}

// removeFront()





// create effect eventListener to reveal recipe






// request cocktails by ingredient





// create tag for cocktails set src append to DOM




// link image/recipe reveal element to cocktail names


















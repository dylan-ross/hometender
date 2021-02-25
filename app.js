// Psuedo code
// add API endpoints
// console.log("lets get drunk")

// const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`


//get cocktail Data

async function getData(cocktail) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  // const headers = {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }
  try {
    let response = await axios.get(url)
    let data = response.data
    // console.log(data.drinks[0].strDrinkThumb)
    showCocktailImage(data)
    showCocktailData(data)
    return response
  } catch (err) {
    console.error(err)
  }
} 

getData('manhattan')



// // create tags and set src append to DOM

function showCocktailImage(data) {
  console.log(data.drinks[0].strDrinkThumb)
  const imageContainer = document.querySelector('#front')
  // console.log(imageContainer)
  const cocktailImage = `
    <h5 class="name">${data.drinks[0].strDrink}</h5>
    <img src="${data.drinks[0].strDrinkThumb}" crossorigin="anonymous" alt="cocktail" class="image"/>
`
  console.log(cocktailImage)
  imageContainer.insertAdjacentHTML('beforeend', cocktailImage)
}

function showCocktailData(data) {
  const dataContainer = document.querySelector('#back')
  console.log(dataContainer)
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
  dataContainer.insertAdjacentHTML('beforeend', cocktailData )
}


// addEventListener to take in search input

const form = document.querySelector('form')
form.addEventListener('button', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#cts-name').value
  // console.log(inputValue)
  // removeFront()
  getData(inputValue)
  document.querySelector('#cts-name').value = ""
})


// console.log(form)






// remove previous cocktails

// function removeFront() {
//   const frontContainer = document.querySelector('#front')
//   // console.log(cocktailContainer)
//   while (('.name') > 3) {
//     frontContainer.removeChild(frontContainer.firstChild)
//   }
// }

// removeFront()





// create effect eventListener to reveal recipe






// request cocktails by ingredient





// create tag for cocktails set src append to DOM




// link image/recipe reveal element to cocktail names


















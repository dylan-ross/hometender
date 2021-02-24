// Psuedo code
// add API endpoints
// console.log("lets get drunk")

// const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`


//get cocktail Data

async function getData(cocktail) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  try {
    let response = await axios.get(url)
    let data = response.data.drinks[0]
    console.log(Object.keys(data))
    // showCocktailImage(data)
    // showCocktailName(data)
    // showCocktailRecipe(data)
    return response
  } catch (err) {
    console.error(err)
  }
} 

getData('old fashion')



// // // create tags and set src append to DOM

// function showCocktailImage(data) {
//   const imageContainer = document.querySelector('#result-img')
//   console.log(imageContainer)
//   const cocktailImage = `
//     <img src="${data.strImageSource}" alt="cocktail" class="image"/>
// `
//   console.log(cocktailImage)
//   imageContainer.insertAdjacentHTML('beforeend', cocktailImage)
// }

// function showCocktailName(data) {
//   const nameContainer = document.querySelector('#result-name')
//   console.log(nameContainer)
//   const cocktailName = `
//     <h5 class="name">${data.strDrink}</h5>
//   `
//   nameContainer.insertAdjacentHTML('beforeend', cocktailName )
// }

// function showCocktailRecipe(data) {
//   const recipeContainer = document.querySelector('#result-recipe')
//   console.log(recipeContainer)
//   const cocktailRecipe = `
//     <p class="recipe">${data.}
//   `
// }

// // showCocktailRecipe()









// remove previous cocktails







// create effect eventListener to reveal recipe






// request cocktails by ingredient





// create tag for cocktails set src append to DOM




// link image/recipe reveal element to cocktail names


















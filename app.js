// Psuedo code
// add API endpoints
// console.log("lets get drunk")

// const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`


//get cocktail Data

async function getData(cocktail) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  try {
    const response = await axios.get(url)
    let data = response.data
    console.log(data)
    return response
  } catch (err) {
    console.error(err)
  }
}

// getData('old fashion')



// create tags and set src append to DOM











// remove previous cocktails







// create effect eventListener to reveal recipe






// request cocktails by ingredient





// create tag for cocktails set src append to DOM




// link image/recipe reveal element to cocktail names


















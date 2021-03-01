# Project Overview

## Project Name

Hometender

## Project Description
Search for a cocktail by name. Compare up to 3 cocktails at a time. Search results are images that when interacted with will reveal recipe and glassware. Additional features include a search by ingredient form that will result in a list of all cocktails with that ingredient. Cocktail names in that list will link to image/recipe reveal.
## API and Data Sample

https://www.thecocktaildb.com/api.php
```json
"drinks": [
        {
            "idDrink": "11007",
            "strDrink": "Margarita",
            "strDrinkAlternate": null,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
            "strImageAttribution": "Cocktailmarler",
            "strCreativeCommonsConfirmed": "Yes",
            "dateModified": "2015-08-18 14:42:59"
        },
```
## Wireframes

https://wireframe.cc/pro/pp/bfa2795e4417125

### MVP/PostMVP


#### MVP 
- Cocktail search by name 
- Search results will be an image, and a hidden recipe and glassware type for the cocktail 
- Interact with images to reveal recipes and glassware types
- Max three cocktail images on screen at one time  
- Use flex-box to create responsive design 

#### PostMVP  

- add an ingredient search form that results in a list of cocktails with that ingredient
- link image/recipe reveal to cocktail name on list
- add more CSS Styling
- create more search parameters such as: glass type, cocktail category, number of ingredients 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Feb 23| Project Approval / Core HTML and CSS | Incomplete
|Feb 24| Create Psuedocode / Create Dynamic Cocktail Search Form / Append Resulting Images to the DOM / Remove extra images so only 3 are visible at a time | Incomplete
|Feb 25| addEventListener to images to reveal additional info / CSS Styling and Responsive Design | Incomplete
|Feb 26| Create Dynamic Ingredient Search Form / Append Results to DOM / link image/recipe reveal to cocktail names   | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

https://lucid.app/publicSegments/view/a03272a2-ca25-4f6b-9aef-53205414c4b1/image.pdf

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| creating core html | H | 2hrs | 2hrs | 2hrs |
| basic CSS styling | H | 3hrs | 3hrs | 3hrs |
| psuedo code | M | 2hrs | 2hrs | 2hrs |
| creating dynamic cocktail search form| H | 4hr | 4hrs | 4hrs |
| append image results to the DOM | H | 2hr | 4hr | 4hrs |
| remove images so that only the 3 most recent are visible | M | 2hrs | 1hr | 1hr |
| adding EventLisenters to images to reveal recipe | H | 3hrs | 1hr | | 1hr |
| CSS styling of images | M | 3hrs | 3hrs | 3hrs |
| media queries and responsive design| H | 3hrs| 12hrs | 12hrs |
| creating dynamic ingredient search form | M | 3hrs | N/A | N/A |
| appending search results to body | M | 2hrs | N/A | N/A |
| linking images/recipe reveal to cocktail names | L | 2hrs | N/A | N/A |
| additional CSS | L | 3hrs | N/A | N/A |
| Total | H | 33hrs| 32hrs | 32hrs |

## Code Snippet

## Change Log

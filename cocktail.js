const darkModeButton = document.getElementById('dark-btn');
const lightModeButton = document.getElementById('light-btn');
const button = document.getElementById('btn');
const field = document.getElementById('drinks-field')
const darkMode = () =>{
    document.body.style.backgroundColor = 'white';
    lightModeButton.style.display = 'block';
    darkModeButton.style.display ='none';
    field.style.color = 'black'
}

const lightMode = () =>{
    document.body.style.backgroundColor = 'black';
    lightModeButton.style.display = 'none';
    darkModeButton.style.display ='block';
    field.style.color = 'white'
}

function displayDrinks(drink){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${drink}`
    fetch(url)
    .then(res => res.json())
    .then(data => collectDrinksData(data.drinks))
}
const  collectDrinksData =(drinks) =>{
    drinks = drinks.slice(0,20)
    const parentDiv = document.getElementById('drinks-field');
        parentDiv.innerHTML = '';
    drinks.forEach(drink =>{
        const childDiv = document.createElement('div');
        childDiv.classList.add('w-80,h-60')
        childDiv.innerHTML = `
        <img src="${drink.strDrinkThumb}"
        <p> Name: ${drink.strDrink}</p>
        `
        parentDiv.appendChild(childDiv);
    })
}

// displayDrinks('Alcoholic')

function searchFunc(){
    const searchField = document.getElementById('field');
    const searchFieldValue = searchField.value;
    displayDrinks(searchFieldValue);
}




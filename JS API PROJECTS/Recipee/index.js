const input = document.querySelector('#input');
const Search_button = document.querySelector('#button');
const meal_body = document.querySelector('.meal-container');
const h2 = document.getElementById('head2');
const body = document.querySelector('.meal-container');

Search_button.addEventListener('click', ()=>{
    fetchData();
})

let fetchData = async ()=>{
    const search_input = input.value;

    if(!search_input){
        h2.innerHTML = 'Write something...';
        return;
    }

    h2.innerHTML = 'Searching Recipee...';
try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search_input}`;
    const result = await fetch(url);
    const response = await result.json();

    h2.innerHTML = 'Home Is Cooking... & Enjoy the Great Meal!';

    response.meals.forEach(meals => {

        const meal_content = document.createElement('div');
        meal_content.classList.add('Recipee');

        meal_content.innerHTML = ` 

        <img src='${meals.strMealThumb}'></img>
        <h1 style="color: black;">${meals.strMeal}</h1>
        <p style="color: black;"><span style="font-weight: 700;">${meals.strArea}</span> Dish</p>
        <p style="color: black;">Belongs to <span style="font-weight: 700;">${meals.strCategory}</span> Category</p>
        <a id="recipee-video" href="${meals.strYoutube}">
        <i class="fa-brands fa-youtube"></i> YouTube</a>  `;

        let recipeButton = document.createElement('Button');
        recipeButton.classList.add('btn-recipee');
        recipeButton.innerHTML = ' View Recipee ';
        meal_content.append(recipeButton);

        meal_body.append(meal_content);

        recipeButton.addEventListener('click',()=>{
            recipeePop(meals);
        })


})
} catch (error) {
    h2.innerHTML = `We Havn't Getting Recipee... Please Rewrite`;
}
}


function recipeeIngrediants(meal2){
let IngredientList = ""; 
for (let i=1; i<=20; i++) {
    const ingrediants = meal2[`strIngredient${i}`];
    if (ingrediants) {
        const measure = meal2[`strMeasure${i}`];
        IngredientList += `<li>${measure} ${ingrediants}</li>`
    } else {
        break;
    }
}   
    return IngredientList;
}

let meal_content = document.querySelector('.meal_content');

function recipeePop(meal){
   let recipee_details = document.createElement('div');
   recipee_details.classList.add('recipee-details');

   recipee_details.innerHTML = ` 
   <h1>${meal.strMeal}</h1>
   <h3>Ingrediants:</h3>  
   <ul>${ recipeeIngrediants(meal) }</ul> 
   <h3>Instructions:</h3>
   ${meal.strInstructions} `;

   let closebtn = document.createElement('Button');
   closebtn.classList.add('close');
   const closeIcon = `<i class ="fa-solid fa-xmark"></i>`;
   closebtn.innerHTML =`Close ${closeIcon}`

   closebtn.addEventListener('click',()=>{
        recipee_details.style.display = 'none';
    })

   recipee_details.append(closebtn);
   body.before(recipee_details);

}
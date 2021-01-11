const meals = document.getElementById("meals")



getRandomMeal();
//fetchFavMeals();

async function getRandomMeal() {
    const resp = await  fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    const respData = await resp.json();
    const randomMeal = respData.meals[0];

   
    addMeal(randomMeal,true)
}


async function getMealById(id){
    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +id)
}


async function getMealsBySearch(term){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+ term)


}


function addMeal(mealData, random = false) {
  
    console.log(mealData)
    const meal = document.createElement("div");
    meal.classList.add("meal");
 
    meal.innerHTML = `
  
    <div class="meal-header">
        ${random ? `<span class="random">
        Random Receipe
         </span>` : ""}

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">

        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>

    <div class="meal-body">
          <h3>${mealData.strMeal}</h3>
         <button class="fav-btn ">
          <i class="fa fa-heart"></i>
          </button>
  </div> 

     `


     const btn = meal.querySelector(".meal-body .fav-btn");
     btn.addEventListener("click",() => {
           btn.classList.toggle("active")
     });

     meals.appendChild(meal);

}

/*
//to add to local storage
function addMealToLS(meal){
    const mealIds = getMealsLS();


    localStorage.setItem("mealsIds",JSON.stringify([...mealIds,mealId]));
}


function removeMealLS(mealId){
    const mealsIds = getMealsLS();

    localStorage.setItem("mealsIds",JSON.stringify(mealIds.filter(id => id !== mealId)));
}


function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem
    ('mealIds'));

    return mealIds === null ? [] : mealIds;
}




*/


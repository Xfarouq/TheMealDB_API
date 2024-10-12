const fetchData = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
        if (!response.ok) {
            throw new Error("Can't reach network");
        }
        const data = await response.json();
        displayMeals(data);
    } catch (error) {
        console.error("Error fetching Meals: ", error)
    }
};

const displayMeals = (data) => {
    const mealList = document.getElementById("meal_list");
    data.meals.forEach(meal => {
        mealList.innerHTML += `
         <div class="meal" id="meal">
                <div class="img"><img src="${meal.strMealThumb}" alt="Meal Image"></div>
                <h2>${meal.strMeal}</h2>
                <p class = "ing">${meal.strInstructions}</p>
                <p>${meal.strIngredient1}</p>
                <p>${meal.strIngredient2}</p>
                <p>${meal.strIngredient3}</p>
                <p>${meal.strIngredient4}</p>
                <p>${meal.strIngredient5}</p>
                <button><a href="${meal.strYoutube}" target = "_blank">Watch Video</a></button>
            </div>
        `
    });
};

fetchData();
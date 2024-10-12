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
                <p>${meal.strInstructions}</p>
                <p>ing 1</p>
                <p>ing 2</p>
                <p>ing 3</p>
                <p>ing 4</p>
                <p>ing 5</p>
                <button>Watch Video</button>
            </div>
        `
    });
};

fetchData();
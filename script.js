// Function to fetch meal data based on the search query
const fetchData = async (query) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if (!response.ok) {
            throw new Error("Can't reach network");
        }
        const data = await response.json();
        displayMeals(data); // Call the function to display the fetched meals
    } catch (error) {
        console.error("Error fetching meals: ", error);
        document.getElementById("meal_list").innerHTML = `<p>Error fetching meals. Please try again later.</p>`;
    }
};

// Function to display meals
const displayMeals = (data) => {
    const mealList = document.getElementById("meal_list");
    mealList.innerHTML = ''; // Clear previous results

    if (!data.meals || data.meals.length === 0) {
        mealList.innerHTML = '<p>No meals found. Try another search.</p>'; // Display message if no meals found
        return;
    }

    // Iterate through the meals and display them
    data.meals.forEach(meal => {
        mealList.innerHTML += `
         <div class="meal" id="meal">
                <div class="img"><img src="${meal.strMealThumb}" alt="Meal Image"></div>
                <h2>${meal.strMeal}</h2>
                <p class="ing">${meal.strInstructions.slice(0, 100)}...</p>
                <p>${meal.strIngredient1} - ${meal.strMeasure1}</p>
                <p>${meal.strIngredient2} - ${meal.strMeasure2}</p>
                <p>${meal.strIngredient3} - ${meal.strMeasure3}</p>
                <p>${meal.strIngredient4} - ${meal.strMeasure4}</p>
                <p>${meal.strIngredient5} - ${meal.strMeasure5}</p>
                <button><a href="${meal.strYoutube}" target="_blank">Watch Video</a></button>
            </div>
        `;
    });
};

// Add event listeners for search functionality
document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        fetchData(query); // Fetch and display meals based on search query
    } else {
        document.getElementById("meal_list").innerHTML = '<p>Please enter a search term.</p>';
    }
});

// Optionally trigger search on Enter key press
document.getElementById('searchInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});

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
}
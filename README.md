# TheMealDB_API
This is project to test out my API knowledge and render elements in the API to my website

## Table of Contents
- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [License](#license)
- [Authors](#authors)

## Description
Meal Search App is a simple web application that allows users to search for meals using the MealDB API. Users can enter a meal name, and the app fetches and displays meal details, including ingredients, instructions, and a video link.

## Live Demo
You can view a live demo of the Meal Search App [here.](https://themealdb-api.onrender.com/)

## Features
- Search for meals by name.
- Displays meal images, ingredients, and brief instructions.
- Provides a link to watch preparation videos.
  
## Installation

To run this application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Xfarouq/TheMealDB_API
    ```
2. Open index.html in your web browser.

## Usage

1. Enter a meal name in the search input field.
2. Click the search button or press Enter to fetch meal data.
3. View the displayed meal information, including ingredients and cooking instructions.

**Example**
- Search for "Pizza" to see various pizza recipes and their details.
  
## Code Overview

**JavaScript Functions**
- fetchData(query): Fetches meal data from the MealDB API based on the user's search query. Handles errors and updates the DOM with fetched data.
- displayMeals(data): Displays the fetched meal data in a user-friendly format. Handles cases where no meals are found.
  
**Event Listeners**
- An event listener is added to the search button to trigger the fetchData function when clicked.
- An optional event listener is included to trigger the search when the Enter key is pressed in the search input field.
  
## License
This project is licensed under the MIT License.

## Authors

**Name**: Umar Lawan Sani

**Email**: umarfarouq447@gmail.com

**GitHub**: Xfarouq



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Home Component
The Home component is a React functional component that displays up-to-date cryptocurrency prices along with their logos. It fetches the data from an API and updates the component state accordingly.

# Dependencies
The component imports the following dependencies:

- useEffect: A React hook used to perform side effects in functional components.
- useState: A React hook used to manage state in functional components.

# Component Structure
The Home component consists of the following parts:

- State initialization
- Date formatting
- API call and data fetching
- Rendering the component
- State Initialization
- The component initializes its state using the useState hook. The state object has two properties:

- currencies: An array that holds the cryptocurrency data.
- date: A string that represents the date when the data was fetched.
Date Formatting
- The component uses the Date object to get the current date and formats it as a string in the format "day/month/year". The formatted date is stored in the formattedDate variable.

# API Call and Data Fetching
The useEffect hook is used to fetch the cryptocurrency data from an API and update the component state. It is triggered whenever the formattedDate value changes.

# Inside the useEffect hook:

The setState function is called to update the date property of the state object with the formattedDate.
The getCryptoCurrencies function is called, which returns a promise that resolves to the cryptocurrency data.
The returned data is transformed using Object.entries and map to create an array of cryptocurrency objects with properties name, price, and logo.
The updated cryptocurrency data is set in the component state using the setState function.
Rendering the Component
The Home component renders the following elements:

A heading with the class home-heading that displays the date when the data was fetched.
A section with the class home-section containing an image and a list of cryptocurrency items.
An image element with the class home-image and the coin image as the source.
A list of cryptocurrency items rendered using the map function on the state.currencies array.
Each item is assigned a unique key based on the name property.
The item's logo is displayed as an image using the class logo-img and the x.logo as the source.
The item's name, an arrow icon, and the price in USD are displayed.
CSS Styles
The component imports a CSS module named Home.module.css, which contains style definitions for the component's elements. The defined styles are applied to the corresponding elements using the className prop.

# Export
The Home component is exported as the default export of the module.

This is an overview of the Home component and its functionality.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
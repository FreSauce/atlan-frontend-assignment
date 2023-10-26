# Atlan Assignment: SQL Editor

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Deployed Link: [https://shardul-atlan-sql.netlify.app/](https://shardul-atlan-sql.netlify.app/)

## Project Overview

### Features:

- Multiple tabs support for query editor.
- Query Results Table
    -  Virtualized rows to allow loading large amount of rows without lagging.
    -  Allows resizing the columns to view the cell data easily.
    -  Allows sorting by any table field to understand the structure of the data
    ![table](https://github.com/FreSauce/atlan-frontend-assignment/assets/34598383/2a179607-3cc3-4570-85c5-cac462409f64)

- Recent Queries
    - Allows users to see the history of queries executed along with their results cached to avoid calling the API again. 
- Saved Queries
    - Allows users to save the queries to local storage and load the queries along with their results cached.
- Query Stats (Obtained from mock API)
    -  Execution Time
    -  Rows returned (length of table rows)
    -  Rows affected
- Allows resizing all the panels as per the user's preference.
    ![adjustable](https://github.com/FreSauce/atlan-frontend-assignment/assets/34598383/9c838cda-1d32-4ad7-b124-cb9b086471d8)
- Light and Dark Mode.
   ![image](https://github.com/FreSauce/atlan-frontend-assignment/assets/34598383/44a64b30-aeb5-4755-8f47-6f62cdfbd580)
- Responsive website for all screens \
  ![image](https://github.com/FreSauce/atlan-frontend-assignment/assets/34598383/419a75bc-41ce-4841-b718-345f4d687b17)
- Error handling \
   ![image](https://github.com/FreSauce/atlan-frontend-assignment/assets/34598383/9adf154e-909b-43ca-98fe-9b183cca8327)


### Tech stack:

Built using ReactJS + TailwindCSS. 

External dependencies used:
-  `heroicons`: To get icons for the app
-  `monaco-editor`: Used as a query editor in the app
-  `react-table`: To work with result table and add features like sorting, resizing etc.
-  `react-virtual`: To generate virtualized rows for rendering large amounts of rows.
-  `react-resizable-panels`: To make resizable layout for all components.

### Available Scripts
In the project directory, you can run:

`npm install`
Installs all the dependencies required for the project

`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

`npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Optimizations

For optimization, used react-virtual for keeping the DOM elements finite and fast for large number of rows.
All the assets are optimized by Netlify CDN, giving faster page load speed.

Lighthouse report for the deployed website:
![image](https://github.com/FreSauce/atlan-frontend-assignment/assets/34598383/b3bfcd92-e536-4030-b08a-a03f5dba9eeb)


## Deployment

This application has been deployed to Netlify: [https://shardul-atlan-sql.netlify.app/](https://shardul-atlan-sql.netlify.app/)
![image](https://github.com/FreSauce/atlan-frontend-assignment/assets/34598383/419a8d4b-3fb1-4b1f-bf1e-5e432b889fcc)

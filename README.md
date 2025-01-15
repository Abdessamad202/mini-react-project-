# 📁 Project File Structure Documentation

This document outlines the structure and purpose of each file in the project. Use this as a reference for understanding the project organization and file responsibilities.

---

## **Project Root**

### 📄 **index.html**
- The entry point of the web application.
- Links the Vite-powered JavaScript files.

### 📄 **package.json**
- Defines the project dependencies and scripts.
- Used for managing the project's Node.js packages.

### 📄 **package-lock.json**
- Automatically generated file that locks the dependency versions.

### 📄 **vite.config.js**
- Configuration file for the Vite build tool.
- Customizes the Vite setup for development and production builds.

### 📄 **README.md**
- Project documentation file.
- Contains an overview of the project, setup instructions, and usage guidelines.

---

## **src/** (Source Folder)
This folder contains all the main application code.

### 📂 **src/assets/**
- **react.svg**: React logo used in the project.

### 📂 **src/components/**

#### 📄 **Back.jsx**
- A reusable component that provides navigation functionality.
- Used to navigate back to the previous page.

#### 📄 **RecipeDetail.jsx**
- Displays detailed information about a specific recipe.
- Uses the `useParams` hook to get the recipe ID from the URL.

#### 📄 **RecipeForm.jsx**
- A form component for adding and editing recipes.
- Uses `useState` and `useContext` hooks to manage form inputs and state.

#### 📄 **RecipeList.jsx**
- Displays a list of all recipes.
- Provides options to edit, delete, and view more details for each recipe.

### 📂 **src/context/**

#### 📄 **RecipeContext.jsx**
- Context provider that manages the global state for recipes.
- Allows components to access and modify the recipe data.

### 📂 **src/pages/**

#### 📄 **AddRecipePage.jsx**
- A page component for adding a new recipe.
- Uses the `RecipeForm` component.

#### 📄 **HomePage.jsx**
- The main landing page of the application.
- Provides navigation links to different sections.

#### 📄 **RecipeDetailPage.jsx**
- A page component that shows the detailed view of a specific recipe.
- Uses the `RecipeDetail` component.

#### 📄 **UpdateRecipePage.jsx**
- A page component for editing an existing recipe.
- Uses the `RecipeForm` component with pre-filled values.

---

## **Public Folder**

### 📂 **public/**
- Contains static files that are publicly accessible.

#### 📄 **vite.svg**
- Vite logo used in the project.

---

## **src/styles/**

#### 📄 **App.css**
- Styles for the main `App` component.

#### 📄 **index.css**
- Global CSS styles for the project.

#### 📄 **styles.css**
- Additional custom styles for the application.

---

## **src/** (JavaScript Entry Files)

### 📄 **App.jsx**
- The main application component.
- Defines the routes and renders different pages based on the URL.

### 📄 **main.jsx**
- The entry point for the React application.
- Renders the `App` component into the root DOM element.

### 📄 **index.js**
- Contains JavaScript code related to service workers or other scripts.
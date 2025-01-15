## 🚀 Start Learning React - Code With Harry  


## 🌟 Why Use React? 

- 🔁 **Reusable Components**: In React, you can create reusable components, like a **navbar**, and use it on every page of your application.  

- ⚡ **State Management**: React allows you to use **states**, so when you update a variable, it reflects across the page dynamically.  
- 🧩 **Component-Based Architecture**: Split your app into multiple components and reuse them wherever needed.


## 🔍 Key Concepts React

### 📚 `ClassName` vs `Class`  
- **Why use `className` instead of `class`?**  
  Since React uses JavaScript to create applications, if you use `class`, React will interpret it as an **Object-Oriented Programming (OOP) class** instead of a CSS selector. Therefore, we use `className` for styling.

---

### 🎛️ `useState`  
- **What is `useState`?**  
  A special variable in React that can be updated dynamically, and these updates are reflected in the **DOM**.  

---

### 🧩 `{ }` in React  
- **Why use curly braces `{ }`?**  
  In React, curly braces allow you to include **JavaScript expressions** within your HTML (JSX). Without them, React will treat the content as plain HTML.

---

### 📂 `App.js`  
- The **`App.js`** file is the **main component** of your React application.  
- It is the entry point that renders when you run your app.

---

### 🛠️ Components  
- A **component** in React is anything that appears on your application.  
- Examples:  
  - A **navbar**  
  - A **card**  
  - A **footer**  

---

### 🔗 Props  
- **Props** allow you to **pass data from one component to another**.  
- They enable communication between components and make them more dynamic.

---

### 📂 What is a React App?  
A **React App** is a project built using React, a popular JavaScript library for building user interfaces.  

- When you create a React app (using tools like **Create React App** or **Vite**), it provides a ready-to-use **folder structure** and essential configurations for development. 📁  

---

### ⚡ What is Vite?  
- **Vite** is a fast and modern build tool that provides a smoother development experience for React projects. 🚀  
- It is much **faster** than Create React App (CRA) and optimized for modern web development. 🔥  

---

### 🛠️ Running the Project  
1. If you're using **npm** to run your React project and encounter issues (e.g., `npm run dev` throws an error), it likely means **npm is not installed properly**. ❌  
2. To fix this, you can install dependencies and start the project using these commands:

   ```bash
   npm i    # Shortcut for npm install
   npm run dev

- **🔑 Key Notes:**
- **npm i:** Installs all the required dependencies. 📦

- **npm run dev:** Starts your development server. 🌐


<br>

---


# <p align="center">📅 Day 1 - React Learning</p>  


## 🌟 Key Points  

- React components are **function-based**.  

- **`JSX`**: JSX is like **HTML** but acts as an entry point for React, similar to `index.html` in traditional HTML.  


### <p align="center">⚡ Difference Between JSX and HTML</p>  

- **JSX** is like **HTML with JavaScript**, but it is more strict. For example:  

    ```html
    <!-- In HTML -->
    <img src="home.jpg"> <!-- No error -->
    
    <!-- In JSX -->
    <img src="home.jpg"> <!-- This will throw an error -->
    <img src="{home.jpg}" /> <!-- Correct way: self-closing tag -->
    ```

---

### <p align="center">📋 Rules in React</p>  

1. **Proper Tag Closing**:  
   Always close tags correctly. For self-closing tags, ensure they are properly closed:  
   - ✅ `<img />` 

   - ❌ `<img>`  

2. **Wrapper for Content**:  
   All component content must be wrapped in a **single parent element**, like:  
   - `<div>` or `<>` (React Fragment).  

3. **Use `className`**:  
   Use `className=""` instead of `class` to add CSS classes to elements.  

4. **Start the App**:  
   Run the application using:  

   ```bash
   npm start

---

### <p align="center">✨ Props in React</p>  



- **`Props`**: Props is short for "properties".  
  - Props are used to **pass data** (properties or values) from one component to another.  
  - In simple terms, **props help in passing data between components**.  



- ### 📚 Definition  
- Props are **attributes** passed from a parent component to a child component and are accessed using **props.propertyName**.

---

### 🛠️ Usage  
- **Props are passed** as attributes in the JSX tag in the parent component.  
- They are **received as parameters** in the target child component.


### 📋 Example: Passing and Receiving Props  

#### 🏗️ **Passing Props from `App.jsx`:**
```jsx
<Card title="Card 1" Description="Card 2 Description" />
```
<br>

---

# <p align='center'>Day 2</p> 

### <p align="center">⚛️ Hooks in React</p>


- React Hooks are **special functions** that let you use React features, like **state** and **lifecycle methods**, in **functional components**.   

---

### <p align="center">🤔 What are Hooks?</p>

- 🛠 **React Hooks** allow you to add functionality to your functional components without using class components.  

- 🔄 They make it easier to use **state**, **effects**, and other React features.  
- 📦 Think of hooks as tools that enhance your components.

---


### <p align="center">🌟 Commonly used Hooks in React ⚛️</p>
- 🔧 `useState()` – Manage State in Functional Components

- The `useState()` The React **useState** Hook allows us to track state in a **function component**.

- **State** generally refers to data or properties that need to be tracking in an application. 🎉

- **State** is like a variable that React keeps track of.  
- It helps your components remember things, like user input or a counter value.

---

### <p align="center">🛠 How Does `useState()` Work?</p>

- When you use `useState()`, it gives you two things: 

  1. 🧮 The **current value** of the state.  

  2. 🔄 A **function to update the value**.



### 🚀 Example:
```javascript
import React, { useState } from "react";

function Counter() {
  // Initialize state with 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} > Increase </button>
    </div>
  );
}

```



- **count** is the current value of the state.

- **setCount** is a function to update the state.

- The **useState** Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

- We could create multiple state Hooks to track individual values.



### 🚀 Example:
```javascript
import React, { useState } from "react";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
}

```

<br>

<hr>

### <p align="center">📝 How to Change the Title of the Page in React ⚛️</p>

1. 🌐 Open the `index.html` file located in the **public** folder.  
2. 🖊️ Find the `<title>` tag inside the `<head>` section.  
3. ✏️ Change the title to whatever you want, like this: 

    ```html
    <title>Zahid Khattak React App</title>
    ``` 

<br>

### <p align="center"> Happy Learning! 📚✨</p>

<br>

### <p align='center'> Best VSCode Extension for React</p>

### 1. [ES7+React/Redux/React/React-Nativesnippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)


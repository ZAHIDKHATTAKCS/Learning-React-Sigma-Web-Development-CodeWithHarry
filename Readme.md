# Start Learning React - Code With Harry

<br>

# Why use React
<br>

- In React we can create reusable components, like we have to create navbar once and use it an every page of our React Application

- We can use states which means that once we update the variable, it changes across the page.

- we can split our app into multiple components and we can reuse those components.

- `ClassName Why` The most important question is why we used ClassName instead of Class in react , so the answer is because we using Javascript to create a React application so if you use class the react app will consider that it is the oops class it is not the a selector class.

- `UseState` a variable that we can used and we can change while using in DOM

- `{ }` in React we use { } curly braces because where ever we want to include pure Javascript so we need to use curly braces if we can't use it so it will be considered as a html content.

- `App.js` App.js in React is the main component that is showing when you just run the React Application.

- `Component` In React a component can be anything that is showing on the React Application like a component can be navbar or a card a component can be a footer etc.

- `Props` Props is like passing data from one component to other 

<br>

# What is React app and What is Vite 
<br>

- so these are giving you the folder structure of the React application 
- vite is more faster than Create React app

- `Note` if your npm not working like if you want to run the project by npm run dev if its showing error its means that npm is not installed properly so for install npm you have to run the below command

    ```
    npm i 
    npm run dev
    ```

- npm i is the shortcut for npm install

<br>

<br>

# <p align='center'>Day 1</p>  

- in react each component is function based

- `jsx` jsx is the entry point like index.html for HTML

### <p align='center'> Difference in between jsx and HTML</p>

- jsx is like the HTML with JavaScript but it is more strict as compared to HTML for example if you write 

    ```
    <img src="home.jpg"> // in HTML its not counter as an error while

    <img src="home.jpg" > // in JSX it will throw an error because img tag is self closing so the correct way should be applied in each tag img in jsx like

    <img src="home.jpg" /> // it is the correct way 
    ```

<br>

### <p align='center'> Rules in React</p>

1. `Proper Tag Closing:` Always close tags correctly. For self-closing tags, ensure they are properly closed `(e.g. <img />).`

2. `Wrapper for Content:` All component content must be wrapped in a single parent element, like `<div>` or <> (React fragment).

3. `Use className:` Use className="" instead of class to add CSS classes to elements.

4. `Start the App:` Run the application using npm start.

5. `Note:`
Typing rafce in VS Code will auto-generate a React boilerplate if you have the ES7+ React/Redux/React-Native extension installed.

6. To style components defined in App.jsx, use the index.css file.

<br>

### <p align='center'> Props in React</p>

- `Props` Props is the shortcut for properties it is actually props are used to carry the properties or values from one component to another. here the props are title and Description and propers are defined in the App.jsx file

- in simple words we can pass data from one component to another through props
Definition: Props (short for "properties") are used to pass data from one component to another in React.

- `Usage:` Props are passed as attributes in the JSX tag and received as a parameter in the target component.

- `Example:` Passing props from App.jsx:

    ```
    <Card title="Card 1" Description="Card 2 Description" />
    ```

- `Receiving Props in the Component:`
To use props in a functional component, pass props as a parameter and access its properties using props.propertyName. Enclose JavaScript expressions in curly braces { } when writing in JSX.

    ```
    const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img 
          src="https://miro.medium.com/v2/resize:fit:740/0*4HxmoUyeXbMQDOtu.png" 
          width="100%" 
          alt="Card image" 
        />
        <h1 className='cards-titles'>{props.title}</h1>
        <p className='cards-descriptions'>{props.Description}</p>
      </div>
    </div>
  );
    };
     ```

 <br>

### <p align='center'> Inline Style in React</p>

- To use inline styles in React, follow this format:

    ```
    style={{ border: "2px solid green", color: "red" }}
    ```

- `Explanation:`

- The outer curly braces { } indicate you're writing JavaScript inside JSX.
- The inner curly braces { } represent a JavaScript object containing the CSS properties and values.
<br>
<br>

# <p align='center'>Day 2</p> 

### <p align="center">⚛️ Hooks in React</p>


- React Hooks are **special functions** that let you use React features, like **state** and **lifecycle methods**, in **functional components**.   

### <p align="center">🤔 What are Hooks?</p>

- 🛠 **React Hooks** allow you to add functionality to your functional components without using class components.  

- 🔄 They make it easier to use **state**, **effects**, and other React features.  
- 📦 Think of hooks as tools that enhance your components.

<br>

### <p align="center">🌟 Commonly used Hooks in React ⚛️</p>
- 🔧 `useState()` – Manage State in Functional Components

- The `useState()` The React **useState** Hook allows us to track state in a **function component**.

- **State** generally refers to data or properties that need to be tracking in an application. 🎉

- **State** is like a variable that React keeps track of.  
- It helps your components remember things, like user input or a counter value.

<br>

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


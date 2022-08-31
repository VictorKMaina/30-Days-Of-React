# Exercises
## Level 1
1. What is the difference between a regular function and an arrow function?
- A regular function is declared using the `function` keyword. An arrow function is declared with variable keywords and the arrow function syntax `() => {}`. Arrow functions also don't have their own `this` keyword.

2. What is a React component?
- A React component is a reusable function or class in React that is responsible for a part of the UI.

3. How do you make a React functional component?
- You can make a functional React component by declaring the function using either arrow syntax or the `function` keyword, then returning some JSX.

4. What is the difference between a pure JavaScript function and a functional component?
- React function components are just JavaScript functions that accept props values and return JSX.

5. How small is a React component?
- A React component can be as small as a single element.

6. Can we make a button or input field component?
- Yes, we can.

7. Make a reusable Button component.
```jsx
const Button = () => <button>Button</button>
```

8. Make a reusable InputField component.
```jsx
const InputField = () => <input type='text'/>
```

9. Make a reusable alert box component with one div parent element and one p child element of the div (warning alert box, success alert box).
```jsx
const Alert = () => {
    const message = 'This is an alert.' 
    return (
        <div className='parent'>
            <p>{message}</p>
        </div>
    )
}
```
# React + Vite

## My Notes

QUESTION 1
WHAT IS VITE?

ANSWERS- Vite is (pronounced veet) is a build tool used for modern web development

WHAT DOES THAT MEAN?
When you build websites or web apps (especially with JavaScript frameworks like React, Vue, Svelte), you need a tool that:

- Runs your app locally
- Refreshes the page automatically when you change code
- Bundles/compiles your code for production
- Makes your site faster and optimized

Vite does all this — and very fast.
It’s known for speed, simplicity, and modern features.

WHY DEVELOPERS LIKE VITE:

- Very fast startup
- Easy to use
- Works perfectly with React, Vue, etc.

Hot Reloading (it updates the browser immediately when you change code)

# QUESTION 2 -WHAT IS NPM?

NPM means Node Package Manager.

It is a tool that helps you:

- Install JavaScript libraries/packages
- Update or remove packages
- Manage dependencies for your project
- Run project scripts (like npm start, npm run dev)

- Think of NPM like:
  A store where you download tools for your project.

- Example: you type on your terminal
- (npm install react) and press enter

# QUESTION 3-y WHAT IS PACKAGE.JSON?

package.json is a file inside your project.

ASSISGNMENT TO COMPLETA OUT REACT DECEMBSR PROJECT

1. React is a JavaScript library for building user interfaces.

You break UI into components (like building blocks), each reusable and focused on one part of the UI.

Components are usually functions that return UI descriptions using JSX (a syntax like HTML inside JavaScript).

React updates the screen efficiently by tracking changes and only updating what’s necessary.
jsComplete.com

Main ideas

Components = reusable UI pieces

State = data that can change inside a component

Props = inputs passed into components

Hooks let function components use React features like state.
jsComplete.com

2. React Hooks Cheatsheet (freeCodeCamp & others)

What Hooks

Hooks are special functions in React that let you use features like state, effects, context, etc. inside function components.
FreeCodeCamp
+1

Key Hooks

useState → track and update state

useEffect → run side effects after rendering (e.g., fetch data)

KEY DIFFERENCES (VERY CLEAR)
Item	What it controls	How you interact
React	The whole UI structure	Automatically
React Hooks	Data & behavior	Inside React
DOM	Page structure	Manually
DOM Elements	Buttons, text, images	Directly

THE FOUR THINGS — WHAT THEY ARE (IN SIMPLE WORDS)

We are comparing:

React

React Hooks

JavaScript DOM (Document)

JavaScript DOM Elements


-You don’t manually touch the webpage structure.

2- React Hooks

What they are:

Hooks are helpers inside React.

- How they work (simple):

They help React remember things (like user clicks, inputs, data).

They control what happens after the page changes.

Hooks give React memory and behavior.

3- JavaScript DOM (Document)

What it is:

The DOM is how the browser represents the webpage internally.

- How it works (simple):

When a page loads, the browser turns HTML into a tree structure.

JavaScript uses this structure to change the page.

DOM is the bridge between JavaScript and the webpage.

4 - JavaScript DOM Elements

What they are:

Elements are the individual parts of the page:

buttons

text

images

divs

- How they work (simple):

JavaScript can find an element and:

change its text

change its color

hide or show it

respond to clicks

Elements are the actual items you see on the screen.


STEP-BY-STEP FLOW (HAND-TO-HAND)
1-  User clicks a button

The button is a DOM element.

2- React receives the action

React listens to the event.

3 -A Hook updates data

useState changes a value (for example: count = 1 → 2).

4- React re-renders

React decides what should change on the screen.

5- DOM is updated automatically

React updates only the needed DOM elements.You never touch the DOM directly when using React.

 WITHOUT REACT (Old Way)
document.getElementById("text").innerHTML = "Hello";

 You manually control the page
 Easy to break
 Hard to manage big apps
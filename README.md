# React + Vite

## My Notes

1*  WHAT IS VITE?
* Vite is (pronounced veet) is a build tool used for modern web development

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

 # WHAT IS NPM?
 NPM means Node Package Manager.

It is a tool that helps you:

- Install JavaScript libraries/packages
- Update or remove packages
- Manage dependencies for your project
- Run project scripts (like npm start, npm run dev)

# Think of NPM like:
A store where you download tools for your project.

# Example: you type on your terminal
# (npm install react) and press enter

# WHAT IS PACKAGE.JSON?
package.json is a file inside your project.

It is created automatically when you run:
#  you will need to type this on your terminalt (npm init)
# (npm create vite@latest myproject)
This file contains important info about your project:
1️⃣ Project details

Name

Version

Description

2️⃣ Dependencies (the packages your project needs)

# Example:"dependencies": {
  "react": "^18.0.0",
  "vite": "^5.0.0"
}
# "scripts": {
  "dev": "vite",
  "build": "vite build"
}
# So when you type:(npm run dev)
It runs vite behind the scenes.





This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

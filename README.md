# Understanding useContext in React

## Overview

This document provides an overview of the `useContext` hook in React, detailing its purpose, usage, and how it can be applied to manage global state in applications, specifically for theme management.

---

## Table of Contents

- [What is useContext?](#what-is-usecontext)
- [Why Use useContext?](#why-use-usecontext)
- [How to Create a Context](#how-to-create-a-context)
- [Using Context in Components](#using-context-in-components)
- [Example: Theme Management](#example-theme-management)
- [Conclusion](#conclusion)

---

## What is useContext?

`useContext` is a React hook that allows you to access the value of a context directly within a functional component. It simplifies the consumption of context without the need for a `Consumer` component.

---

## Why Use useContext?

- **Avoid Prop Drilling**: Pass data through the component tree without having to pass props down manually at every level.
- **Global State Management**: Manage global state such as user authentication or UI themes efficiently.
- **Clean and Readable Code**: Simplifies the component structure, making it more readable and maintainable.

---

## How to Create a Context

1. **Create a Context**:
   ```javascript
   import { createContext } from "react";

   const MyContext = createContext(defaultValue);
   ```
## 2.Providing the Context

To share the context value with your component tree, wrap your application with a `Provider`. Pass the value you want to share as a prop to the `Provider`. Here’s how you can do it:

```javascript
import { MyContext } from './MyContext';

const App = () => {
    return (
        <MyContext.Provider value={/* value */}>
            {/* component tree */}
        </MyContext.Provider>
    );
};
```
## Using Context in Components

To access the context value in any functional component, you can use the `useContext` hook. Here's how to do it:

```javascript
import { useContext } from "react";
import { MyContext } from './MyContext';

const MyComponent = () => {
    const contextValue = useContext(MyContext);
    // Use contextValue in your component
};
```
### Example: Theme Management

In a theme management scenario, you can use `useContext` to toggle between dark and light themes.

#### 1. Create the Context

First, you need to create the context. This is how you can do it:

```javascript
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});
```
#### 2. Provide the Context

Next, create a `ThemeProvider` component that uses the `ThemeContext.Provider` to share the context value with your component tree:

```javascript
import { useState } from "react";
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");

    const darkTheme = () => setThemeMode("dark");
    const lightTheme = () => setThemeMode("light");

    return (
        <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
```
### 3. Consume the Context in Components
To utilize the context values in your components, you can use the `useContext` hook. Here’s an example with a `ThemeButton` component:

```javascript
import { useContext } from "react";
import { ThemeContext } from './ThemeContext';

const ThemeButton = () => {
    const { themeMode, darkTheme, lightTheme } = useContext(ThemeContext);

    return (
        <button onClick={themeMode === "light" ? darkTheme : lightTheme}>
            Switch to {themeMode === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};
```
## Conclusion
The `useContext` hook is a powerful feature in React that enables efficient global state management. By avoiding prop drilling and providing a clean way to share values across components, it enhances the overall structure and maintainability of your React applications.


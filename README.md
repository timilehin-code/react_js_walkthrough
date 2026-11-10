# Learning react

Yeah, I know, I know, "it too late to be learning react", "Ai has taken over", blah, blah blah. I am learning react because i want to truly understand what is going on under the hood,and not just vibes and inshallah. So for the next couple of days i am going to be doing a thorough walk through on the React frame work, then i will build a real project with it.

## 1. Creating a react application

make sure you have node.js installed on your machine, then you run:

```bash
npx create-react-app the_name_of_your_app
```

this command will create the app into the folder your named.
Then you run

```bash
npm run start
```

this will allow you to view the application on your browser.

## 2. React Components

Components are the building blocks and beating heart of any react application. They are rendered to the Dom, and then and shown to the browser. Each component have their own template and logic.

```js
function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>App components</h1>
      </div>
    </div>
  ); // this is a component
  export default App;
}
```

## 3. Dynamic values in templates

Dynamic values allows you to parse dynamic data, into your react templates and components.

```js
function App() {
  const title = "Welcome to the new Blog";
  const likes = 50;
  const person = { name: "timi", age: 21 };
  const link = "https://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked by {likes} people</p>
        <p>
          {person.name}, {person.age}
        </p>
        <p>{Math.random() * 10}</p>
        <a href={link}>google</a>
      </div>
    </div>
  );
}
```

## 4. Handling multiple components

Handling multiple components is the core of building applications in React. To manage them effectively, you must master three main pillars: component composition (structuring), state management (communication), and dynamic rendering (lists).

```js
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
```

this is used to get components from other template to the main page `App.js`.

```js
 <Navbar />
      <Dashboard />
    //these are the templates from the other pages
```

## 5. Adding styles to your App

When we use react to write inline css, we use javascript object (key-value pairs) to write dynamic styles. for example:

````js
 <a href="/create" style={{
         color: "white",
         backgroundColor: "#f1356d",
         borderRadius:"8px "
       }}>New Blog</a>
       ```
````

but we can just use the `import` keyword to import an external css file
to our file.

```js
import "./index.css";
```

## 6. Adding click events

To add a click function to an element in react, you will use the `onClick` keyword on the element you want to have the click function, like the example shown below.

```js
const HomePage = () => {
  const title = "Welcome to the new Blog";
  const handleClick = (e) => {
    console.log("Hello user", e.target);
  };

  const handleClickAgain = (name) => {
    console.log(`Hello, ${name}`);
  };
  return (
    <div className="home">
      <h1>{title}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("timi")}>Click me Again</button>
    </div>
  );
};

export default HomePage;
```

## 7. Using state

The state of a component, is the data being use by a component at a particular point. It could be array of values,booleans,strings or any data our component uses. To do it, we use the use State method or function like the example shown below

```js
import { useState } from "react";
const HomePage = () => {
  const [name, setName] = useState("Timi");
  const [age, setAge] = useState(21);
  const title = "Welcome to the new Blog";

  const handleClick = () => {
    setName("Silver");
    setAge("20");
  };

  return (
    <div className="home">
      <h1>{title}</h1>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default HomePage;
```

## 8. Outputting lists

In React, rendering dynamic data involves transforming JavaScript arrays and objects into JSX elements using standard array methods like `.map()`, or using `Object.keys()`, `Object.values()`, and `Object.entries()` for plain objects.

```js
import { useState } from "react";
const HomePage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with JavaScript",
      body: "JavaScript is a versatile programming language primarily used for web development...",
      author: "Alex Morgan",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      body: "Hooks allow you to use state and other React features without writing a class...",
      author: "Sarah Jenkins",
    },
    {
      id: 3,
      title: "A Guide to Modern CSS Layouts",
      body: "Flexbox and CSS Grid have completely changed the way we design responsive web layouts...",
      author: "David Chen",
    },
  ]);

  return (
    <div className="home">
      <div>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
```

## 9. Props (properties) and reusable components

props or properties are a way to parse data from a parent component, to a child component.

```js
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;


// where it was reused
import { useState } from "react";
import BlogList from "./BlogList";
const HomePage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with JavaScript",
      body: "JavaScript is a versatile programming language primarily used for web development...",
      author: "Alex Morgan",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      body: "Hooks allow you to use state and other React features without writing a class...",
      author: "Sarah Jenkins",
    },
    {
      id: 3,
      title: "A Guide to Modern CSS Layouts",
      body: "Flexbox and CSS Grid have completely changed the way we design responsive web layouts...",
      author: "David Chen",
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All blogs!"}></BlogList>
      <BlogList blogs={blogs.filter((blog)=> blog.author == "David Chen" || blog.author == "Alex Morgan" )} title={"Timi's blogs!"}></BlogList>
    </div>
  );
};

export default HomePage;
```

## 10. the useEffect Hook

This hook allows you to run a specific code upon every render.

```js
import {useEffect} from "react";
  useEffect(
    ()=>{
      console.log("use effect ran");
      console.log(blogs);
      
      
    })
```

## 11. Fetching data using useEffect:

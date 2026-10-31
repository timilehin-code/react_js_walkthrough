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
}
```

// npm install react-router-dom


// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);



// App.js
// import React from "react";
// import {
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// //Remember, we can write these functional components in their own files 
// //to be exported and imported to the App component.
// //We've combined them here to simplify our example.
// const Home = (props) => { 
//   return (
//     <h1 style={{color: "red"}}>Home Component</h1>
//   );
// }
    
// const About = (props) => {
//   return (
//     <h1 style={{color: "blue"}}>About Component</h1>
//   );
// }
    
// function App() {
//   return (
//     <div>
//       <h1>Routing Example</h1>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }
    
// export default App

// It works, but there was still a bug. The browser was completely refreshed! When building applications using HTML, CSS and JavaScript outside of React, this is normal and expected behavior. The issue is we want React to control this behavior completely and stop the default browser refresh.

// If you inspect the rendered HTML in your browser, your "Link" looks like an "a". tag in the DOM for styling purposes. Keep that in mind when trying to apply default styles at the element level in your app.css.

// App.js
import React from "react";
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
    
const Home = (props) => {
  return (
    <div>
        <h1 style={{color: "red"}}>Home Component</h1>
        <Link to={"/about"}>Go to About </Link>
    </div>
  );
}
    
const About = (props) => {
  return (
    <div>
        <h1 style={{color: "blue"}}>About Component</h1>
        <Link to={"/"}>Go Home</Link> 
    </div>
  );
}
    
function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
    
export default App
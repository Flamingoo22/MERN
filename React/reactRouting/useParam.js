// App.js
import React from "react";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
    
const Location = (props) => {
  return (
    <h1>Location Component Loaded!</h1>
  );
}
    
function App() {
  return (
    <div>
      <p>
        <Link to="/location/seattle">Seattle</Link>
         | 
        <Link to="/location/chicago">Chicago</Link>
         | 
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </div>
  );
}
    
export default App;


// Each of the Link components above will be matched by the same Route, but as we have it written it will show the same information each time. If we want to personalize the information a bit, we can access the :city part of the /location/:city route that we're visiting.

// Similar to hooks like useState and useEffect, we'll be able to use a hook called useParams to capture our path params.

// In the example below we can destructure each of our params using this hook. In this case, the "city" from our Route's path property. Now when we click on each Link we will be welcomed to that city.

// App.js
// import { useParams } from "react-router"; //Top of App.js
// //Rest of imports here...
    
// const Location = (props) => { 
//   const { city } = useParams(); // matches our :city in our Routes
    
//   return (
//     <h1>Welcome to { city }!</h1>
//   );
// }
//Rest of code here...
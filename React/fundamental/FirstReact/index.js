const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(
    "h1", //create an h1;
    {}, //this is for passing props and events 
    "Our First React page has rendered" //the body of h1 tag
    )); 
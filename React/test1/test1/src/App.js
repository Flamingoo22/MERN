import './App.css';

import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
      <>
      <MyNewComponent someText={'Hello World'}/>
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt.Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
      </>
  );
}

export default App;

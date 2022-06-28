import './App.css';

import Crud from './Crud/CrudClass';

function App() {
  // const url = 'http://localhost:7777/notes';
  const url = 'https://ra-http-crud.herokuapp.com/';

  return (
    <div className="App">
      <Crud url={url}/>
    </div>
  );
}

export default App;

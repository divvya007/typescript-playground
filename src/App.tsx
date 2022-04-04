import React from 'react';
import { HelloWorld } from './playground/Practice01';

import './App.css';

function App() {

  React.useEffect(() => {
    let hwobj = new HelloWorld("inside useEffect");
    console.log(hwobj.message)

  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;

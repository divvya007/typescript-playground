import React from 'react';
import { HelloWorld } from './playground/Practice01';

import './App.css';

function App() {

  React.useEffect(() => {
    let hwobj = new HelloWorld("jai sia ram");
    console.log(hwobj.message)

  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;

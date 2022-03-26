import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Landing from "./pages/Landing"
import Battle from "./pages/Battle"

function App() {
  return (
    <div className="App">    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route exact path="/battle" component={<Battle/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
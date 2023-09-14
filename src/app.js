import Welcome from './welecom';
import React from "react";
import { ReactDOM } from "react";

function App() {
  return (
    <div>
      {/*Cách 1*/}
      <Welcome student={{name: 'Ty', age: '18'}}/>

      {/*Cách 2 hoặc cách 3*/}
      {/* <Welcome name="Ty" age="17"/> */}
    </div>
  );
}

export default App;
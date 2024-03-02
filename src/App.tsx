import React, { useEffect, useState } from 'react';
import './App.css';
import AdviceComponent from './Components/AdviceComponent';
import getData from './DataServices/DataServices';
import Advice from './Interfaces/Interface';

function App() {
  

  return (
    <>
    {/* <h1>{theAdvice && theAdvice.slip.advice}</h1>
    <button onClick={() => fetchData()}>Rand</button> */}
      <AdviceComponent />
    </>
  );
}

export default App;

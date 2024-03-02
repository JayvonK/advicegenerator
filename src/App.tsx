import React, { useEffect, useState } from 'react';
import './App.css';
import AdviceComponent from './Components/AdviceComponent';
import getData from './DataServices/DataServices';
import Advice from './Interfaces/Interface';

function App() {
  const [theAdvice, setTheAdvice] = useState<Advice>();
  const [count, setCount] = useState(0);

  const changeData:() => void = () => {
      setCount(count + 1);
    }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setTheAdvice(data);
    }
    fetchData();
  }, [count])

  return (
    <>
      <AdviceComponent advice={theAdvice!.slip.advice} id={theAdvice!.slip.id} click={changeData}/>
    </>
  );
}

export default App;

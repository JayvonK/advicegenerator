import React, { useEffect, useState } from "react";
import "./App.css";
import AdviceComponent from "./Components/AdviceComponent";
import getData from "./DataServices/DataServices";
import Advice from "./Interfaces/Interface";

function App() {
  const [theAdvice, setTheAdvice] = useState<Advice>();
  const [count, setCount] = useState(0);
  const [oldAdvice, setOldAdvice] = useState<Advice>();

  const changeData: () => void = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setOldAdvice(theAdvice);
    const fetchData = async () => {
      const data = await getData();
      setTheAdvice(data);
    };
    fetchData();
    if (oldAdvice?.slip.advice === theAdvice?.slip.advice) {
      fetchData();
      console.log("I ran");
    }
    setOldAdvice(theAdvice);
  }, [count]);

  return (
    <>
      <AdviceComponent
        advice={(theAdvice && theAdvice.slip.advice) || "empty"}
        id={(theAdvice && theAdvice.slip.id) || 0}
        click={changeData}
      />
    </>
  );
}

export default App;

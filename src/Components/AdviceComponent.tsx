import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import getData from '../DataServices/DataServices';
import Advice from '../Interfaces/Interface';
import DesktopLine from '../Assets/pattern-divider-desktop.svg';
import diceImg from '../Assets/icon-dice.svg'
import MobileLine from '../Assets/pattern-divider-mobile.svg'

const AdviceComponent = () => {
    const [theAdvice, setTheAdvice] = useState<Advice>()

  const fetchData = async () => {
      const data = await getData();
      setTheAdvice(data);
    }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <Row className='g-0'>
        <Col className='d-none d-lg-block'></Col>
        <Col className='adviceCol'>
            <div className='adviceBox'>
                <h1 className='adviceNum Manrope'>ADVICE #{theAdvice?.slip.id}</h1>
                <h1 className='Manrope quote'>"{theAdvice?.slip.advice}"</h1>
                <img className='img d-none d-lg-block' src={DesktopLine}></img>
                <img className='img2 d-block d-lg-none' src={MobileLine}></img>
            </div>
            <div className='diceDiv'>
              <button className='dice' onClick={() => fetchData()}><img src={diceImg}></img></button>  
            </div>
            
        </Col>
        <Col className='d-none d-lg-block'></Col>
      </Row>
    </div>
  )
}

export default AdviceComponent

import { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FoodRedImage from '../../assets/images/food-red.png'
import FoodGreenImage from '../../assets/images/food-green.png'
import FoodWhiteImage from '../../assets/images/food-white.png'
import './ModuleTwo.scss'

function ModuleTwo() {

  function logLink(link:string){
    console.log(link);
  }

  return (
    <>
      
      <Container className="module-two-container" fluid="md">
        <Row>
          <Col xs md="12">
            <div className='module-title color-title'>Taste the Colours</div>
          </Col>
          <Col xs md="4">
            <a href='#' onClick={() => logLink('food red')}>
              <Image className='color-image' src={FoodRedImage} />
            </a>
            <div className='module-subtitle'>Red</div>
            <div className='module-description text-center'>Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.</div>
          </Col>
          <Col xs md="4">
            <a href='#' onClick={() => logLink('food green')}>
            <Image className='color-image' src={FoodGreenImage} />
            </a>
            <div className='module-subtitle'>Green</div>
            <div className='module-description text-center'>Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours</div>
          </Col>
          <Col xs md="4">
            <a href='#' onClick={() => logLink('food white')}>
            <Image className='color-image' src={FoodWhiteImage} />
            </a>
            <div className='module-subtitle'>White</div>
            <div className='module-description text-center'>White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ModuleTwo

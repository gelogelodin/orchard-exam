import { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FoodRedImage from '../../assets/images/food-red.png'
import FoodGreenImage from '../../assets/images/food-green.png'
import FoodWhiteImage from '../../assets/images/food-white.png'
import './ModuleTwo.scss'

function ModuleTwo() {

  return (
    <>
      
      <Container className="module-two-container" fluid="md">
        <Row>
          <Col xs md="12">
            <div className='module-title color-title'>Taste the Colours</div>
          </Col>
          <Col xs md="4">
            <Image className='color-image' src={FoodRedImage} />
            <div className='module-subtitle'>Red</div>
            <div className='module-description text-center'>Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.</div>
          </Col>
          <Col xs md="4">
            <Image className='color-image' src={FoodGreenImage} />
            <div className='module-subtitle'>Green</div>
            <div className='module-description text-center'>Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours</div>
          </Col>
          <Col xs md="4">
            <Image className='color-image' src={FoodWhiteImage} />
            <div className='module-subtitle'>White</div>
            <div className='module-description text-center'>White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ModuleTwo

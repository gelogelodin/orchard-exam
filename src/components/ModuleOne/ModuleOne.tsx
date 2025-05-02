import { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Food1Image from '../../assets/images/food-1.png'
import Food2Image from '../../assets/images/food-2.png'
import Food3Image from '../../assets/images/food-3.png'
import './ModuleOne.scss'

function ModuleOne() {

  return (
    <>
      <Container className="module-one-container" fluid>
        <Row>
          <Col className='no-padding-right' xs={12} md="4">
            <Image className='full-height' src={Food1Image} />
          </Col>
          <Col className='no-padding-left' xs={12} md="4">
            <div className='mb-2'>
              <Image className='half-height' src={Food2Image} />
            </div>
            <div>
              <Image className='half-height' src={Food3Image} />
            </div>
          </Col>
          <Col xs={12} md="4">
            <div className='module-title'>What Does Cooking <br /> Mean?</div>
            <div className='module-description'>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</div>
            <div className='small-title'>THE PERFECT EGG</div>
            <div className='reminder'>Keep water between 67 and 68°C for a flavourful, tender yolk</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ModuleOne

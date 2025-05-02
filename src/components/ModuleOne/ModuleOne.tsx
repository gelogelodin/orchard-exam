import { Container, Row, Col, Image } from 'react-bootstrap'
import Food1Image from '../../assets/images/food-1.png'
import Food2Image from '../../assets/images/food-2.png'
import Food3Image from '../../assets/images/food-3.png'
import './ModuleOne.scss'

function ModuleOne() {

  function logLink(link:string){
    console.log(link);
  }

  return (
    <>
      <Container className="module-one-container" fluid>
        <Row>
          <Col className='overflow-hidden no-padding-right column-one' xs={12} md="4">
            <a href='#' onClick={() => logLink('food 1')}>
              <Image className='full-height' src={Food1Image} />
            </a>
          </Col>
          <Col className='no-padding-left column-two' xs={12} md="4">
            <div className='mb-2'>
              <a href='#' onClick={() => logLink('food 2')}>
                <Image className='half-height' src={Food2Image} />
              </a>
            </div>
            <div>
              <a href='#' onClick={() => logLink('food 3')}>
                <Image className='half-height' src={Food3Image} />
              </a>
            </div>
          </Col>
          <Col className='column-three' xs={12} md="4">
            <div className='module-title'>What Does Cooking <br /> Mean?</div>
            <div className='module-description'>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</div>
            <a onClick={() => logLink('The Perfect Egg')} href="#" className='small-title'>THE PERFECT EGG</a>
            <div className='reminder'>Keep water between 67 and 68°C for a flavourful, tender yolk</div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ModuleOne

import Carousel from 'react-bootstrap/Carousel';
import "./Star.css"

const Body=()=>
{

return(
    <>

<div className="size">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="r2.JFIF"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="r1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="r3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  
</div>
</>);
}
export default Body;z
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardText,CardSubtitle,CardTitle,CardBody,CardImg,CardGroup,Card} from 'reactstrap';


export default function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/images/home/caraousel1.jpg"
              className="d-block w-100"
              height={400}
              alt="First Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/caraousel2.jpg"
              className="d-block w-100"
              height={400}
              alt="Second Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/images/home/caraousel.jpg"
              className="d-block w-100"
              height={400}
              alt="Third Slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*Steps */}
    <div className="container">

    <center><h1 className="heading">how it <span>works</span></h1></center>
    <div className="row" >
        <div className="col-md-3">
            <img src="/assets/images/step-1.png" alt=""/>
            <h3>choose your favorite food</h3>
        </div>
        <div className="col-md-3">
            <img src="/assets/images/step-2.png" alt=""/>
            <h3>free and fast delivery</h3>
        </div>
        <div className="col-md-3">
            <img src="/assets/images/step-3.png" alt=""/>
            <h3>easy payments methods</h3>
        </div>
        <div className="col-md-3">
            <img src="/assets/images/step-4.png" alt=""/>
            <h3>and finally, enjoy your food</h3>
        </div>
    </div>
</div>

     {/*   card group */}
     
     <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            
          </CardBody>
        </Card>
      </CardGroup>

 
    </>
  );
}

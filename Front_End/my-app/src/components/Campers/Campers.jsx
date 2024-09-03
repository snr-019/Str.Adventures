import React from "react";
import "./Campers.css";
import img from "./img.jpg";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import { MDBCard,MDBCardBody, MDBCol,MDBContainer,MDBIcon,MDBRow,} from "mdb-react-ui-kit";

export default function Test() {
  return (
    <div id="campers-id">
    <MDBContainer style={{paddingBottom:'30px'}}> 
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center" style={{padding:'0px'}}>
          <h1 className="heading_card" style={{paddingBottom:'20px',paddingTop:'30px'}}>Happy Campers Say</h1>
          <p className="heading_d">
          "At Str Adventures, we value your experience above all else. 
           After your recent trip with us, we'd love to hear about your adventure.
           How did you find the overall experience?"</p>
           {/* From the tranquil moments by the campfire to the exhilarating hikes, 
           your feedback helps us ensure every journey with us is memorable and fulfilling.
            Share your thoughts with us, so we can continue to provide you and others with exceptional outdoor experiences."
          </p> */}
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch" id="iqra">
        <MDBCol md="4" className="mb-5 mb-md-0" id="wasif">
          <MDBCard id="testimonial-card" style={{ borderRadius: '30px'}}>
            <div
              className="card-up"
              style={{ backgroundColor: "#1c9987", borderTopLeftRadius: '30px',borderTopRightRadius: '30px'}}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={img2}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody id="express">
              <h4 className="mb-2 subheading_card">Mr Tejasvi Rao</h4>
              <hr />
              <p className="dark-grey-text mt-2 heading_d">
                <MDBIcon fas icon="quote-left" className="pe-2"/>
                Absolutely fantastic experience with STR! From start to finish, their attention to detail and commitment to customer satisfaction were evident.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0" id="wasif">
          <MDBCard id="testimonial-card" style={{ borderRadius: '30px' }}>
            <div
              className="card-up"
              style={{ backgroundColor: "#1c9987",borderTopLeftRadius: '30px',borderTopRightRadius: '30px'}}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img id="khalid"
                src={img1}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody id="express">
              <h4 className="mb-2 subheading_card">Pankaj Tripathi</h4>
              <hr />
              <p className="dark-grey-text mt-2 heading_d">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Choosing Str-Adventures for our vacation was the best decision we made! Their professionalism and dedication to ensuring a memorable trip were truly commendable.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0" id="wasif">
          <MDBCard id="testimonial-card" style={{ borderRadius: '30px'}}>
            <div
              className="card-up"
              style={{ backgroundColor: "#1c9987",borderTopLeftRadius: '30px',borderTopRightRadius: '30px' }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={img}
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody id="express">
              <h4 className="mb-2 subheading_card ">Mohammmad Ali</h4>
              <hr />
              <p className="dark-grey-text mt-2 heading_d">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Str-Adventures has completely exceeded my expectations. From the moment I contacted them to plan my trip, they were attentive and responsive to all my inquiries.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}





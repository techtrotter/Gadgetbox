import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom mt-4'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/home' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/bijoy-laxmi-biswas-cse07/' className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-4'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-2' style={{ color: 'white' }}>
                <MDBIcon icon="gem" className="me-3" style={{ color: 'white' }} />
                About GadgetBox
              </h6>
              <p>
                GadgetBox is your go-to electronics shop for the latest gadgets and tech products. We are committed to delivering exceptional quality and service to our customers.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-2' style={{ color: 'white' }}>Our Services</h6>
              <p>
                Smartphones
              </p>
              <p>
                Laptops
              </p>
              <p>
                Gaming Consoles
              </p>
              <p>
                Accessories
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        © 2024 GadgetBox. All Rights Reserved.
        <a className='text-reset fw-bold p-2' href='https://www.linkedin.com/in/bijoy-laxmi-biswas-cse07/' target="_blank" rel="noopener noreferrer">
          Created by Bijoy Laxmi Biswas
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer;

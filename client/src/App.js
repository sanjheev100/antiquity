import './App.css'
import React, { useRef, useState } from 'react'
import ContactusForm from './components/ContactusForm'

function App() {
  const contactRef = useRef(null)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <div className='logo'>
        <i aria-hidden='true'>
          <span>Antiquity Consulting</span>
        </i>
      </div>
      <a className='menu-toggle rounded' href='#'>
        <i className='fa fa-bars'></i>
      </a>
      <nav id='sidebar-wrapper'>
        <ul className='sidebar-nav'>
          <li className='sidebar-brand'>
            <a className='smooth-scroll' href='#pagetop'></a>
          </li>
          <li className='sidebar-nav-item'>
            <a className='smooth-scroll' href='#Banner'>
              Home
            </a>
          </li>
          <li className='sidebar-nav-item'>
            <a className='smooth-scroll' href='#About'>
              About
            </a>
          </li>
          <li className='sidebar-nav-item'>
            <a className='smooth-scroll' href='#Services'>
              Services
            </a>
          </li>
          <li className='sidebar-nav-item'>
            <a className='smooth-scroll' href='#Contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id='Banner' className='content-section'>
        <div className='container content-wrap text-center'>
          <h2 className='text-white'>Welcome to</h2>
          <h3>
            <em className='text-white'>Antiquity Cloud Based Service</em>
          </h3>
          <a className='btn btn-primary btn-xl smooth-scroll' href='#About'>
            Find Out More
          </a>
        </div>
        <div className='overlay'></div>
      </section>

      <section id='About' className='content-section'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='block-heading'>
                <h2>About Us</h2>
              </div>
              <p className='lead'>
                Antiquity Team helps customers migrate, run, and operate mission
                critical workloads on AWS and Azure with security, scalability,
                and efficiency baked-in. Our Cloud Reliability Platform combines
                world-class engineering talent, policy-as-code, and integrated
                tooling to enable customers to confidently meet compliance
                regulations, security requirements, cost control, and high
                availability. Together with our team of dedicated certified
                engineers, we ensure our customers’ success across every stage
                of the Cloud Adoption Framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='Services' className='content-section text-center'>
        <div className='container'>
          <div className='block-heading'>
            <h2>What We Offer</h2>
            {/* <p>Leverage our experts to build a foundation for cloud success.</p> */}
          </div>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <div className='service-box'>
                <div className='service-icon yellow'>
                  <div className='front-content'>
                    <i className='fa fa-globe' aria-hidden='true'></i>
                    <h3>SAP Cloud – Certified by SAP</h3>
                  </div>
                </div>
                <div className='service-content'>
                  <h3>SAP Cloud – Certified by SAP</h3>
                  <p>
                    Host your HANA & Non-HANA workloads on certified SAP
                    platform, adhering to all relevant compliances.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='service-box'>
                <div className='service-icon orange'>
                  <div className='front-content'>
                    <i className='fa fa-suitcase'></i>
                    <h3>Public cloud consulting services</h3>
                  </div>
                </div>
                <div className='service-content'>
                  <h3>Public cloud consulting services</h3>
                  <p>
                    Enjoy the ease of use and maintenance, flexible pricing, and
                    near-unlimited scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='service-box '>
                <div className='service-icon red'>
                  <div className='front-content'>
                    <i className='fa fa-male' aria-hidden='true'></i>
                    <h3>Private cloud consulting services</h3>
                  </div>
                </div>
                <div className='service-content'>
                  <h3>Private cloud consulting services</h3>
                  <p>
                    Leverage superior security and privacy and zero latency for
                    local apps.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='service-box'>
                <div className='service-icon grey'>
                  <div className='front-content'>
                    <i className='fa fa-users'></i>
                    <h3>Hybrid cloud consulting services</h3>
                  </div>
                </div>
                <div className='service-content'>
                  <h3>Unstick Cloud Migration & Modernization Projects</h3>
                  <p>
                    Combine the best of two worlds: public and private clouds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='content-section text-center' id='Portfolio'>
        <div className='container'>
          <div className='block-heading'>
            {/* <h2></h2> */}
            <p></p>
          </div>
          <div className='portfolio-wrapper clearfix'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4 d-flex align-items-stretch'>
                  <div className='card '>
                    <div className='card-body text-center'>
                      <img
                        style={{ width: 50, height: '50px' }}
                        className='content-image mb-2'
                        src='assets/images/cloudPc.png'
                      />

                      <p className='card-text'>
                        <strong>Cloud Adoption Strategy </strong> to
                        plan,prioritize and scedule IT infrastructure
                        migration,cloud native app and cloud data warehouse
                        development
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 d-flex align-items-stretch'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <img
                        style={{ width: 50, height: '50px' }}
                        className='content-image mb-2'
                        src='assets/images/feasibility.png'
                      />
                      <p className='card-text'>
                        <strong>Feasibility assessment</strong> of your cloud
                        initiatives that includes Performance, TCO and ROI
                        estimation
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 d-flex align-items-stretch'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <img
                        style={{ width: 50, height: '50px' }}
                        className='content-image mb-2'
                        src='assets/images/csuite.png'
                      />
                      <p className='card-text'>
                        <strong>Consultation for the C-suite</strong> to help
                        understand that benefits and challenges of cloud
                        migration or cloud-native development, define the skills
                        and trainings required for the project's success,choose
                        the right cloud services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className='container'>
              <div className='row'>
                <div className='col-lg-4 d-flex align-items-stretch'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <img
                        style={{ width: 50, height: '50px' }}
                        className='content-image'
                        src='assets/images/cloud.png'
                      />
                      <p className='card-text'>
                        <strong>
                          Design and devlopment of cloud apps and data
                          warehouses
                        </strong>{' '}
                        including IT infrastructure design and CI/CD pipelines
                        design
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 d-flex align-items-stretch'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <img
                        style={{ width: 50, height: '50px' }}
                        className='content-image mb-2'
                        src='assets/images/cloud_upload.png'
                      />
                      <p className='card-text'>
                        <strong>
                          Legacy infrastructure migration to the cloud
                        </strong>{' '}
                        via rehosting,replatforming,refactoring and
                        reinfrastructure
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 d-flex align-items-stretch'>
                  <div className='card'>
                    <div className='card-body text-center'>
                      <img
                        style={{ width: 50, height: '50px' }}
                        className='content-image mb-2'
                        src='assets/images/kt.png'
                      />
                      <p className='card-text'>
                        <strong>Knowledge transfer</strong> to IT support teams
                        or individuals by our indstry experienced domain
                        experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <div className='container'>
              <div className='row'>
                <div
                  className='card w-100'
                  style={{ width: '18rem', background: '#21459C' }}
                >
                  <div className='card-body'>
                    <h5 className='card-title text-white'>
                      Talk to our cloud experts
                    </h5>
                    <p className='card-text  text-white'>
                      contactRef Learn how you can leverage Antiquity Cloud
                      experts to build a foundation for success on the cloud
                    </p>

                    <div>
                      <button
                        className='smooth-scroll btn btn-success'
                        onClick={() =>
                          contactRef.current?.scrollIntoView({
                            behavior: 'smooth',
                          })
                        }
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='Contact' className='content-section'>
        <div className='container' ref={contactRef}>
          <div className='block-heading'>
            <h2>Contact Us</h2>
            <p>
              Learn how you can leverage Antiquity Cloud experts to build a
              foundation for success on the cloud
            </p>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
              <div className='contact-wrapper'>
                <div className='address-block border-bottom'>
                  <h3 className='add-title'>Email</h3>
                  <div className='c-detail'></div>
                  <div className='c-detail'>
                    <span className='c-icon'>
                      <i className='fa fa-envelope' aria-hidden='true'></i>
                    </span>
                    <span className='c-info'>email@yourdomain.com</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='container'> */}
            <div className='col-sm-12 col-md-6 col-lg-6'>
              {error && (
                <p
                  className='error'
                  style={{
                    background: '#fff0f0',
                    color: '#ff0000',
                    padding: '10px',
                  }}
                >
                  {error}
                </p>
              )}

              {success && (
                <p
                  className='success'
                  style={{
                    background: '#e7f7e2',
                    color: '#0cf327',
                    padding: '10px',
                  }}
                >
                  {success}
                </p>
              )}
              <div className='form-wrap'>
                <ContactusForm
                  setLoading={setLoading}
                  loading={loading}
                  setSuccess={setSuccess}
                  setError={setError}
                />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      <footer className='footer text-center'>
        <div className='container'>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <a
                className='social-link rounded-circle text-white mr-3'
                // href='javascript:void(0)'
              >
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a
                className='social-link rounded-circle text-white mr-3'
                // href='javascript:void(0)'
              >
                <i className='fa fa-twitter' aria-hidden='true'></i>
              </a>
            </li>
            <li className='list-inline-item'>
              <a className='social-link rounded-circle text-white'>
                <i className='fa fa-linkedin' aria-hidden='true'></i>
              </a>
            </li>
          </ul>
          <p className='text-muted small mb-0'>
            Copyright © Antiquity Consulting 2022
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

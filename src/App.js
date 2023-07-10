
import React, { useEffect, useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { color, motion } from 'framer-motion';



function App() {

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wg4j37t', 'template_m6o6thk', form.current, 'A6C69JLoTd1CoPmv-')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          setFormData({...formData, name: '', email: '', subject: '', message: ''})
          Swal.fire('Message Sent!','','success');
          
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
     <motion.div  animate={{ x: 100 }}
  transition={{ delay: 1, }}/>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="services">JATIN SIDANA</a>
            <motion.button  initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
   }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1" />
            </motion.button>
            <div className="collapse navbar-collapse navbar-dark " id="navbarResponsive" >
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item" ><a className="nav-link" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Masthead*/}
        <header className="masthead" id="me">
          <div className="container">
          <div className="masthead-heading text-uppercase">Website Developer</div>
            <div className="masthead-subheading">I design Websites and I love what I do.</div>
            <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
          </div>
        </header>
        {/* Services*/}
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted">Hi, I’m JATIN. Nice to meet you.
              </h3>
              <p className="section-subheading text-muted">you can call me Website Developer working as a freelancer from past few years.<br/>
              we deal in :-  </p>
            
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">E-Commerce Website</h4>
                <p className="text-muted">We design E-Commerce Website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location..</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Business Website</h4>
                <p className="text-muted">Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-lock fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Portfolio Website</h4>
                <p className="text-muted">For representation of work you have created, as well as your skills and experiences, we design online portfolio website.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Grid*/}
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">My Recent Works</h2>
              <h3 className="section-subheading text-muted">Here are a few past design projects I've worked on. </h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-4">
                {/* Portfolio item 1*/}
                <div className="portfolio-item">
                  <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <video className="img-fluid" id='vid1' src="assets/img/steelvideo.mp4" alt="..."  playsInline
          loop
          controls autoPlay muted/>
                  </a>
                  
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Maa Bhawani Steel Works</div>
                    <div className="portfolio-caption-subheading text-muted" ></div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                {/* Portfolio item 2*/}
                <div className="portfolio-item">
                  <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <video className="img-fluid" id='vid2' src="assets/img/textilevideo.mp4" alt="..."  playsInline
          loop
          controls autoPlay muted/>
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">SS Textiles</div>
                    <div className="portfolio-caption-subheading text-muted"><a href="https://shalluproducts.com/" > shalluproducts.com</a></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 mb-4">       
  {/* Portfolio item 3*/}
              <div className="portfolio-item">
                  <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <video className="img-fluid" id='vid3' src="assets/img/exercisevideo.mp4" alt="..." playsInline
          loop
          controls autoPlay muted/>
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Gym Exercise</div>
                    <div className="portfolio-caption-subheading text-muted"><a href="https://exercisebyjatin.netlify.app/" > gymexersice.com</a></div>
                  </div>
                </div>
              </div>  

              <div className="col-lg-4 col-sm-6 mb-4">
                {/* Portfolio item 6*/}
                <div className="portfolio-item">
                  <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <video className="img-fluid" id='vid3' src="assets/img/travelvideo.mp4" alt="..."  playsInline
          loop
          controls autoPlay muted
          />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Om Travels</div>
                    <div className="portfolio-caption-subheading text-muted"><a href="https://omtravels.online/" > omtravels.online</a></div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About*/}
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Since beginning my journey as a freelance designer , I've worked for agencies, and business to recoganize them digitally. I'm quietly confident, naturally curious, and perpetually working on improving my skills.</h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4> 2022-2024</h4>
                    <h5 className="subheading">Masters In Computer Applications</h5>
                  </div>
                  <div className="timeline-body"><p className="text-muted">GURU NANAK DEV UNIVERSITY<br/>
                  Punjab,Amritsar <br/>
                  <h3> Key Learnings :-</h3>
                     
                    Web Technologies <br/>
                    Machine Learning <br/>
                    Data Structure And Algorithms <br/>
                    Cyber Security
                                            </p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2019-2022</h4>
                    <h4 className="subheading">Bacholors In Computer Applications</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">
                  GURU NANAK DEV UNIVERSITY<br/>
                  Punjab,Amritsar <br/>
                  <h3> Key Learnings :-</h3>
                     
                    Operating System <br/>
                    Artifical Intelegence <br/>
                    Programing in c,c++,java<br/>
                    Digital Marketting
                    </p></div>
                </div>
              </li>
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2017-2019</h4>
                    <h4 className="subheading">Upper secondary education </h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">
                  Punjab,Amritsar <br/>
                  <h3> Subjects :-</h3>
                     
                   Mathematics <br/>
                    Economics <br/>
                    Computer Applications<br/>
                    </p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Till 2017</h4>
                    <h4 className="subheading">Lower secondary education</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">
                  Punjab,Amritsar <br/>
                  <h3> Languages :-</h3>
                     
                    English <br/>
                    Hindi <br/>
                    Punjabi<br/>
                    </p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Lets
                    <br />
                    do
                    <br />
                    it
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
       
        {/* Contact*/}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <p style={{color: 'white'}}> Interested in working together?<br/> We should queue up a time to chat. I’ll buy the coffee.</p>
              
            </div>
<section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Contact us</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4" style={{color: '#ffc800'  }}>Get in touch</h3>
                      <div id="form-message-warning" className="mb-4" /> 
                      
                      <form method="POST" id="contactForm" name="contactForm"ref={form} onSubmit={sendEmail}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" value={formData.name} onChange={e => { setFormData({...formData, name: e.target.value}); }} name="name" id="name" placeholder="Name" /></div>
                          </div>
                          <div className="col-md-12"> 
                            <div className="form-group">
                              <input type="email" className="form-control" value={formData.email} onChange={e => { setFormData({...formData, email: e.target.value}); }} name="email" id="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="number" className="form-control" value={formData.subject} onChange={e => { setFormData({...formData, subject: e.target.value}); }} name="subject" id="subject" placeholder="number" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea name="message" className="form-control" value={formData.message} onChange={e => { setFormData({...formData, message: e.target.value}); }} id="message" cols={30} rows={7} placeholder="Message" defaultValue={""}  />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                              <div className="submitting" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                      <h3 className="mb-4 mt-md-4">Contact us</h3>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker" />
                        </div>
                        <div className="text pl-3">
                          <p><span>Address:</span> Amritsar,Punjab</p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone" />
                          
                        </div>
                        <div className="text pl-3">
                          <p><span>Phone:</span> <a href="tel://9876271597" style={{color :'black'}}>98762-71597</a></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane" />
                        </div>
                        <div className="text pl-3">
                          <p><span>Email:</span> <a href="jatinsadana1998@gmail.com"style={{color :'black'}}>jatinsadana1998@gmail.com</a></p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          </div>
        </section>
        {/* Footer*/}
        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">JATINSidana © 2023</div>
              <div className="col-lg-4 my-3 my-lg-0">
                <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/home" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/" aria-label="instagram"><i className="fa-brands fa-instagram" /></a>
                <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/jatin-sidana-097161215/" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              
              </div>
           
            </div>
          </div>
        </footer>
        {/* Portfolio Modals*/}
        {/* Portfolio item 1 modal popup*/}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">MAA BHAWANI STEEL WORKS</h2>
                      <p className="item-intro text-muted">ECommerce website.</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/steel.png" alt="..."  /> 
                      <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                        <i className="fas fa-xmark me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 2 modal popup*/}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">shallu products</h2>
                      <p className="item-intro text-muted"> Portfolio Website</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/textiles.png" alt="..." />
                      <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                        <i className="fas fa-xmark me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Om Travels</h2>
                      <p className="item-intro text-muted">Personal Website</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/travel.png" alt="..." />
                      
                      
                      <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                        <i className="fas fa-xmark me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 3 modal popup*/}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Exercise By jatin</h2>
                      <p className="item-intro text-muted">exersice Website.</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/exersice.jpg" alt="..."  /> 
                      <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                        <i className="fas fa-xmark me-1" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default App;

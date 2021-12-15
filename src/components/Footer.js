import React from "react";
import "./footer.css";

const  Footer = () =>{

	return(
<div className="container wv-100">
  <footer className="row row-cols-md-4 row-cols-1 py-5 my-5 footer-border">
    <div className="col my-3">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
      </a>
      <p className="text-muted">&copy; 2021</p>
    </div>

    <div className="col my-3">

    </div>

    <div className="col my-3">

    </div>


    <div className="col my-3">
      <h5>Section</h5>
      <ul className="nav flex-column ">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>
  </footer>
</div>
	
	)
}


export default Footer;
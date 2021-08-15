import React from "react";
import imgLogo from "../assets/logoRightText-01.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import {FaGithub,FaTwitter,FaFacebook,FaInstagram,FaLinkedin,FaGoogle} from "react-icons/fa";

class Footer extends React.Component {
  render() {
    return (
<>
<footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section className="mb-4">
      
    </section>

    

    {/* <section className="mb-4">
      <h1 class=''>
      Welcome to Planet ZOO Application
      </h1>
    </section> */}
{/* 
    <section className="">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </section> */}
  </div>

  <div className="text-center p-3">
    <img 
                alt="logo"
                src={imgLogo}
                width="300px"
              />
              
    <br></br>
   Contact Us at :
    <br></br>
    {/* <a className="text-white" href="/aboutus">About Us</a> */}
    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaFacebook/><i className="fab fa-facebook-f"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaTwitter/><i className="fab fa-twitter"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaGoogle/><i className="fab fa-google"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaInstagram /><i className="fab fa-instagram"></i
      ></a>
      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaLinkedin/> <i className="fab fa-linkedin-in"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><FaGithub/><i className="fab fa-github"></i
      ></a>
      <br></br>
      © PLANET ZOO
  </div>
</footer>
</>
    );
  }
}
export default Footer;


import React, {Component} from 'react';
import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap';
import '../assets/style/Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'; 

class NavBar extends Component {
    render(){
      library.add(faCheckSquare)
        return (
          <React.Fragment>
            <Navbar id="Navbar">
               <Nav className="ml-auto" >
            <Nav.Link  href="#home2">تائید و پرداخت
            <FontAwesomeIcon icon="check-square" id="fontAwesome" />
         
            </Nav.Link>
              <Nav.Link href="#home3" >خدمات همراه
              <FontAwesomeIcon icon="check-square" id="fontAwesome" />
              </Nav.Link>
              <Nav.Link href="#features" style={{border:'none'}}>اطلاعات مسافر
              <FontAwesomeIcon icon="check-square" id="fontAwesome" />
              </Nav.Link>
              <Nav.Link href="#pricing">
              انتخاب پرواز
              <FontAwesomeIcon icon="check-square" id="fontAwesome" />
              </Nav.Link>
              <Nav.Link href="#pricing6" >جستجو پرواز
              <FontAwesomeIcon icon="check-square" id="fontAwesome" />
              </Nav.Link>
                 </Nav>
          </Navbar>
          
          </React.Fragment>
        );
    }
}
export default NavBar;
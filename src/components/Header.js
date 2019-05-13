import React, { Component } from 'react'
import{ Navbar ,Nav }from 'react-bootstrap';
 import '../assets/style/Header.scss'

export default class Header extends Component {

    render() {
        return (
            <React.Fragment>
    <Navbar  expand="lg" id="Navbar">
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="width-nav">
               <Nav.Link href="#search" >جستجوی پرواز</Nav.Link>
               <Nav.Link href="#choice" >انتخاب پرواز</Nav.Link>
               <Nav.Link href="#information">اطلاعات پرواز</Nav.Link>
               <Nav.Link href="#service">خدمات همراه</Nav.Link>
               <Nav.Link href="#submition">تایید و پرداخت</Nav.Link>      
          </Nav>   
   </Navbar.Collapse>
   </Navbar>
</React.Fragment>
        );
    }
}
import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { AppBar } from '@material-ui/core';
import Bg from './assets/img/bg.jpg';
import { MDBFooter, MDBInput, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer, MDBTypography } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
              author:'',
              text: ''
            },
            time: '',
            tgl: '',
            curHr: '',
            isOpen: false
        };
        
    }

    componentDidMount(){
        this.getData();
        this.timerID = setInterval(
            () => this.time(),
             1000);
        this.tglID = setInterval(
            () => this.tgl(),
            1000);
        this.tglID = setInterval(
            () => this.curHr(),
            1000);
    }



    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    time = () =>{
        var date = new Date();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();

        if (menit < 10){
            menit = "0" + menit
        }
        var t_str = jam + ":" + menit + ":" + detik + " ";
        if(jam > 11){
            t_str += "PM";
        } else {
            t_str += "AM";
        }
        this.setState({ time: t_str })
    };

    curHr = () =>{
      var date = new Date()
      var curHr = date.getHours()

      if (curHr < 12) {
        this.setState({ curHr: "Good Morning"})
      } else if (curHr < 18) {
        this.setState({ curHr: "Good Afternoon"})
      } else {
        this.setState({ curHr: "Good Evening"})
      }
    }

    getData(){
      axios.get('https://type.fit/api/quotes').then(res=>{
          var random = res.data[Math.floor(Math.random() * res.data.length)];
          this.setState({
            data:{ author: random.author, text:random.text}
          });
      });
  }

    tgl = () =>{
      var date = new Date();
      var weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";
      var hari = weekday[date.getDay()];
      var tgl = date.getDate();
      var bulan = date.getMonth()+1;
      var tahun = date.getFullYear();
      var final = hari +", "+ tgl + "/" + bulan + "/" + tahun;

      this.setState({ tgl: final })
    };

    render(){
        console.log(this.state.data.author);
        return(
          <>
            <div>
                <MDBNavbar color="elegant-color-dark" fixed="top" dark expand="md" scrolling transparent>
                  <MDBNavbarBrand>
                    <strong className="white-text text-center">Muhammad Syahril</strong>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler onClick={this.toggleCollapse} />
                  <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>                                     
                      <MDBNavItem>    
                        <MDBNavbarBrand>                        
                          <a id="socmed" href="https://instagram.com/mhmd_syhrl_"><MDBIcon size="2x" icon="instagram" /></a>                                                
                        </MDBNavbarBrand>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavbarBrand>                        
                          <a id="socmed" href="https://api.whatsapp.com/send?phone=6281251416220"><MDBIcon size="2x" icon="whatsapp" /></a>
                        </MDBNavbarBrand>                    
                      </MDBNavItem> 
                      <MDBNavItem> 
                        <MDBNavbarBrand id="socmed">                       
                          <a id="socmed" href="https://www.facebook.com/aril.vandisorder"><MDBIcon size="2x" icon="facebook" /></a>
                        </MDBNavbarBrand>
                      </MDBNavItem>
                    </MDBNavbarNav>                  
                  </MDBCollapse>
                </MDBNavbar>
            </div>            
            <div className="content">
                <MDBContainer fluid>
                  <MDBTypography tag="h2" variant="display-1" className="text-center" id="typography">{this.state.time}</MDBTypography>
                  <MDBTypography tag="h2" variant="display-3" className="text-center" id="typography1">{this.state.curHr}, Aviva Putri Humaira</MDBTypography>
                  <MDBTypography tag="h3" variant="display-4" className="text-center" id="typography2">{this.state.tgl}</MDBTypography>                  
                </MDBContainer>
            </div>
            <div>
              <MDBFooter id="footer">
                <p id="footer-text" className="text-center"> " {this.state.data.text} " - {this.state.data.author} </p>                
              </MDBFooter>
            </div>

         </>
        )
    }
}

export default Home;
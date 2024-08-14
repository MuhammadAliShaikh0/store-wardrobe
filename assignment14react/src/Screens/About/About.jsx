import React from "react"
import Footer from "../../Components/Footer/Footer";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';

import "./About.css"

const About = ()=>{
    return(
        <div>
        <div className="ab">
          <h1 className="ab1">About Us</h1>
        </div>
        <div className="container">
        <button className="but"><LocalShippingOutlinedIcon/>   Express Delivery</button>
        <button className="but"><LocationOnOutlinedIcon/> Order Tracking</button>
        <button className="but"><DiscountOutlinedIcon/>Regular Discounts</button>
      </div>
        <Footer/>   
              </div>
    )
}

export default About;
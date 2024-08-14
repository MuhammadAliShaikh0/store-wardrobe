import React from "react";
import { Link } from "react-router-dom";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import "./Home.css"
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Card/Cards"
import { productData } from "../../Components/Card/data";

const Home = () => {
  return (
    <div>
      <div className="intro">
      
        <div className="intro-content">
          <p className="intro1">Summer Collection</p>
          <h1 className="intro2">Introducing <br /> New Arrivals</h1>
          <p className="intro3">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut elit tellus, luctus nec ullamcorper mattis,<br /> pulvinar dapibus leo.</p>
          {/* <button className="intro4"><Link to="/all-products">VIEW COLLECTION</Link></button> */}
          <button className="intro4">
      <Link to="/all-products" className="intro4-link">VIEW COLLECTION</Link>
    </button>   
        </div>
      </div>
      <div className="shop">
       <div><FormatQuoteIcon/></div>
        <h1>Shopping is cheaper than therapy.</h1>
        <div className="lin">____________<p>OnlineWardrobe</p>
        </div>
        </div>
     
       <div style={{ textAlign: "center" }}>
      {productData.slice(0, 20).map((e, i) => {
        return (
          <div style={{ display: "inline-block", margin: "10px" }} key={i}>
            <Cards
              id={e.id}
              title={e.title}
              desc={e.description}
              image={e.image}
              category={e.category}
              rating={e.rating.rate}
              price={e.price}
            />
          </div>
        );
      })}
    </div>
      
      <div className="container">
        <button className="but"><LocalShippingOutlinedIcon/>   Express Delivery</button>
        <button className="but"><LocationOnOutlinedIcon/> Order Tracking</button>
        <button className="but"><DiscountOutlinedIcon/>Regular Discounts</button>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

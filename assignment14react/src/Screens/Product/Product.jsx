import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../Components/Card/data";
import ResponsiveAppBar2 from "../../Components/Navbar/Navbar2";
import Footer from "../../Components/Footer/Footer";
import "./Product.css";

const Product = () => {
  const { id } = useParams();

  const filterData = productData.filter((e) => e.id === parseInt(id));
  const relatedProducts = productData.filter(
    (e) => e.category === filterData[0].category && e.id !== parseInt(id)
  );

  return (
    <div>
      
      {filterData.map((e, i) => (
        <div key={i} className="product-container">
          <div className="product-image">
            <img src={e.image} alt={e.title} />
          </div>
          <div className="product-details">
            <h1 className="product-title">{e.title}</h1>
            <h3 className="product-category">{e.category}</h3>
            <p className="product-description">{e.description}</p>
            <p className="product-price">${e.price}</p>
            <div className="product-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < Math.round(e.rating.rate) ? "star filled" : "star"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      \
      <Footer />
    </div>
  );
};

export default Product;

import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Cards from "../../Components/Card/Cards";
import { productData } from "../../Components/Card/data";
import "./AllProduct.css";

const AllProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const categories = ["All Products", ...new Set(productData.map(product => product.category))];
  const filteredProducts = selectedCategory === "All Products"
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return (
    <div className="all-product-container">
        <h1 className="ap">All Products</h1>
      <div className="dropdown-section">
        <label htmlFor="category-dropdown" className="dropdown-label">Select Category:</label>
        <select
          id="category-dropdown"
          className="category-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div style={{ textAlign: "center" }}>
        
        <div className="product-cards">
          {filteredProducts.slice(0, 20).map((e, i) => (
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProduct;

import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="logo-section">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAA8CAMAAAA5dyoZAAAAFVBMVEX///////////////////////////9nSIHRAAAABnRSTlOx7m4AOhdVV2VxAAADGklEQVRo3sVa25bEIAgLAfv/n7wPM512q1x03LM+tlZDgFhFqNOaEQAA0pr+Y8PwqREix9lEQPPsiFvWqeXvMYJ3gbsaOGLSRl1vH6mqKv0OpqoK97WMEBq8SWWEkSFCS6yAqqr537P3ckM0obB3s6QUxhRFU0rrEDJ22nHAJkgUK1AUDcBnpsQEejQiniClUDIXzAH8fHcL3BBATlESxTeEJketodVIpBYospQKTAPsINpamlSU5o6w1QF2jkagNMkgWQxcCIsxOIY4tC5VGot5OSk8Ec4BvAx0FeelNPxSaS6EnAT4BhCQmKWJtMJqcyGcCsKRn/lHSvNBiGO+MUwWfrkg4/ffly0AfJBof6M0J8IVCmMSdynNG6HJsYFE+QuleSPksdbMS5aa0qDoHqwkciLbKClNdWCs5Unnixtnr+fYoTQvhJGTRaTs5s+c/DJNnqt+YAystUYUs/mctKQ0UQw8DXf7fnq6uY7h3zYrFLGqYqrw5r9Fmdtl9LedLqMWrzby3FCChSBjdbDzu4xC1ClUoJTxpYhRk81KEyFkZcvZb003K02E0JYQtkxppE0pTYDw4UCrGqwFCieUZj+HujtNynGICYSp0hx1pYnU5ldnZ9LhgLsp9PWQOYVDhFuVJlxTbhA5N+LySRPH4/l7+ffhh2HOZn+hb/FJFLxz7OBnHSQhkzZrFjc45rRreRPgJIpLYnaGBbcWsGkXkJJo8XvPXsXqZtR1suNHJCQzqKdwr5PHySDJ35w/GnTVzYjqSDFFDTMO0UUSxQKEXTJIcmyLuGq2RCLCYhyzzUdNaT5nX9wahYNkQBKpSCuP2JjIIxItjtTQXMyfs+c+fkJAQjIL1Vtu9fHwpCl43yr1ZW7L455EJpHKWgV8JhQrAK9kcChiMWKg8xCppYakO2r2olrMnnPxTbaRkJwlHWaqy1MAT5MtJjkdDxO3FkaF0VS2kURqGjKPo96ERqHONCZRhopudfVsRPhmL94gjrImhazrR/Aui8zjU7WEIsrajaDWb58EaxeXkjRotobwvFMlIiIC4F/vVf0AKJGr395PB6gAAAAASUVORK5CYII=" width="140" alt="Logo" />
            <p className="description">
              Transform your style with OnlineWardrobe - where fashion meets
              elegance. Discover the latest trends and timeless classics to
              elevate your wardrobe every day.
            </p>
          </div>
          <div className="links-section">
            <div className="link-group">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-products">All Products</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Shop Collections</h3>
              <ul>
                <li>Men's Jeans</li>
                <li>Women's Tops</li>
                <li>Hoodies</li>
                <li>Jackets</li>
                <li>Shoes</li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Shop Collections</h3>
              <ul>
                <li>Men's Jeans</li>
                <li>Women's Tops</li>
                <li>Hoodies</li>
                <li>Jackets</li>
                <li>Shoes</li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Shop Collections</h3>
              <ul>
                <li>Men's Jeans</li>
                <li>Women's Tops</li>
                <li>Hoodies</li>
                <li>Jackets</li>
                <li>Shoes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <span>Copyright &copy; 2024 OnlineWardrobe</span>
        </div>
        
        <div className="developer">
          <span>
            Developed by{" "}
            <a
              className="developer-link"
              target="_blank"
              href="https://www.github.com/MuhammadAliShaikh0"
            >
              MUHAMMAD ALI
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import imageProductMobile from "../assets/image-product-mobile.jpg";
import imageProductDesktop from "../assets/image-product-desktop.jpg";

function App() {
  return (
    <div>
      <div className="card">
        <div>
          <img
            className="prodImgMobile"
            src={imageProductMobile}
            alt="product image"
          />
          <img
            className="prodImgDesktop"
            src={imageProductDesktop}
            alt="product image"
          />
        </div>
        <div className="tag">Perfume</div>
        <div className="productName">Gabrielle Essence Eau De Parfum</div>
        <div className="description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </div>
        <div className="priceSection">
          <div className="currentPrice">$149.99</div>
          <div className="originalPrice">$169.99</div>
        </div>
        <button className="addToCartButton">
          <img
            className="cartIcon"
            src="../src/assets/icon-cart.svg"
            alt="cart icon"
          />{" "}
          Add to Cart
        </button>
      </div>

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/avpprog" target="_blank">
          blackFistKnight
        </a>
        .
      </div>
    </div>
  );
}

export default App;

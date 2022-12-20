import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71nqaV173zL._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12458"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses
            by Eric Ries"
            price={100}
            image="https://images-eu.ssl-images-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="12459"
            title="Shangrila Designer Women's Paithani Silk Saree with Blouse Piece (5612_Gold, Rose Gold)"
            price={1579}
            image="https://m.media-amazon.com/images/I/81B9+vvLclL._UY550_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12460"
            title="OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)"
            price={18999}
            image="https://m.media-amazon.com/images/I/71V--WZVUIL._SX569_.jpg"
            rating={5}
          />
          <Product
            id="12461"
            title="boAt Wave Lite Smartwatch with 1.69 HD Display,Activity Tracker"
            price={69990}
            image="https://m.media-amazon.com/images/I/61KPI-ZFbvL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="12462"
            title="2021 Apple MacBook Pro (16-inch/41.05 cm, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Silver"
            price={225990}
            image="https://m.media-amazon.com/images/I/61Y30DpqRVL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="12463"
            title="Shaftesbury London Formal Blazer - Bl1black"
            price={1799}
            image="https://m.media-amazon.com/images/I/61mDlpzIsfS._AC_UL480_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

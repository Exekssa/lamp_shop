import React, { useState, useEffect } from "react";
import "./Products.css";
import Card from "../../Card/Card";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Cart from "../../Cart/Cart";
import Button from "../../Button/Button";
import { useCart } from "../../cartContext";

import productsData from "../../products.json";

const Product = () => {
  window.scrollTo(0, 0);

  const { cartItems, addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const uniqueBrands = [
    ...new Set(productsData.map((product) => product.brand)),
  ];
  const uniqueColors = [
    ...new Set(productsData.map((product) => product.color)),
  ];
  const uniquePrices = [
    ...new Set(
      productsData.map((product) => parseFloat(product.price.replace("$", "")))
    ),
  ];

  const [filters, setFilters] = useState({
    brand: "all",
    color: "all",
    price: [Math.min(...uniquePrices), Math.max(...uniquePrices)],
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const [products, setProducts] = useState([]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleSortChange = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filters, sortOrder]);

  const filteredProducts = productsData
    .filter((product) => {
      const brandFilter =
        filters.brand === "all" || filters.brand === product.brand;
      const colorFilter =
        filters.color === "all" || filters.color === product.color;
      const priceFilter =
        filters.price[0] <= parseFloat(product.price.replace("$", "")) &&
        parseFloat(product.price.replace("$", "")) <= filters.price[1];

      return brandFilter && colorFilter && priceFilter;
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

  const buttonText = sortOrder === "asc" ? "Sort descending" : "Sort Ascending";

  return (
    <div className="productsContainer">
      <div className="filterPanel">

        <div className="mainOptionContainer">
        <div className="optionContainer">
          <label htmlFor="brand">Brand:</label>
          <select
            id="brand"
            value={filters.brand}
            onChange={(e) => handleFilterChange("brand", e.target.value)}
          >
            <option value="all">All</option>
            {uniqueBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="optionContainer">
          <label htmlFor="color">Color:</label>
          <select
            id="color"
            value={filters.color}
            onChange={(e) => handleFilterChange("color", e.target.value)}
          >
            <option value="all">All</option>
            {uniqueColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        </div>

        
        <label htmlFor="price" className="priceLabel">Price:</label>
        <Slider
          min={Math.min(...uniquePrices)}
          max={Math.max(...uniquePrices)}
          step={1}
          range
          value={filters.price}
          onChange={(value) => handleFilterChange("price", value)}
          trackStyle={{ backgroundColor: "#64B977" }}
          handleStyle={{
            borderColor: "#64B977",
            height: 15,
            width: 15,
            backgroundColor: "#22FF9B",
          }}
        />

        <Button buttonText={buttonText} onClick={handleSortChange} />
      </div>
      <div className="cardСontainer">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;

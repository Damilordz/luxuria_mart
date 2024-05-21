import ItemCard from "../components/ItemCard"; // Import the ItemCard component
import TotalPrice from "../components/TotalPrice"; // Import the TotalPrice component
import products from "../productData"; // Import the product data
import { useState } from "react"; // Import the useState hook from React

// Products.js
function Products() {
  // State for keeping track of the total price
  const [totalPrice, setTotalPrice] = useState(0);

  // State for keeping track of the selected colors for each product
  const [selectedColors, setSelectedColors] = useState(
    products.map((product) => product.colors[0])
  );

  // Function to handle the "Buy" button click
  const handleBuy = (price) => {
    setTotalPrice(totalPrice + price);
  };

  // Function to handle the color change for a product
  const handleColorChange = (index, color) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[index] = color;
    setSelectedColors(newSelectedColors);
  };

  return (
    <div className="products-wrap my-5">
      <div className="product-row-1">
        <div className="product-title">
          <h2>Latest & Greatest</h2>
          <p>Here you can find a variety of products.</p>
        </div>
        {/* Render the TotalPrice component with the current total price */}
        <TotalPrice totalPrice={totalPrice} />
      </div>

      <div className="product-list">
        {/* Map over the products and render ItemCard components */}
        {products.map((product, index) => {
          return (
            <ItemCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              images={product.images}
              colors={product.colors}
              selectedColor={selectedColors[index]}
              onColorChange={(color) => handleColorChange(index, color)}
              onBuy={() => handleBuy(product.price)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
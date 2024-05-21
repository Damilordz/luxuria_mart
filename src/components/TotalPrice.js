function TotalPrice(props) {
  return (
    // Render a div with the class "total-price"
    <div
      className="total-price"
      // Apply conditional styling based on the totalPrice prop
      style={{
        // If totalPrice is greater than 0, show the div; otherwise, hide it
        display: props.totalPrice > 0 ? "block" : "none",
      }}
    >
      {/* Display the total price with two decimal places */}
      <h2>Total price: £{props.totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default TotalPrice;
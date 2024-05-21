import Button from "react-bootstrap/Button"; // Import the Button component from react-bootstrap
import Card from "react-bootstrap/Card"; // Import the Card component from react-bootstrap
import Dropdown from "react-bootstrap/Dropdown"; // Import the Dropdown component from react-bootstrap
import DropdownButton from "react-bootstrap/DropdownButton"; // Import the DropdownButton component from react-bootstrap

function ItemCard(props) {
  return (
    <Card>
      {/* Display the product image */}
      <div className="card-img">
        <Card.Img variant="top" src={props.images[props.selectedColor]} />
      </div>

      <Card.Body>
        {/* Display the product title */}
        <Card.Title>{props.title}</Card.Title>

        {/* Display the product description */}
        <Card.Text>{props.description}</Card.Text>

        {/* Display the product price */}
        <Card.Text>Price: £{props.price.toFixed(2)}</Card.Text>

        <div className="product-btn">
          {/* Color dropdown */}
          <DropdownButton
            title={props.selectedColor}
            onSelect={props.onColorChange}
            variant="success"
          >
            {/* Map over the available colors and create Dropdown.Item components */}
            {props.colors.map((color) => (
              <Dropdown.Item key={color} eventKey={color}>
                {color}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          {/* Buy button */}
          <Button variant="primary" onClick={props.onBuy}>
            Buy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
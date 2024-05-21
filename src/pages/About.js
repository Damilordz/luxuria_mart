import Figure from "react-bootstrap/Figure"; // Import the Figure component from react-bootstrap
import logo from "../assets/images/logo.png"; // Import the logo image
import storeImage1 from "../assets/images/luxuria-img.jpg"; // Import store image 1
import storeImage2 from "../assets/images/luxuria-img-1.jpg"; // Import store image 2

const About = () => {
  return (
    <div className="about-page">
      {/* Page heading */}
      <h1>About LuxuriaMart</h1>

      {/* Logo section */}
      <Figure>
        <Figure.Image width={100} height={100} alt="LuxuriaMart Logo" src={logo} />
        <Figure.Caption>
          <h3>Welcome to LuxuriaMart</h3>
        </Figure.Caption>
      </Figure>

      {/* About section */}
      <p>
        Welcome to LuxuriaMart, your number one source for all things luxury. We're dedicated to
        giving you the very best of products, with a focus on quality, customer service, and
        uniqueness. LuxuriaMart is a premier online destination for fashion-forward individuals
        seeking the latest and greatest in luxury apparel and accessories. Our carefully curated
        collection features top-tier brands and exclusive products that epitomise style, quality,
        and sophistication. Whether you're looking for the perfect designer piece to elevate your
        wardrobe or a statement accessory to make a lasting impression, LuxuriaMart has you covered.
      </p>

      {/* Store images section */}
      <div className="store-images">
        {/* Store image 1 */}
        <Figure>
          <Figure.Image width={400} height={300} alt="Store Image 1" src={storeImage1} />
          <Figure.Caption>
            <h4>Our Flagship Store</h4>
            <p>
              Our flagship store showcases the latest collections in a luxurious and modern setting.
              With an emphasis on customer experience, we ensure every visit is memorable and
              satisfying. From personalised shopping assistance to exclusive product launches, we
              offer a premium shopping environment that truly embodies luxury.
            </p>
          </Figure.Caption>
        </Figure>

        {/* Store image 2 */}
        <Figure>
          <Figure.Image width={400} height={300} alt="Store Image 2" src={storeImage2} />
          <Figure.Caption>
            <h4>Inside LuxuriaMart</h4>
            <p>
              A glimpse inside LuxuriaMart reveals an exquisite blend of elegance and comfort. Our
              store interior is designed to provide a serene shopping experience, with plush
              seating, ambient lighting, and carefully curated displays of our finest products. We
              believe in making every customer feel valued and at ease.
            </p>
          </Figure.Caption>
        </Figure>
      </div>

      {/* Contact section */}
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>Have any questions? We'd love to hear from you. Reach out to us at:</p>
          <p>
            <strong>Email:</strong> info@luxuriamart.com
          </p>
          <p>
            <strong>Phone:</strong>+441234567890
          </p>
          <p>
            <strong>Address:</strong> 123 Luxury Street, Leicester City, LE2 GHL
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
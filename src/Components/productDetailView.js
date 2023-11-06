import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import { useProductView } from "./useProductView";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ReactImageMagnify from 'react-image-magnify';

function ProductDetailedView({ addToBasket, orderCard }) {
  const {
    product,
    getImage,
    description,
    selectedSize,
    selectedColor,
    selectedQuantity,
    setSelectedSize,
    setSelectedColor,
    handleQuantityChange,
  } = useProductView();

  const [mainImage, setMainImage] = useState("");
  const [activeTab, setActiveTab] = useState("Description");

  if (!product || !product.attributes) {
    return null;
  }
  const { attributes } = product;

  const isAvailable = attributes.quantity > 0;
  const maxQuantity = 5;

  const quantityOptions = Array.from(Array(maxQuantity).keys()).map((number) => (
    <MenuItem key={number + 1} value={number + 1}>
      {number + 1}
    </MenuItem>
  ));

  const sectionsToShow = {
    Idol: ["Composition", "Unique Features", "Benefits", "Pro Tips", "Maintenance", "Do's", "Dont's"],
    Handcrafts: ["dimension", "style", "usage", "Care Directions", "Benefits"],
  };

  // Define the selected category (e.g., "Idol" or "Handcrafts")
  const selectedCategory = "Idol"; // You can set this dynamically

  // Define a function to check if a section should be displayed based on the selected category
  const shouldDisplaySection = (section) => sectionsToShow[selectedCategory].includes(section);
  const images = orderCard
    ? []
    : product.attributes.images.data.map((image) => image.attributes.url);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <div className="card-bg">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <Row>
              <Col className="p-2" lg={12} md={12} sm={12}>
                <div>
                  <div className="bg-white rounded" style={{ position: 'relative' }}>
                    {/* <img
                      src={`http://localhost:1337${mainImage || images[0]}`}
                      alt="Main Product"
                      className="bg-white"
                      style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }}
                    /> */}
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          src: `http://localhost:1337${mainImage || images[0]}`,
                          alt: 'Main Product',
                          isFluidWidth: true,
                        },
                        largeImage: {
                          src: `http://localhost:1337${mainImage || images[0]}`,
                          width: 1200,
                          height: 1800,
                        },
                        enlargedImageContainerStyle: {
                          background: 'white',
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          width: '200px', // Adjust the width of the zoomed image container
                          height: '200px', // Adjust the height of the zoomed image container
                          boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)', // Add a box shadow if desired
                          borderRadius: '10px',
                          zIndex: "9999"
                        },
                        enlargedImageStyle: {
                          objectFit: 'cover',
                          borderRadius: '10px',
                        },
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col className="order-2 order-md-0">
                {images.length > 1 && (
                  <Box display="flex" flexDirection="row" justifyContent="center">
                    {images.map((imageUrl, index) => (
                      <img
                        key={index}
                        className="bg-white"
                        src={`http://localhost:1337${imageUrl}`}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "50px",
                          height: "50px",
                          margin: "5px",
                          cursor: "pointer",
                          border:
                            mainImage === imageUrl
                              ? "2px solid blue"
                              : "2px solid transparent",
                        }}
                        onClick={() => setMainImage(imageUrl)}
                      />
                    ))}
                  </Box>
                )}
              </Col>
            </Row>
          </div>
          <div className="col-md-7">
            <CardContent className="">
              <Typography variant="h5" className="text-uppercase fw-bold gold-txt mb-2" component="div">
                {attributes.name}
              </Typography>
              {/* <Typography variant="h5" className="text-uppercase fw-bold gold-txt mb-2" component="div">
                {attributes.sub_categories}
              </Typography> */}

              <div>
                <Rating
                  name="product-rating"
                  value={attributes.rating}
                  precision={0.1}
                  readOnly
                  size="sm"
                  style={{ color: "#ff8000" }}
                  icon={<StarIcon />}
                />
              </div>
              {/*  */}
              <table class="text-uppercase table mb-0">
                <tbody>

                  <tr>
                    <th style={{ width: "150px" }} className="gold-txt" rowspan="1">Material</th>
                    <td className="gold-txt fw-semibold">{attributes.material}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "150px" }} className="gold-txt" rowspan="1">Coating</th>
                    <td className="gold-txt fw-semibold">{attributes.coating}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "150px" }} className="gold-txt" rowspan="1">Width & Depth</th>
                    <td className="gold-txt fw-semibold">{attributes.WidthDepth}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "150px" }} className="gold-txt" rowspan="1">Height</th>
                    <td className="gold-txt fw-semibold">{attributes.height}</td>
                  </tr>
                  <tr>
                    <th style={{ width: "150px" }} className="gold-txt" rowspan="1">Weight</th>
                    <td className="gold-txt fw-semibold">{attributes.weight}</td>
                  </tr>
                </tbody>
              </table>
              {/*  */}
              <p className="mb-2">
                <strong style={{ fontSize: "30px" }} className="text-uppercase gold-txt">$ {attributes.price}</strong>
              </p>
              <Typography className="text-uppercase mb-2 black-txt" variant="subtitle1">
                {isAvailable
                  ? <span className="badge bg-success">In Stock</span>
                  : <span className="badge bg-danger">Out of Stock</span>}
              </Typography>
              <div>
                <InputLabel className="gold-txt fw-semibold text-uppercase" htmlFor="quantity-select">Quantity</InputLabel>
                <FormControl>
                  <Select
                    labelId="quantity-select"
                    size="sm"
                    id="quantity-select"
                    value={selectedQuantity}
                    onChange={handleQuantityChange}
                    disabled={!isAvailable}
                  >
                    {isAvailable && quantityOptions}
                  </Select>
                </FormControl>
              </div>

              <Button
                variant="contained"
                onClick={() => {
                  if (isAvailable) {
                    addToBasket({
                      ...product,
                      description,
                      size: selectedSize,
                      color: selectedColor,
                      quantity: selectedQuantity,
                      imageUrl: getImage(selectedColor),
                    });
                  }
                }}
                className="mt-3 card-bg-gold"
                disabled={!isAvailable}
              >
                {isAvailable ? "Add to Cart" : "Currently Unavailable"}
              </Button>
              {/*  */}
            </CardContent>
          </div>
          <Row className="ps-5 pe-5">
            <Col lg={12}>
              <div className="mt-2">
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab className="gold-txt" label="Description" value="Description" />
                  <Tab className="gold-txt" label="Specifications" value="Specifications" />
                  <Tab className="gold-txt" label="Reviews" value="Reviews" />
                </Tabs>
                {activeTab === "Description" && (
                  <div>
                    {shouldDisplaySection("Composition") && (
                      <div>
                        <h6 className="mt-2">composition</h6>
                        <div className="text-white">
                          {attributes.composition.split('\n').map((paragraph, index) => (
                            <ul>
                              <li className="" key={index}>{paragraph}</li>
                            </ul>
                          ))}
                        </div>
                      </div>

                    )}
                    {shouldDisplaySection("Unique Features") && (
                      <div>
                        <h6 className="mt-2">Unique Features</h6>
                        <div className="text-white">
                          {attributes.ufet.split('\n').map((paragraph, index) => (
                            <ul>
                              <li className="" key={index}>{paragraph}</li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h6 className="mt-2">Benefits</h6>
                      <div className="text-white">
                        {attributes.benefits.split('\n').map((paragraph, index) => (

                          <p className="" key={index}>{paragraph}</p>

                        ))}
                      </div>
                    </div>

                    {shouldDisplaySection("Pro tips") && (
                      <div>
                        <h6 className="mt-2">Pro tips</h6>
                        <div className="text-white">
                          {attributes.protips.split('\n').map((paragraph, index) => (
                            <ul>
                              <li className="" key={index}>{paragraph}</li>
                            </ul>
                          ))}
                        </div>
                      </div>
                    )}
                    {shouldDisplaySection("Maintenance") && (
                      <div>
                        <h6 className="mt-2">Maintainance</h6>
                        <div className="text-white">
                          {attributes.maintainence.split('\n').map((paragraph, index) => (

                            <p className="" key={index}>{paragraph}</p>

                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h6 className="mt-2">Do’s & Don’ts:</h6>
                      {shouldDisplaySection("Do's") && (
                        <div>
                          <h6 className="mt-2">Do's</h6>
                          <div className="text-white">
                            {attributes.do.split('\n').map((paragraph, index) => (

                              <p className="" key={index}>{paragraph}</p>

                            ))}
                          </div>
                        </div>
                      )}
                      <h6 className="mt-2">Don’ts</h6>
                      {shouldDisplaySection("Dont's") && (
                        <div>
                          "Maintenance"
                          <div className="text-white">
                            {attributes.dont.split('\n').map((paragraph, index) => (

                              <p className="" key={index}>{paragraph}</p>

                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {activeTab === "Specifications" && (
                  <div>
                    {/* Your Specifications content here */}
                  </div>
                )}
                {activeTab === "Reviews" && <></>}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Col lg={12}>
        <Footer />
      </Col>
    </>
  );
}

export default ProductDetailedView;
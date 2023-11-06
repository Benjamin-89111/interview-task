import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useProducts } from "./ProductListing";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import FilterIcon from "@mui/icons-material/FilterList";
import Pagination from "@mui/material/Pagination";
import Footer from "./Footer";
import axios from "axios";
import Slider from "@mui/material/Slider";

const Type = () => {
  const { categories, products } = useProducts();
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [customTitle, setCustomTitle] = useState("");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState([]);

  const productsPerPage = 12;

  const handleOpenFilterDrawer = () => {
    setIsFilterDrawerOpen(true);
  };

  const handleCloseFilterDrawer = () => {
    setIsFilterDrawerOpen(false);
  };

  const handleCheckboxChange = (value, categoryType) => {
    if (categoryType === "category") {
      const updatedCategories = [...selectedCategories];
      if (updatedCategories.includes(value)) {
        updatedCategories.splice(updatedCategories.indexOf(value), 1);
      } else {
        updatedCategories.push(value);
      }
      setSelectedCategories(updatedCategories);
    } else if (categoryType === "rating") {
      const updatedRatings = [...selectedRating];
      if (updatedRatings.includes(value)) {
        updatedRatings.splice(updatedRatings.indexOf(value), 1);
      } else {
        updatedRatings.push(value);
      }
      setSelectedRating(updatedRatings);
    }

    const selectedCategoryNames = categories
      .filter((cat) => selectedCategories.includes(cat.id))
      .map((cat) => cat.attributes.name);

    let title = "Products";

    if (selectedCategoryNames.length > 0) {
      title = selectedCategoryNames.join(", ");
    }

    setCustomTitle(title);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const filteredProducts = products.filter((product) => {
    const categoryId = product.attributes.category?.data?.id;
    const price = product.attributes.price;
    const rating = product.attributes.rating;

    if (
      (!selectedCategories.length || (categoryId && selectedCategories.includes(categoryId))) &&
      product.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      price >= priceRange[0] &&
      price <= priceRange[1] &&
      (selectedRating.length === 0 || selectedRating.includes(rating))
    ) {
      return true;
    }

    return false;
  });

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const filterStyle = {
    padding: "16px",
    backgroundColor: "linear-gradient(0deg, rgb(26, 26, 26), rgb(75, 75, 75));",
    borderRadius: "4px",
  };

  useEffect(() => {
    axios
      .get("http://localhost:1337/sub_categories") // Replace 'sub-categories' with the actual endpoint URL
      .then((response) => {
        setSubCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleProductClick = (productId) => {
    const clickedProduct = products.find((product) => product.id === productId);

    if (clickedProduct) {
      const foundIndex = recentlyViewed.findIndex((item) => item.id === productId);

      if (foundIndex !== -1) {
        recentlyViewed.splice(foundIndex, 1);
      }

      recentlyViewed.unshift({ id: productId, timestamp: Date.now() });

      if (recentlyViewed.length > 5) {
        recentlyViewed.pop();
      }

      setRecentlyViewed([...recentlyViewed]);

      history.push(`/product/${productId}`, { product: clickedProduct });
    }
  };

  return (
    <>
      <Row style={{ height: "100vh" }}>
        <Drawer
          anchor="right"
          open={isFilterDrawerOpen}
          onClose={handleCloseFilterDrawer}
          className=""
        >
          <div className="card-bg" style={filterStyle}>
            {/* Filter Categories */}
            <Typography className="gold-txt" variant="h6">
              Filter Categories
            </Typography>
            <ul type="none">
              {categories.map((category) => (
                <li className="gold-txt" key={category.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCheckboxChange(category.id, "category")}
                      />
                    }
                    label={category.attributes.name}
                  />
                </li>
              ))}
            </ul>

            {/* Price Range Filter */}
            <Typography className="gold-txt" variant="h6">
              Price Range
            </Typography>
            <div>
              <Slider
                value={priceRange}
                onChange={(event, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={1000}
              />
            </div>

            {/* Rating Filter */}
            <Typography className="gold-txt" variant="h6">
              Rating
            </Typography>
            <ul type="none">
              {[5, 4, 3, 2, 1].map((rating) => (
                <li className="gold-txt" key={rating}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={rating}
                        checked={selectedRating.includes(rating)}
                        onChange={() => handleCheckboxChange(rating, "rating")}
                      />
                    }
                    label={`${rating} Stars`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
        <Col lg={3} className="d-none d-lg-block card-bg">
          <div className="card-bg brd-right h-100" style={filterStyle}>
            {/* Filter Categories */}
            <Typography className="gold-txt" variant="h6">
              Filter Categories
            </Typography>
            <ul type="none">
              {categories.map((category) => (
                <li className="gold-txt" key={category.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCheckboxChange(category.id, "category")}
                      />
                    }
                    label={category.attributes.name}
                  />
                </li>
              ))}
            </ul>

            {/* Price Range Filter */}
            <Typography className="gold-txt" variant="h6">
              Price Range
            </Typography>
            <div className="p-3">
              <Slider
                value={priceRange}
                onChange={(event, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={1000}
              />
            </div>

            {/* Rating Filter */}
            <Typography className="gold-txt" variant="h6">
              Rating
            </Typography>
            <ul type="none">
              {[5, 4, 3, 2, 1].map((rating) => (
                <li className="gold-txt" key={rating}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={rating}
                        checked={selectedRating.includes(rating)}
                        onChange={() => handleCheckboxChange(rating, "rating")}
                      />
                    }
                    label={`${rating} Stars`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col lg={9} className="card-bg">
          <div className="">
            <h2 className="pt-3" style={{ textAlign: "center" }}>
              {customTitle}
            </h2>
            <div className="d-flex d-lg-none justify-content-end me-2">
              <Button className="border-white border" onClick={handleOpenFilterDrawer}>
                <span className="text-white">
                  <FilterIcon />
                  <span className="ms-1">Filter</span>
                </span>
              </Button>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="pt-3">
                <Row>
                  {paginatedProducts.map((product) => (
                    <Col className="" md={4} lg={4} xl={3} key={product.id}>
                      <Product 
                      product={product}
                       onProductClick={handleProductClick} />
                    </Col>
                    
                  ))}
                </Row>
              </div>
            ) : (
              <p className="text-uppercase gold-txt text-center">
                No products match the selected criteria.
              </p>
            )}
            <div className="d-flex justify-content-center mt-3">
              <Pagination
                count={Math.ceil(filteredProducts.length / productsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                className="p-2 pagi"
              />
            </div>
          </div>
        </Col>
        <Col lg={12}>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default Type;

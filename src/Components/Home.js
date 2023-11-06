import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import Carousel from "./Carousel";
// import TopUniversities from "./TopUniversities";
import Footer from "./Footer";
import TopCategories from "./TopCategories";
import Type from "./Type";
import Categories from "./Categories";
import TopDeals from "./NewArrivals";
import RecentlyViewedProducts from "./RecentlyViewed";
import Blog1 from "./BlogSection";
import Post from "./Post";


function Homepage() {


    return (
        <>
            <Row>

                <Col lg={12}>
                    <Carousel />
                </Col>
                <Col lg={12}>
                    <Categories />
                </Col>
                {/* <Col lg={12}>
                    <RecentlyViewedProducts />
                </Col> */}
                {/* <Col lg={12}>
                    <TopDeals />
                </Col> */}
                <Col lg={12}>
                    <Post />
                </Col>
                
                <Col lg={12}>
                    <Blog1 />
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}
export default Homepage
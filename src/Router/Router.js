import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../Components/Home';
import Cart from '../Components/Cart';
import SignUpPage from '../Components/SignUp';
import { ToastContainer } from 'react-toastify';
import Login from '../Components/Login';
import ProductDetailedView from "../Components/productDetailView";
import ProductDetails from '../Components/Sample/ProductDetails';
import Basket from '../Components/Basket/Basket';
import Header from '../Components/Header';
import { Protector, userData } from '../Components/helpers';
import useBasket from '../Components/Basket/useBasket';
import Logout from '../Components/Logout';
import Orders from '../Components/Orders';
import useOrders from '../Components/useOrders';
import Type from '../Components/Type';
import TopNavBar from '../Components/TopNavbar';
import RecentlyViewedProducts from '../Components/RecentlyViewed';
import CategorySlider from '../Components/Categories';
import TopDeals from '../Components/NewArrivals';
import ContactUs from '../Components/Contactus';
import ForgetPassword from '../Components/ForgetPassword';
import AboutUs from '../Components/AboutUs';
import BulkOrder from '../Components/BulkOrder';
import SubCategoriesComponent from '../Components/SubCategories';
import Profile from '../Components/Profile/profile';
import RecentlyViewed from '../Components/RecentlyViewed';
import { useHistory } from 'react-router-dom';

function Routers() {
    const { jwt, username } = userData();
    const isLoggedIn = !!jwt;
    const { orders, setIsNewOrdersAdded } = useOrders(jwt);
    const { basket, addToBasket, removeFromBasket, updateBasketItem } = useBasket(jwt, setIsNewOrdersAdded);
    const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);

    return (
        <>
            <Router>
                <Header
                    isLoggedIn={isLoggedIn}
                    basketItems={basket.length}
                    username={username}
                />
                <TopNavBar />
                <Switch>
                    <Route exact path="/"><Homepage /></Route>
                    <Route exact path="/cart"><Cart /></Route>
                    <Route path="/Login"><Login /></Route>
                    <Route path="/Contact"><ContactUs /></Route>
                    <Route path="/About"><AboutUs /></Route>
                    <Route path="/Logout"><Logout /></Route>
                    <Route path="/SubCategories"><SubCategoriesComponent /></Route>
                    <Route path="/BulkOrders"><BulkOrder /></Route>
                    <Route path="/Basket">
                        <Basket
                            basket={basket}
                            removeFromBasket={removeFromBasket}
                            updateBasketItem={updateBasketItem}
                        />
                    </Route>
                    <Route path="/Products"><Type /></Route>
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/Blog"><ProductDetails /></Route>
                    <Route path="/product-details/:id">
                        <ProductDetailedView
                            addToBasket={addToBasket}
                        />
                    </Route>
                    <Route path="/ForgetPassword">
                        <ForgetPassword />
                    </Route>
                    <Route path="/orders"><Protector Component={<Orders orders={orders} />} /></Route>
                    <Route path="/profile"><Protector Component={<Profile profile={jwt} />} /></Route>
                    {/* <Route path="/RVP">
                        <RecentlyViewed />
                    </Route> */}
                    <Route path="/NewArrivals"><TopDeals /></Route>
                </Switch>
                <ToastContainer />
            </Router>
        </>
    );
}

export default Routers;

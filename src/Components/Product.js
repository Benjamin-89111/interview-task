// import React, { useState } from 'react';
// import { Grid, Card, CardContent, Typography, IconButton, Menu, MenuItem, Badge } from '@mui/material';
// import { Link } from 'react-router-dom';
// import StarIcon from '@mui/icons-material/Star';
// import ShareIcon from '@mui/icons-material/Share';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const Product = ({ product, orderCard }) => {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const image = orderCard ? {} : product.attributes.images.data[0].attributes;

//     const handleShareClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const handleShare = (platform) => {
//         // Implement sharing logic for the selected platform
//         switch (platform) {
//             case 'facebook':
//                 // Share on Facebook logic here
//                 break;
//             case 'whatsapp':
//                 // Share on WhatsApp logic here
//                 break;
//             case 'twitter':
//                 // Share on Twitter logic here
//                 break;
//             case 'instagram':
//                 // Share on Instagram logic here
//                 break;
//             case 'copylink':
//                 // Copy link logic here
//                 break;
//             default:
//                 break;
//         }
//         handleClose();
//     };

//     const renderStars = (rating) => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             stars.push(
//                 <StarIcon key={i} color={i <= rating ? 'warning' : 'disabled'} />
//             );
//         }
//         return stars;
//     };

//     const isOutOfStock = orderCard ? false : product.attributes.quantityInStock === 0;

//     return (
//         <Grid item xs={12} sm={6} md={6} xl={3}>
//             <Card
//                 className='card-bg-gold black-txt'
//                 sx={{
//                     m: 1,
//                     transition: 'transform 0.3s',
//                     '&:hover': {
//                         transform: 'scale(1.05)',
//                     },
//                 }}
//             >
//                 <Link to={`/product-details/${product.id}`}>
//                     <img
//                         src={`http://localhost:1337${orderCard ? product.imageUrl : image.url}`}
//                         alt={image.name}
//                         className='bg-white'
//                         style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
//                     />
//                 </Link>
//                 <CardContent>
//                     <Typography className='black-txt fw-bold text-uppercase' variant="h6" component="div">
//                         {orderCard ? product.name : product.attributes.name}
//                     </Typography>

//                     <Typography className='black-txt' variant="subtitle1">
//                         <span className='fw-semibold'>Price:</span> £ {orderCard ? product.price : product.attributes.price}
//                     </Typography>
//                     <div className='text-uppercase black-txt'>
//                         {/* Pass product.attributes.rating to renderStars */}
//                         {/* {product.attributes.rating} */}
//                         {renderStars(product.attributes.rating)}
//                     </div>
//                     <div>
//                         <IconButton
//                             aria-controls="share-menu"
//                             aria-haspopup="true"
//                             onClick={handleShareClick}
//                         >
//                             <ShareIcon />
//                         </IconButton>
//                         <IconButton
//                             aria-label="Add to cart"
//                             onClick={() => {
//                                 // Implement your logic to add the product to the cart here
//                             }}
//                         >
//                             <ShoppingCartIcon />
//                         </IconButton>
//                         <Menu
//                             id="share-menu"
//                             anchorEl={anchorEl}
//                             keepMounted
//                             open={Boolean(anchorEl)}
//                             onClose={handleClose}
//                         >
//                             <MenuItem onClick={() => handleShare('copylink')}>Copy Link</MenuItem>
//                             <MenuItem onClick={() => handleShare('facebook')}>Facebook</MenuItem>
//                             <MenuItem onClick={() => handleShare('whatsapp')}>WhatsApp</MenuItem>
//                             <MenuItem onClick={() => handleShare('twitter')}>Twitter</MenuItem>
//                             <MenuItem onClick={() => handleShare('instagram')}>Instagram</MenuItem>
//                         </Menu>
//                     </div>
//                 </CardContent>
//             </Card>
//         </Grid>
//     );
// };

// export default Product;

import React, { useState,useEffect } from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RecentlyViewed from './RecentlyViewed'; // Import your RecentlyViewed component
// import ProductDetailedView from './ProductDetailedView'; // Import your ProductDetailedView component

const Product = ({ product, onViewProduct, onProductClick, orderCard, userLocation, exchangeRates }) => {
    // ... (previous code)
    const [anchorEl, setAnchorEl] = useState(null);

    const image = orderCard ? {} : product.attributes.images.data[0].attributes;

    const handleShareClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleShare = (platform) => {
        // Implement sharing logic for the selected platform
        // ...

        handleClose();
    };
    const [productPrice, setProductPrice] = useState(0);

    useEffect(() => {
      // Simulate obtaining user's location (country) here
      const userCountry = 'US'; // Replace with actual geolocation logic
  
      // Adjust the product price based on the user's country
      const countryPrices = {
        'EUR': 100, // Price for countries in EUR
        'US': 120,  // Price for the USA
        'GBP': 110, // Price for countries in GBP
        // Add more countries and prices as needed
      };
  
      setProductPrice(countryPrices[userCountry] || 0); // Use 0 as a default price if the country is not found
    }, []);
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <StarIcon key={i} color={i <= rating ? 'warning' : 'disabled'} />
            );
        }
        return stars;
    };

    return (
        <Grid item xs={12} sm={6} md={6} xl={3}>
            <Card
                className='card-bg-gold black-txt'
                sx={{
                    m: 1,
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                    height: "auto"
                }}
            >
                <Link to={`/product-details/${product.id}`} >
                    <img
                        src={`http://localhost:1337${orderCard ? product.imageUrl : image.url
                            }`}
                        alt={orderCard ? product.name : image.name}
                        className='bg-white'
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </Link>
                <CardContent>
                    <Typography className='black-txt fw-bold text-uppercase' variant="h6" component="div">
                        {orderCard ? product.name : product.attributes.name}
                    </Typography>
                    {orderCard ? (
                        <Typography className='black-txt fw-bold text-uppercase' variant="h6" component="div">
                            <strong>Quantity: {product.quantity}</strong>
                        </Typography>
                    ) : null}
                    <Typography className='black-txt' variant="subtitle1">
                        Price: £{orderCard ? product.price : product.attributes.price}
                    </Typography>
                    <div className='text-uppercase black-txt'>
                        {renderStars(product.attributes.rating)}
                    </div>
                    {/* <div>
                        <IconButton
                            aria-controls="share-menu"
                            aria-haspopup="true"
                            onClick={handleShareClick}
                        >
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Add to cart"
                            onClick={() => {
                                // Implement your logic to add the product to the cart here
                            }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                        <Menu
                            id="share-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleShare('copylink')}>Copy Link</MenuItem>
                            <MenuItem onClick={() => handleShare('facebook')}>Facebook</MenuItem>
                            <MenuItem onClick={() => handleShare('whatsapp')}>WhatsApp</MenuItem>
                            <MenuItem onClick={() => handleShare('twitter')}>Twitter</MenuItem>
                            <MenuItem onClick={() => handleShare('instagram')}>Instagram</MenuItem>
                        </Menu>
                    </div> */}
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Product;

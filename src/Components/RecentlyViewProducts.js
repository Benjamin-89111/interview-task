import React from 'react';
import Product from './Product'; // Import the Product component
import { Grid } from '@mui/material';

const RecentlyViewedProducts = ({ recentlyViewed }) => {
    return (
        <div>
            <h2>Recently Viewed Products</h2>
            <Grid container spacing={2}>
                {recentlyViewed.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        addToRecentlyViewed={() => {}}
                    />
                ))}
            </Grid>
        </div>
    );
};

export default RecentlyViewedProducts;

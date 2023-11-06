import React from 'react';

const RecentlyViewedProducts = ({ recentlyViewed }) => {
  return (
    <div className="recently-viewed">
      <h3>Recently Viewed Products</h3>
      {/* <ul>
        {recentlyViewed.map((product) => (
          <li key={product.id}>
            <Link to={`/product-details/${product.id}`}>{product.label}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RecentlyViewedProducts;

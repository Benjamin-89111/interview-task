import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Box,
} from '@mui/material';

const ReviewPage = ({ cartItems, totalAmount }) => {
  if (!cartItems || cartItems.length === 0) {
    // Handle the case when cartItems are undefined or empty
    return (
      <Container>
        <Typography variant="h5" className="fw-bold mt-2" gutterBottom>
          Your Cart Is Empty
        </Typography>
        {/* You can add additional content or messages here */}
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h5" className="fw-bold mt-2" gutterBottom>
        Review Your Order
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            {/* ... Render cart item details as before */}
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" gutterBottom>
        Total: ${totalAmount}
      </Typography>
      {/* Add additional order summary information here, e.g., shipping details */}
    </Container>
  );
};

export default ReviewPage;

import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const PaymentDetailsPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send payment data securely to your server for processing
    try {
      const response = await fetch('/your-payment-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        // Payment was successful
        console.log('Payment successful');
      } else {
        // Handle payment failure
        console.error('Payment failed');
      }
    } catch (error) {
      // Handle network or server errors
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" className="fw-bold mt-2" gutterBottom>
        Payment Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Card Number"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleChange}
              required
              inputProps={{ maxLength: 16 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Cardholder Name"
              name="cardHolderName"
              value={paymentData.cardHolderName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Expiration Date (MM/YY)"
              name="expirationDate"
              value={paymentData.expirationDate}
              onChange={handleChange}
              required
              inputProps={{ maxLength: 5 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="CVV"
              name="cvv"
              value={paymentData.cvv}
              onChange={handleChange}
              required
              inputProps={{ maxLength: 4 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                value={paymentData.country}
                onChange={handleChange}
                required
              >
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="US">US</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PaymentDetailsPage;

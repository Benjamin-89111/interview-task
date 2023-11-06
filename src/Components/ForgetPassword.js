import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { Col } from 'react-bootstrap';
import Footer from './Footer';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you can send a password reset email to the provided email address.
        // You can use your authentication backend or API for this purpose.

        // Simulating a successful email send
        setTimeout(() => {
            setEmailSent(true);
            setMessage(<span className='text-success'>Password reset email sent. Please check your inbox.</span>);
        }, 2000);
    };

    return (
        <>
            <Grid container justifyContent="center" alignItems="center" >
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Paper className='mt-5 mb-5' elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                        <h4>
                            Forgot Password
                        </h4>
                        {emailSent ? (
                            <Typography color="primary" style={{ marginTop: '16px' }}>
                                {message}
                            </Typography>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    variant="outlined"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    style={{ marginTop: '16px' }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ marginTop: '16px' }}
                                >
                                    Send Reset Email
                                </Button>
                            </form>
                        )}
                    </Paper>
                </Grid>
            </Grid>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    );
};

export default ForgotPassword;

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { Col } from 'react-bootstrap';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <>
            <Container className='p-4'>
                {/* <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}> */}
                <h4 className='text-center mb-4'>About Us</h4>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    faucibus hendrerit mauris, eget efficitur felis luctus nec. Nulla nec
                    nunc vel urna facilisis eleifend. Sed euismod massa sit amet tortor
                    consectetur feugiat.
                </Typography>
                <Typography variant="body1">
                    Nullam rhoncus dolor nec lorem tincidunt, a vulputate mi sodales.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; In efficitur tortor eu nunc iaculis, vel
                    finibus sapien dictum.
                </Typography>
                <img
                    src="https://via.placeholder.com/300"
                    alt="Company Office"
                    style={{ marginTop: '20px', maxWidth: '100%' }}
                />
                {/* </Paper> */}
            </Container>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    );
};

export default AboutUs;

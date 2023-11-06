// ContactForm.js
import React, { useState } from 'react';
import { Container, TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid } from '@mui/material';
import { Col } from 'react-bootstrap';
import Footer from './Footer';

const ContactForm = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className=''>
            <Container className='p-4' maxWidth="md">
                <h4 className='text-center mb-4'>Contact Us</h4>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone Number"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl
                                // variant='outlined'
                                fullWidth
                            >
                                <InputLabel id="dropdown-label">Country</InputLabel>
                                <Select
                                    labelId="dropdown-label"
                                    id="dropdown"

                                    value={selectedValue}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {/* <MenuItem value="option1">India</MenuItem> */}
                                    <MenuItem value="option2">France</MenuItem>
                                    <MenuItem value="option3">Germany</MenuItem>
                                    <MenuItem value="option3">Italy</MenuItem>
                                    <MenuItem value="option3">Netherlands</MenuItem>
                                    <MenuItem value="option3">Spain</MenuItem>
                                    <MenuItem value="option3">United Kingdom</MenuItem>
                                    <MenuItem value="option3">United States</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Submit
                    </Button>
                </form>
            </Container>
            <Col lg={12}>
                <Footer />
            </Col>
        </div>
    );
};

export default ContactForm;

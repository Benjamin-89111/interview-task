import { Col, Row } from "react-bootstrap"
import Footer from "./Footer"
import { Container, TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid } from '@mui/material'
import { useState } from "react";

function BulkOrder() {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <>
            <Row>
                <Col lg={12}>
                        <h4 className=" mt-3 text-center">Bulk Orders</h4>
                    <form className="ps-5 pe-5 pt-2 pb-5">
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
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
                            <Grid item xs={12} >
                                <TextField
                                    label="Phone Number"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} >
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
                                        <MenuItem value="option3">United Kingdom</MenuItem>
                                        <MenuItem value="option3">United States</MenuItem>
                                        <MenuItem value="option3">Netherlands</MenuItem>
                                        <MenuItem value="option2">France</MenuItem>
                                        <MenuItem value="option3">Germany</MenuItem>
                                        <MenuItem value="option3">Italy</MenuItem>
                                        <MenuItem value="option3">Spain</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    label="Code"
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
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
export default BulkOrder
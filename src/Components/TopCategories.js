import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Button, IconButton, Checkbox, FormControlLabel, Typography, Select, MenuItem } from '@mui/material';
import { FilterList } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import categoryData from '../Data/Categories'


const TopCategories = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [filteredCategories, setFilteredCategories] = useState(categoryData); // Use the imported category data

    const handleCategoryChange = (event) => {
        const categoryName = event.target.name;
        const isChecked = event.target.checked;

        let updatedSelectedCategories = [...selectedCategories];

        if (categoryName === "SelectAll") {
            if (isChecked) {
                updatedSelectedCategories = categoryData.map((category) => category.name);
            } else {
                updatedSelectedCategories = [];
            }
        } else {
            if (isChecked) {
                updatedSelectedCategories.push(categoryName);
            } else {
                updatedSelectedCategories = updatedSelectedCategories.filter((category) => category !== categoryName);
            }
        }

        setSelectedCategories(updatedSelectedCategories);
        filterCategories(updatedSelectedCategories, sortOption, sortOrder);
    };

    const handleSortChange = (event) => {
        const selectedSortOption = event.target.value;
        setSortOption(selectedSortOption);
        // Toggle sort order between 'asc' and 'desc'
        setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
        filterCategories(selectedCategories, selectedSortOption, sortOrder);
    };

    const filterCategories = (selectedCategories, sortOption, sortOrder) => {
        let filtered = [...categoryData];

        if (selectedCategories.length > 0) {
            filtered = filtered.filter((category) =>
                selectedCategories.includes(category.name)
            );
        }

        if (sortOption === 'name') {
            filtered.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (sortOrder === 'asc') {
                    return nameA.localeCompare(nameB);
                } else {
                    return nameB.localeCompare(nameA);
                }
            });
        } else if (sortOption === 'price') {
            // Add sorting logic by price if needed
        } else if (sortOption === 'rating') {
            // Add sorting logic by rating if needed
        }

        setFilteredCategories(filtered);
    };

    return (
        <div className='cta-4 p-5'>
            {/* <Container> */}
            <h2 className='text-center fw-bold'>Top Categories</h2>
            <div className="filter-bar p-3">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={selectedCategories.length === categoryData.length}
                            onChange={handleCategoryChange}
                            name="SelectAll"
                            color="primary"
                        />
                    }
                    label="Select All"
                />
                {categoryData.map((category, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <Checkbox
                                checked={selectedCategories.includes(category.name)}
                                onChange={handleCategoryChange}
                                name={category.name}
                                color="primary"
                            />
                        }
                        label={category.name}
                    />
                ))}
                <Select
                    value={sortOption}
                    onChange={handleSortChange}
                    displayEmpty
                    variant="outlined"
                    size="small"
                    sx={{ minWidth: '120px' }}
                >
                    <MenuItem value="" disabled>
                        Sort By
                    </MenuItem>
                    <MenuItem value="name">Name (A-Z)</MenuItem>
                    <MenuItem value="nameDesc">Name (Z-A)</MenuItem> {/* Added descending order option */}
                    <MenuItem value="price">Price</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
                </Select>
                <IconButton color="primary" aria-label="filter">
                    <FilterList />
                </IconButton>
            </div>
            <Grid container spacing={2}>
                {filteredCategories.map((category, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Card className="category-card">
                            <CardMedia
                                component="img"
                                height="200"
                                image={category.image}
                                alt={category.name}
                            />
                            <CardContent>
                                <Typography className='fw-bold text-center mb-1' variant="h6">{category.name}</Typography>
                                {/* Use Link component to redirect to the product listing page */}
                                <Link

                                    to={`/category/${encodeURIComponent(category.name)}`} // Encode category name for URL
                                >
                                    <Button target='_blank' variant="contained" color="primary" fullWidth>
                                        View Products
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* </Container> */}
        </div>
    );
};

export default TopCategories;

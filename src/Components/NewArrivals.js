import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img01 from '../Images/pexels-sharath-g-10899309.jpg';

function TopDeals() {
    const [anchorEl, setAnchorEl] = useState(null);

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

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <StarIcon key={i} color={i <= rating ? 'warning' : 'disabled'} />
            );
        }
        return stars;
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Set the number of slides to show at once
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="card-bg">
                <h4 className="text-center fw-semibold pt-3 pb-3">New Arrivals</h4>
                <Slider {...settings}>
                    <div className="p-2">
                        <Card className="card-bg-gold black-txt">
                            <img
                                src={img01}
                                alt="image.name"
                                className="bg-white"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography className="black-txt fw-bold text-uppercase" variant="h6" component="div">
                                    PRODUCT 1
                                </Typography>
                                <Typography className="black-txt" variant="subtitle1">
                                    <span className="fw-semibold">Price:</span> £ 100
                                </Typography>
                                <div className="text-uppercase black-txt">
                                    {renderStars(4)}
                                </div>
                                <div>
                                    <IconButton
                                        aria-controls="share-menu"
                                        aria-haspopup="true"
                                        onClick={handleShareClick}
                                    >
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton aria-label="Add to cart">
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="p-2">

                        <Card className="card-bg-gold black-txt">
                            <img
                                src={img01}
                                alt="image.name"
                                className="bg-white"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography className="black-txt fw-bold text-uppercase" variant="h6" component="div">
                                    PRODUCT 2
                                </Typography>
                                <Typography className="black-txt" variant="subtitle1">
                                    <span className="fw-semibold">Price:</span> £ 100
                                </Typography>
                                <div className="text-uppercase black-txt">
                                    {renderStars(4)}
                                </div>
                                <div>
                                    <IconButton
                                        aria-controls="share-menu"
                                        aria-haspopup="true"
                                        onClick={handleShareClick}
                                    >
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton aria-label="Add to cart">
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="p-2">
                        <Card className="card-bg-gold black-txt">
                            <img
                                src={img01}
                                alt="image.name"
                                className="bg-white"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography className="black-txt fw-bold text-uppercase" variant="h6" component="div">
                                    PRODUCT 3
                                </Typography>
                                <Typography className="black-txt" variant="subtitle1">
                                    <span className="fw-semibold">Price:</span> £ 100
                                </Typography>
                                <div className="text-uppercase black-txt">
                                    {renderStars(4)}
                                </div>
                                <div>
                                    <IconButton
                                        aria-controls="share-menu"
                                        aria-haspopup="true"
                                        onClick={handleShareClick}
                                    >
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton aria-label="Add to cart">
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="p-2">
                        <Card className="card-bg-gold black-txt">
                            <img
                                src={img01}
                                alt="image.name"
                                className="bg-white"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography className="black-txt fw-bold text-uppercase" variant="h6" component="div">
                                    PRODUCT 4
                                </Typography>
                                <Typography className="black-txt" variant="subtitle1">
                                    <span className="fw-semibold">Price:</span> £ 100
                                </Typography>
                                <div className="text-uppercase black-txt">
                                    {renderStars(4)}
                                </div>
                                <div>
                                    <IconButton
                                        aria-controls="share-menu"
                                        aria-haspopup="true"
                                        onClick={handleShareClick}
                                    >
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton aria-label="Add to cart">
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="p-2">
                        <Card className="card-bg-gold black-txt">
                            <img
                                src={img01}
                                alt="image.name"
                                className="bg-white"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography className="black-txt fw-bold text-uppercase" variant="h6" component="div">
                                    PRODUCT 5
                                </Typography>
                                <Typography className="black-txt" variant="subtitle1">
                                    <span className="fw-semibold">Price:</span> £ 100
                                </Typography>
                                <div className="text-uppercase black-txt">
                                    {renderStars(4)}
                                </div>
                                <div>
                                    <IconButton
                                        aria-controls="share-menu"
                                        aria-haspopup="true"
                                        onClick={handleShareClick}
                                    >
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton aria-label="Add to cart">
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="p-2">
                        <Card className="card-bg-gold black-txt">
                            <img
                                src={img01}
                                alt="image.name"
                                className="bg-white"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography className="black-txt fw-bold text-uppercase" variant="h6" component="div">
                                    PRODUCT 6
                                </Typography>
                                <Typography className="black-txt" variant="subtitle1">
                                    <span className="fw-semibold">Price:</span> £ 100
                                </Typography>
                                <div className="text-uppercase black-txt">
                                    {renderStars(4)}
                                </div>
                                <div>
                                    <IconButton
                                        aria-controls="share-menu"
                                        aria-haspopup="true"
                                        onClick={handleShareClick}
                                    >
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton aria-label="Add to cart">
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default TopDeals;

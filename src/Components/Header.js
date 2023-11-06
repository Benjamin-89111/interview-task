import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField, useMediaQuery, useTheme, Autocomplete } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useHistory } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logoImage from '../Images/logo_2.png';
import { useProducts } from './ProductListing';
import { Button, Dialog, DialogContent, DialogActions } from '@mui/material';
import Login from './Login';

const Header = ({ basketItems, isLoggedIn, username, toggleDrawer }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Control dropdown visibility
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false); // Control login dialog visibility
  const history = useHistory();

  useEffect(() => {
    // Update dropdown visibility based on search term
    setIsDropdownOpen(searchTerm !== '');
  }, [searchTerm]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { products } = useProducts();

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);

    const filteredOptions = products
      .filter((product) =>
        product.attributes.name.toLowerCase().includes(value.toLowerCase())
      )
      .map((product) => ({
        label: product.attributes.name,
        id: product.id,
      }));

    setAutocompleteOptions(filteredOptions);
  };

  const handleAutocompleteSelect = (event, product) => {
    if (product) {
      // Redirect to the selected product's details using the current search term
      history.push(`/product-details/${product.id}`);
      // Clear the search input field
      setSearchTerm('');
    }
  };

  const handleSearchButtonClick = () => {
    // Redirect to the selected product's details using the current search term
    if (searchTerm) {
      const selectedProduct = products.find((product) =>
        product.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (selectedProduct) {
        history.push(`/product-details/${selectedProduct.id}`);
      }
    }
  };

  const loginLogout = isLoggedIn ? (
    <Link style={{ color: "#000" }} to="/Logout">
      Logout
    </Link>
  ) : (
    <Link to="/Login">
      <Button style={{ color: "#fff" }}>
        Login
      </Button>
    </Link>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/">
            <img src={logoImage} alt="Your Logo" style={{ width: isMobile ? '80px' : '110px' }} />
          </Link>

          <div style={{ flexGrow: 1 }}>
            <Autocomplete
              id="search-products"
              options={autocompleteOptions}
              fullWidth
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}

                  placeholder="Search"
                  margin="normal"
                  className="search-box pe-2"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e, e.target.value)}
                  onFocus={() => setIsDropdownOpen(searchTerm !== '')}
                  onBlur={() => setIsDropdownOpen(false)}
                />
              )}
              onChange={handleAutocompleteSelect}
              getOptionLabel={(option) => option.label}
              open={isDropdownOpen}
            />
          </div>

          <div>
            {isLoggedIn ? (
              <>
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <AccountCircleIcon />
                </IconButton>
                <span className='' style={{ fontSize: "14px" }}>{username}</span>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem >
                    <Link to="/profile">
                      My Profile
                    </Link>
                  </MenuItem>
                  <MenuItem >
                    <Link to="/orders">
                      My Orders
                    </Link>
                  </MenuItem>
                  <MenuItem >
                    <Link to="/logout">
                      {loginLogout}
                    </Link>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              loginLogout
            )}
          </div>

          <div className="cart-container">
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/Basket">
              <IconButton className="cart-icon" color="inherit">
                <ShoppingCartIcon />
              </IconButton>
              <span className="cart-badge">{basketItems}</span>
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Menu Item 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Menu Item 2" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Menu Item 3" />
            </ListItem>
          </List>
        </div>
      </Drawer>

      {/* <Dialog className='' open={isLoginDialogOpen} onClose={() => setLoginDialogOpen(false)}>
        <DialogTitle className='text-center '>Login</DialogTitle>
        <DialogContent>
          <Login />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLoginDialogOpen(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
};

export default Header;

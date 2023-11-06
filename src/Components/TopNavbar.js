import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';

function TransparentDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleButtonClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  return (
    <>
      <div style={{ background: "rgb(26,26,26)" }} className='d-flex justify-content-center'>
        <Link target="_parent" to="/About">
          <Button
            variant="text"
            className='gold-txt'
          >
            About Us
          </Button>
        </Link>
        <div className='d-inline'>
          <Button
            variant="text"
            className='gold-txt'
            endIcon={<ArrowDropDownIcon style={{ color: "rgb(149, 120, 81)" }} />}
            onClick={handleButtonClick1}
          >
            Products
          </Button>

          <Menu
            anchorEl={anchorEl1}
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            <MenuItem>
              <span className='fw-light'>Brass</span>
            </MenuItem>
            <MenuItem>
              Sub Item 1
            </MenuItem>
            <MenuItem>
              Sub Item 2
            </MenuItem>
            {/* Add more menu items here */}
          </Menu>
        </div>

        <Link target="_parent" to="/Blog">
          <div className='d-inline'>
            <Button
              className='gold-txt'
              variant="text"
              // endIcon={<ArrowDropDownIcon style={{ color: "rgb(149, 120, 81)" }} />}
              // onClick={handleButtonClick}
            >
              BLOGS
            </Button>

            {/* <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            > */}
              {/* <Row> */}

              {/* <MenuItem>
                <span className='fw-light'>Buddha</span>
              </MenuItem>
              <MenuItem>
                <span className='fw-light'>Ganesha</span>
              </MenuItem>
              <MenuItem>
                <span className='fw-light'>Vishnu</span>
              </MenuItem>
              <MenuItem>
                <span className='fw-light'>Shiva</span>
              </MenuItem>
              <MenuItem>
                <span className='fw-light'>Natraja</span>
              </MenuItem> */}
              {/* </Row> */}
              {/*  */}
            {/* </Menu> */}
          </div>
        </Link>
        <Link target="_parent" to="/Contact">
          <Button
            variant="text"
            className='gold-txt'
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </>
  );
}

export default TransparentDropdown;

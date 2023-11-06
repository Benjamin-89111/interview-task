import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useHistory } from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import Footer from './Footer'
const initialUser = { email: '', password: '', username: '' };

function SignUp() {
  const [user, setUser] = useState(initialUser);
  const [validationErrors, setValidationErrors] = useState({});
  const history = useHistory();

  const handleSignUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;

      if (
        user.username &&
        user.email &&
        user.password &&
        validateUsername(user.username) &&
        validateEmail(user.email) &&
        validatePassword(user.password)
      ) {
        const res = await axios.post(url, user);
        if (res) {
          setUser(initialUser);
          history.push('/login');
        }
      }
    } catch (error) {
      toast.error('Account has Not Registered', {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const validateUsername = (username) => {
    const isValid = /^[a-zA-Z0-9]{5,20}$/.test(username);
    setValidationErrors((errors) => ({ ...errors, username: isValid ? '' : 'Username must be 5-15 alphanumeric characters' }));
    return isValid;
  };

  const validateEmail = (email) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setValidationErrors((errors) => ({ ...errors, email: isValid ? '' : 'Email address is required' }));
    return isValid;
  };

  const validatePassword = (password) => {
    // Password must be 6-15 characters
    const isLengthValid = /^(?=.{6,20})/.test(password);

    // Password must contain at least one letter
    const containsLetter = /[a-zA-Z]/.test(password);

    // Password must contain at least one number
    const containsNumber = /\d/.test(password);

    // Password must contain at least one symbol (non-alphanumeric character)
    const containsSymbol = /[^a-zA-Z\d\s]/.test(password);

    setValidationErrors((errors) => ({
      ...errors,
      password: isLengthValid && containsLetter && containsNumber && containsSymbol
        ? ''
        : 'Password must be 6-15 characters with at least one letter, one number, and one symbol',
    }));

    return isLengthValid && containsLetter && containsNumber && containsSymbol;
  };

  return (
    <Row className=''>
      <div className='pt-5 pb-5'>
        <Col md={12} className=''>
          <Container className="mt-3 mb-1" maxWidth="sm">
            <form >
              {/* <Typography variant="h4" align="center" gutterBottom> */}
              <h4 className='text-center'>
                Sign Up
              </h4>
              {/* </Typography> */}
              <TextField
                label="Username"
                name="username"
                type="text"
                value={user.username}
                onChange={handleUserChange}
                fullWidth
                required
                onBlur={(e) => validateUsername(e.target.value)}
                error={!!validationErrors.username}
              />
              {validationErrors.username && <div className="error-text">{validationErrors.username}</div>}
              <TextField
                label="Email"
                name="email"
                type="email"
                value={user.email}
                onChange={handleUserChange}
                fullWidth
                required
                onBlur={(e) => validateEmail(e.target.value)}
                error={!!validationErrors.email}
              />
              {validationErrors.email && <div className="error-text">{validationErrors.email}</div>}
              <TextField
                label="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleUserChange}
                fullWidth
                required
                onBlur={(e) => validatePassword(e.target.value)}
                error={!!validationErrors.password}
              />
              {validationErrors.password && <div className="error-text">{validationErrors.password}</div>}
              <Button className="button" variant="contained" color="primary" onClick={handleSignUp}>
                Sign Up
              </Button>
              <Typography align="center">
                Already an User <Link className="sign-up-link" to="/Login">Login</Link>
              </Typography>
            </form>
          </Container>
        </Col>
      </div>
      <Col lg={12}>
        <Footer />
      </Col>
    </Row>
  );
}

export default SignUp;

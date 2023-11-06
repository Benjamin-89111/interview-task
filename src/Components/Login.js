import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useHistory } from "react-router-dom";
import { storeUser } from './helpers';
import { Col, Row } from 'react-bootstrap';
// import './Login.css'; // Import the CSS file
import logo from '../Images/pexels-vlada-karpovich-6634654.jpg'
import Footer from './Footer';
const initialUser = { email: "", password: "" };

function Login() {
  const [user, setUser] = useState(initialUser);
  const history = useHistory();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser, [name]: value
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;

    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success('Logged in Successfully', {
            hideProgressBar: true,
          });
          setUser(initialUser);
          history.push("/");
          window.location.reload();
        }
      }
    } catch (error) {
      toast.error('Invalid Credentials', {
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <Row>
        <Col md={12} className='pt-5 pb-5'>
          <Container className="pt-5 mb-5 pb-5" maxWidth="sm">
            <form className="">
              <h4 className='text-center'>
                Login
              </h4>
              <TextField
                className="login-input"
                label="Email"
                name="identifier"
                type="email"
                value={user.identifier}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                className="login-input"
                label="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                fullWidth
                required
              />
              <Link to="/ForgetPassword">
              <p role='button' className='mb-0' style={{color:"#007BFF"}}>Forget Password</p>
              </Link>
              <Button className="login-button" variant="contained" color="primary" onClick={handleLogin}>
                Login
              </Button>
              <Typography align="center">
                New to India-Produced.com? <Link className="sign-up-link" to="/SignUp">Sign Up Here</Link>
              </Typography>

            </form>
          </Container>
        </Col>
        <Col lg={12}>
          <Footer />
        </Col>
      </Row >
    </>
  );
}

export default Login;

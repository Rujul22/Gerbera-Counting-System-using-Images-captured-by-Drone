import './RegisterScreen.css';
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);//if user dont provide picture it will throw error
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password != confirmpassword) {
      setMessage("Passwords Do not Match! Try Again!")
    } else {
      setMessage(null)
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          { name, pic, email, password },
          config
        );

        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setMessage("User successfully registered!");
        // Redirect to login page after 2 seconds

      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }

    }
    //console.log(email);
  }

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading />}
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>

      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className=" mb-4 text-green-700 signup-heading">SIGN UP</label>
        </div>
        <p className="font-medium  mx-auto text-lg text-gray-700  px-0.5 py-2  w-full">
          Please Enter your Details.
        </p>

        <Form onSubmit={submitHandler}>

          <Form.Group controlId="name">
           
            <Form.Control
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="name"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          {/* Email Id */}
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          {/* Password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {/* Confirm Password */}
          <Form.Group controlId="confirmPassword">
            <Form.Control
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {picMessage && (
            <ErrorMessage variant='danger'>{picMessage}</ErrorMessage>
          )}
        
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-green-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider "
              type="submit"
            >
              Register
            </button>
            {/*  */}
            <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-xl text- font-semibold text-lg border-2 border-gray-100 mt-4 px-4"style={{ width: '100%' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                  fill="#EA4335"
                />
                <path
                  d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                  fill="#34A853"
                />
                <path
                  d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                  fill="#4A90E2"
                />
                <path
                  d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                  fill="#FBBC05"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </Form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
        Already  have an Account? {" "}
          <a
            className="text-blue-600 hover:underline hover:underline-offset-4"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    </section>
    // <div className='loginContainer'>
    //   {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
    //   {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
    //   {loading && <Loading />}
    //   <Form onSubmit={submitHandler}>
    //     <Form.Group controlId="name">
    //       <Form.Label>Name</Form.Label>
    //       <Form.Control
    //         type="name"
    //         value={name}
    //         placeholder="Enter Name"
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </Form.Group>

    //     <Form.Group controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         value={email}
    //         placeholder="Enter email"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         value={password}
    //         placeholder="Password"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </Form.Group>

    //     <Form.Group controlId="confirmPassword">
    //       <Form.Label>Confirm Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         value={confirmpassword}
    //         placeholder="Confirm Password"
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //       />
    //     </Form.Group>
    //     {picMessage && (
    //       <ErrorMessage variant='danger'>{picMessage}</ErrorMessage>
    //     )}

    //     <Button variant='primary' type='submit'>
    //       Register
    //     </Button>
    //   </Form>
    //   <Row className='py-3'>
    //     <Col>
    //       Have an Account ? <Link to="/login">Login</Link>
    //     </Col>
    //   </Row>
    // </div>


  )
};

export default RegisterScreen;

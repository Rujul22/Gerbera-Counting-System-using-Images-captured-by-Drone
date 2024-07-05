import React, { useEffect, useState } from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve user information from local storage
    const storedUserInfo = localStorage.getItem("userInfo");

    // Parse the JSON string back into an object
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="nav-item"
        style={{ fontWeight: "500", fontSize: "18px" }}
      >
        <Link to="/" className="nav-link">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="nav-item"
        style={{ fontWeight: "500", fontSize: "18px" }}
      >
        <Link to="#demo" className="nav-link">
          Demo
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="nav-item"
        style={{ fontWeight: "500", fontSize: "18px" }}
      >
        <Link to="/features" className="nav-link">
          Features
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="nav-item"
        style={{ fontWeight: "500", fontSize: "18px" }}
      >
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="nav-item"
        style={{ fontWeight: "500", fontSize: "18px" }}
      >
        <Link to="/#contactus" className="nav-link">
          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="nav-item"
        style={{ fontWeight: "500", fontSize: "18px" }}
      >
        <a
          href="https://github.com/Anjali1822/FlowerDetectionAndCounting"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 border "
        style={{ backgroundColor: "#4CAF50" }}
      >
        <div className="flex items-center justify-between text-white">
          <Typography
            className="mr-4 cursor-pointer py-1.5 font-medium"
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            <Link to="/" className="text-bold">
              Gerbera Detection System
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {/* {userInfo?{userInfo.name}:  <Link to="/login" className="nav-link" style={{ color: "white" }}>Log In</Link>} */}
              {userInfo ? (
                <span
                  className="px-4 py-1 capitalize text-lg font-bold"
                  style={{ color: "white" }}
                >
                  Hii {userInfo.name}!
                </span>
              ) : (
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  style={{ backgroundColor: "black" }}
                >
                  <Link
                    to="/login"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Log In
                  </Link>
                </Button>
              )}

              <Button
                size="sm"
                className="hidden lg:inline-block"
                style={{ backgroundColor: "black" }}
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  localStorage.removeItem("username");
                }}
              >
                {userInfo ? (
                  <Link
                    to="/login"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Log Out
                  </Link>
                ) : (
                  <Link
                    to="/register"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Sign up
                  </Link>
                )}
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="gradient" size="sm">
              <Link to="/LoginScreen" className="nav-link">
                Log In
              </Link>
            </Button>
            <Button fullWidth variant="gradient" size="sm">
              <Link to="/signup" className="nav-link">
                Sign up
              </Link>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

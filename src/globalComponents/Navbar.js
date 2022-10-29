import React, { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import {
  BsFileEarmarkLockFill,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { login } from "../features/userAuth/userAuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // navbar sticky to when scroll start
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 250
        ? setStickyClass("fixed top-0 left-0 z-50 bg-white shadow-lg")
        : setStickyClass("relative");
    }
  };
  // navbar sticky to when scroll end
  const [checkbox, setCheckbox] = useState(false);
  const [adminCheckbox, setAdminCheckbox] = useState(false);
  const { user, accessToken } = useSelector((state) => state.auth || {});

  // console.log(user?.role)
  // logged in checking
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    dispatch(login({ user: auth?.user, token: auth?.token }));
  }, [dispatch, navigate]);

  //active link
  let activeStyle = {
    color: "green",
  };

  return (
    <header>
      {/* ......Mini navbar start...... */}
      <div className="py-3 bg-[#d0ffce] hidden sm:block">
        <div className="flex justify-between container mx-auto px-5">
          <div className="font-bold text-sm md:text-base flex items-center gap-2">
            <BsFillTelephoneForwardFill className="text-sm" />
            <span className="text-primary">Hot Line</span> (+88) 45854-42224
          </div>
          <div>
            <ul className="flex text-sm gap-2 md:gap-3 md:text-base font-bold">
              {user?.name ? (
                <p className="text-primary">
                  Wellcome {user?.name.toUpperCase()}
                </p>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="hover:text-primary flex items-center gap-1"
                  >
                    <BsFileEarmarkLockFill className="text-sm" />
                    Login
                  </NavLink>
                  /
                  <NavLink
                    to="/register"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="hover:text-primary flex items-center gap-1"
                  >
                    <FaUserAlt className="text-sm" />
                    Register
                  </NavLink>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* ......Mini navbar end...... */}

      <div
        className={`w-full py-5 shadow-lg bg-white duration-700 ${stickyClass}`}
      >
        <div className="flex justify-between items-center container mx-auto px-5">
          {/*.......Website Logo........*/}
          <div>
            <NavLink
              className={"cursor-pointer hover:bg-primary bg-opacity-90"}
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <figure>
                <img src={logo} alt="logo" className="shrink-0 w-44" />
              </figure>
            </NavLink>
          </div>

          {/*.......md and lg navbar start.......*/}
          <div className="hidden md:block">
            <div className="flex items-center justify-between sm:gap-10">
              <div>
                <ul className="flex md:gap-3 lg:gap-6">
                  <li className="font-bold">
                    <NavLink
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink
                      to="/jobs"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Jobs
                    </NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink
                      to="/about"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      About
                    </NavLink>
                  </li>

                  <li className="font-bold">
                    <NavLink
                      to="/blogs"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink
                      to="/contact"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex gap-2">
                {accessToken && user?.email ? (
                  <NavLink
                    to={`/${user?.role}`}
                    className="btn rounded-none border-0 bg-primary hover:bg-accent text-white font-bold px-4"
                  >
                    Dashboard
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      to="/"
                      className="btn rounded-none border-0 duration-700 bg-primary hover:bg-accent text-white font-bold px-4"
                    >
                      Post a job
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
          {/*........md and lg navbar start.........*/}

          {/*.........Mobile navbar start..........*/}
          <label className="btn bg-white hover:bg-white px-3 swap swap-rotate border-2 md:hidden">
            <input type="checkbox" onClick={() => setCheckbox(!checkbox)} />
            <svg
              className="swap-off"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {checkbox && (
            <div className="absolute top-20 inset-x-4 z-10 md:hidden">
              <ul className="menu bg-base-100 p-5 shadow-lg rounded-box border-2 w-full gap-y-3">
                <li className="font-bold">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    to="/jobs"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Jobs
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    to="/about"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li className="font-bold">
                  <NavLink
                    to="/blogs"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="font-bold">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Contact
                  </NavLink>
                </li>

                <div className="flex gap-2">
                  {accessToken && user?.email ? (
                    <NavLink
                      to={`/${user?.role}`}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      className="btn btn-primary text-white"
                    >
                      Dashboard
                    </NavLink>
                  ) : (
                    <>
                      <NavLink
                        to="/login"
                        className="btn btn-primary text-white"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/register"
                        className="btn btn-primary text-white"
                      >
                        Register
                      </NavLink>
                    </>
                  )}
                </div>
              </ul>
            </div>
          )}
          {/*.........Mobile navbar end............*/}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

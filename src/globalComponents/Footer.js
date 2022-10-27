import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import ScrollToTop from "react-scroll-to-top";
import {
  AiOutlineGooglePlus,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      {/* ......scroll to top button..... */}
      <ScrollToTop
        smooth
        color="white"
        width="25px"
        height="25px"
        style={{
          backgroundColor: "tomato",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <div className="bg-[#F9FCFF] py-16">
        <div className="grid px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 container mx-auto text-base-100">
          {/* .......footer info start........ */}
          <div>
            <div>
              <div>
                <figure className="mb-4">
                  <img src={logo} alt="logo" className="shrink-0 w-44" />
                </figure>
                <p className="mb-5 text-neutral">
                  Lorem Ipsum is simply dummy text of printing and type setting
                  industry. Lorem Ipsum been industry standard dummy text ever
                  since.
                </p>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div className="bg-primary p-3 rounded-full cursor-pointer hover:bg-white border-primary border-2 hover:text-primary">
                  <GrFacebookOption />
                </div>
                <div className="bg-primary p-3 rounded-full cursor-pointer  hover:bg-white border-primary border-2 hover:text-primary">
                  <AiOutlineGooglePlus />
                </div>
                <div className="bg-primary p-3 rounded-full cursor-pointer  hover:bg-white border-primary border-2 hover:text-primary">
                  <AiOutlineTwitter />
                </div>
                <div className="bg-primary p-3 rounded-full cursor-pointer  hover:bg-white border-primary border-2 hover:text-primary">
                  <FiInstagram />
                </div>
              </div>
            </div>
          </div>
          {/* .......footer info end........ */}

          {/* .......footer Job Categories start........ */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Job Categories</h2>
            <ul className="mt-5">
              <li className="flex justify-start items-center text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Softweer Enginner</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Web Developer</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">UI/UX Designer</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Content Writer</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Web designer</Link>
              </li>
            </ul>
          </div>
          {/* .......footer Job Categories end........ */}

          {/* .......footer Resources start........ */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Resources</h2>
            <ul className="mt-5">
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">How it work</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Suport</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Our Team</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">FAQ</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="#">Privacy & policy</Link>
              </li>
            </ul>
          </div>
          {/* .......footer Resources end........ */}

          {/* .......footer quick link start........ */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Quick Links</h2>
            <ul className="mt-5">
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/home">Home</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/about">About Us</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/services">Services</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/blog">Blogs</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-accent">
                <BiRightArrowAlt className="text-primary" />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* .......footer quick link end........ */}

          {/* .......footer contact us start........ */}
          <div>
            <h2 className="text-2xl font-bold mb-5 text-primary">Contact Us</h2>
            <div className="flex justify-start items-center gap-3 mb-3">
              <div className="text-white text-2xl bg-primary p-2 rounded">
                <MdLocationOn />
              </div>
              <div className="text-neutral">
                <h4>1247/Plot No. 39, 15th Phase</h4>
                <h2>LHB Colony, Kanpur</h2>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-3">
              <div className="text-2xl text-white bg-primary p-2 rounded">
                <BsFillTelephoneFill />
              </div>
              <div className="text-neutral">
                <h4>+91-7052-101-786</h4>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-3">
              <div className="text-white text-2xl bg-primary p-2 rounded">
                <AiOutlineMail />
              </div>
              <div className="text-neutral">
                <h4>help@example.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ......copyright section..... */}
      <div className="p-4 bg-[#222] text-base-100">
        <div className="flex justify-center items-center">
          <p className="text-xs">
            Copyright © 2022 - All right reserved: team-alpha-infinity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

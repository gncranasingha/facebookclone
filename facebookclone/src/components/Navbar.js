import React from 'react'
import { FaUser, FaBell, FaEnvelope, FaBars, FaThumbsUp } from 'react-icons/fa'; // Importing required icons
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiUserSquare } from "react-icons/pi";
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'; // Importing WhatsApp and Messenger icons


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
        <div className="d-flex align-items-center w-100">
          {/*  Logo and Search */}
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" width="30" height="30" className="d-inline-block align-top" alt="" />
            </a>
            <form className="ml-2">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>

          {/*  Icon */}
          <div className="mx-auto d-flex align-items-center">
            <div className="mx-2">
              <IoHomeOutline size={25} />
            </div>
            <div className="mx-4">
              <LuUsers2 size={25} />
            </div>
            <div className="mx-4">
              <AiOutlineYoutube size={25} />
            </div>
            <div className="mx-4">
              <HiOutlineHomeModern size={25} />
            </div>
            <div className="mx-4">
              <PiUserSquare size={25} />
            </div>
          </div>

          {/*  Other Icons */}
          <div className="d-flex align-items-center">
           
            <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center mx-2" style={{ width: '40px', height: '40px' }}>
              <FaBars size={20} color="white" />
            </div>

            
            <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center mx-2" style={{ width: '40px', height: '40px' }}>
              <FaEnvelope size={20} color="white" />
            </div>

            
            <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center mx-2" style={{ width: '40px', height: '40px' }}>
              <FaBell size={20} color="white" />
            </div>

            
            <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center mx-2" style={{ width: '40px', height: '40px' }}>
              <FaUser size={20} color="white" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
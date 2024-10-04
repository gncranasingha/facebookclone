import React from 'react'

import { FaUser, FaBell, FaEnvelope, FaBars, FaThumbsUp } from 'react-icons/fa'; // Importing required icons
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiUserSquare } from "react-icons/pi";
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'; // Importing WhatsApp and Messenger icons


const MainSection = () => {
  return (
    <div>
        {/* New Section: Cover Photo */}
      <div className="cover-section" style={{ height: '40vh', position: 'relative', overflow: 'hidden' }}>
        <img 
          src="https://as1.ftcdn.net/v2/jpg/05/19/31/50/1000_F_519315094_pL4ws1Qd9cEuEuIxCy1vtSgHHiuPtah0.jpg"
          alt="Cover"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            position: 'absolute', 
            top: '0', 
            left: '0' 
          }} 
        />
      </div>

      {/* Profile Image */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', // Center the profile image vertically on the cover image
        left: '50%', 
        transform: 'translate(-370%, -50%)', // Center it horizontally
        width: '150px', // Width of the profile image
        height: '150px', // Height of the profile image
        borderRadius: '50%', // Makes it round
        overflow: 'hidden', // Hide overflow
        border: '3px solid white', // Optional: white border around the profile image
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Optional: shadow effect
      }}>
        <img 
          src='https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg' // Your profile image
          alt="Profile"
          style={{ 
            width: '200%', // Increase width to show half above and below
            height: '200%', // Increase height to show both halves of the profile image
            objectFit: 'cover', 
            position: 'absolute', 
            top: '-50%', // Move the image up so that half shows above the cover
            left: '50%', 
            transform: 'translate(-50%, 0)', // Center the image horizontally
          }} 
        />
      </div>

      {/* Page Name and Counts Section */}
      <div style={{ marginTop: '20px', marginLeft: '250px', display: 'flex', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: '0' }}>Vampior Designs</h2>
          <div>
            <span style={{ marginRight: '10px' }}>100 Likes</span>
            <span>50 Followers</span>
          </div>
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', gap: '10px',marginLeft:'350px' }}>
          <button style={{ display: 'flex', alignItems: 'center', padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '#0078FF', color: 'white' }}>
            <BsWhatsapp style={{ marginRight: '5px' }} />
            WhatsApp
          </button>
          <button style={{ display: 'flex', alignItems: 'center', padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '', color: 'black' }}>
            <BsMessenger style={{ marginRight: '5px' }} />
            Messenger
          </button>
          <button style={{ display: 'flex', alignItems: 'center', padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '', color: 'black' }}>
            <FaThumbsUp style={{ marginRight: '5px' }} />
            Like
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default MainSection
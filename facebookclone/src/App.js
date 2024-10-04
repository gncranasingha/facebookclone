import logo from './logo.svg';
import { FaUser, FaBell, FaEnvelope, FaBars, FaThumbsUp } from 'react-icons/fa'; // Importing required icons
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiUserSquare } from "react-icons/pi";
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'; // Importing WhatsApp and Messenger icons
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';

function App() {
  return (
    <div>
      <Navbar />

      {/* First section start */}
      <div style={{ backgroundColor: 'white', padding: '20px 0' }}> {/* Adding padding for spacing */}
        <div style={{ margin: '0px 170px' }}>
          <MainSection />
          {/* Divider */}
          <hr style={{ border: '1px solid #ccc' }} />
          <ItemList />
        </div>
      </div>
       {/* First section end */}

      {/* Second section start  */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}> {/* Adding padding for spacing */}
        <div style={{ margin: '0px 170px', display: 'flex', justifyContent: 'space-between' }}> {/* Flex layout to space cards */}
          
          {/* Left Card */}
          <LeftCard/>

          {/* Right Card */}
          <RightCard/>
        </div>
      </div>
       {/* Second section end  */}

    </div>
  );
}

export default App;

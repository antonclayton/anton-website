import React, { useState, useEffect} from 'react'
import Uni from '../Assets/UniGojo.jpg'
import { Link } from 'react-router-dom'
import "../Styles/NavBar.css";
import ListAltIcon from '@mui/icons-material/ListAlt';

function NavBar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  }

  useEffect(() => {
    const handleResize = () => {
      setOpenLinks(window.innerWidth <= 600) //set true if less than 600px
    }

    window.addEventListener('resize', handleResize) //activates if 'resize' occurs

    handleResize() //initially called just in case for when the page is first rendered

    return () => {
      window.removeEventListener('resize', handleResize) //remove event listener to prevent memory leak
    }
  },[]) //empty dependency array to ensure that the effect only runs once
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Uni} style={{borderRadius: '25px', width: '72px'}}></img>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Misc">Misc</Link>
        </div>
      </div>

      <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Misc">Misc</Link>
        <button onClick={toggleNavbar}>
          <ListAltIcon/>
        </button>
      </div>
    </div>
  )
}

export default NavBar

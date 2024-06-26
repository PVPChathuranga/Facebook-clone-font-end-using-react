import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';
import SettingsIcon from '@mui/icons-material/Settings';
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className="logo">FaceBook</span>
        </div>

        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search Your Friends' className="searchInput" />
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">HomePage</span>
                <span className="navBarLink">Profile</span>
            </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonIcon/>
                    <span className="iconTag">3</span>
                    
                </div>
                <div className="navBarIcon">
                    <CommentIcon/>
                    <span className="iconTag">4</span>
                    
                </div>
                <div className="navBarIcon">
                    <SettingsIcon/>
                    <span className="iconTag">2</span>
                    
                </div>
            </div>
            <div className="pic">
                <img src="/Images/1.jpeg" alt="" className="profileImage" />
            </div>

        </div>
    </div>
  )
}

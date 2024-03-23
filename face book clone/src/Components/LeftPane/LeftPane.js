import React from 'react'
import './LeftPane.css'
import MessageIcon from '@mui/icons-material/Message';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkIcon from '@mui/icons-material/Work';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="laftPaneMenu">
          <li className="leftPaneMenuItem">
              <MessageIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Messeges</span>
          </li>
          <li className="leftPaneMenuItem">
              <GroupsIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Groups</span>
          </li>
          <li className="leftPaneMenuItem">
              <RssFeedIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Feed</span>
          </li>
          <li className="leftPaneMenuItem">
              <AutoStoriesIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Pages</span>
          </li>
          <li className="leftPaneMenuItem">
              <CalendarMonthIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Events</span>
          </li>
          <li className="leftPaneMenuItem">
              <SettingsIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Settings</span>
          </li>
          <li className="leftPaneMenuItem">
              <SportsEsportsIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Game</span>
          </li>
          <li className="leftPaneMenuItem">
              <NewspaperIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>News</span>
          </li>
          <li className="leftPaneMenuItem">
              <WorkIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Jobs</span>
          </li>
          <li className="leftPaneMenuItem">
              <LocalGroceryStoreIcon className='leftPaneMenuIcon'/>
              <span className='leftPaneMenuIconText'>Market</span>
          </li>
          <hr/>
          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>
          <div className="pageList">
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">kalana supun</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">kalana supun</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">kalana supun</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">kalana supun</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">kalana supun</span>
              </li>
              <li className="pageListItem">
                <img src="/images/1.jpeg" alt="" className="pagePic" />
                <span className="pageName">kalana supun</span>
              </li>
          </div>
        </div>
      </div>
    </div>
  )
}

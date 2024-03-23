import React from 'react'
import './AddPost.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContiner">
            <div className="addPostTop">
                <img src="/images/1.jpeg" alt="" className="addPostPic" />
                <input placeholder='What is Your Mind..' type="text" className="addPostInput" />
            </div>
            <hr className="postHr" />
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostOption">
                        <AddAPhotoIcon htmlColor='orange' className='addPhoto'/>
                        <span className="addPhotoContinerText">Add Photo/Video</span>
                    </div>
                    <div className="addPostOption">
                        <LocationOnIcon htmlColor='red' className='addPhoto'/>
                        <span className="addPhotoContinerText">Add Location</span>
                    </div>
                    <div className="addPostOption">
                        <LocalOfferIcon htmlColor='blue' className='addPhoto'/>
                        <span className="addPhotoContinerText">Add Tag</span>
                    </div>
                    <div className="addPostOption">
                        <OndemandVideoIcon htmlColor='tomato' className='addPhoto'/>
                        <span className="addPhotoContinerText">Go Live</span>
                    </div>         
                </div>
                    <button className="postButton">Post</button>
            </div>
        </div>
    </div>
  )
}

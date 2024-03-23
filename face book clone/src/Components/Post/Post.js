import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/1.jpeg" alt="" className="postImages" />
                <span className="postUserName">Pathum Chathuranga</span>
                <span className="postTime">5 ming ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    Hello I'm Bat Man...! You are Understand..!
                </div>
                <img src="/images/1.jpeg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/3.png" alt="" className="reactActionPic" />
                    <img src="/images/2.png" alt="" className="reactActionPic" />
                    <img src="/images/4.png" alt="" className="reactActionPic" />
                    <span className="likeCount">Batman and 255 other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">
                        15 comments
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

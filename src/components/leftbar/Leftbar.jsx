import React from 'react'
import image from "../../pages/login/pexels-flodahm-699459.jpg"
import "./leftbar.scss"


const Leftbar = () => {
    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={image} alt="" />
                        <span>Tanmay Kumar chaaurasia</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>MarketPlace</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Message</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Tutorial</span>
                    </div>
                    <div className="item">
                        <img src={image} alt="" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar

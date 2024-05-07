import React from "react";
import '../../Components/NavBar/navBar.css'
import Logo from "../../Apis/Gallery/logo.png"
import seach from "../../Apis/Gallery/seach.png"
import scan from "../../Apis/Gallery/scan.png"
import masseage_notif from "../../Apis/Gallery/masseage_notif.png"
import notification from "../../Apis/Gallery/notification.png"
import setting from '../../Apis/Gallery/set.png'
import question from "../../Apis/Gallery/question.png"
import profile from "../../Apis/Gallery/profile.png"


const NavBar = () => {
    return (
        <>
            <div className="navbar_main">
                <div className="Nav_logo">
                    <img src={Logo} alt='' />
                </div>
                <div className="Search_main">
                    <div className="Search">
                        <img src={seach} alt='' />
                        <div>Search</div>
                    </div>
                </div>
                <div className="Profile_section">
                    <div className="icons">
                        <img className="pro" src={scan}alt='' />
                        <img className="pro" src={masseage_notif} alt='' />
                        <img className="pro" src={notification} alt='' />
                        <img  className= "pro" src={setting} alt='' />
                         <img className="pro"src={question} alt='' />
                       
                    </div>
                    <div>
                        <img src={profile} alt='' />
                    </div>
                </div>


            </div>
        </>
    )
}
export default NavBar
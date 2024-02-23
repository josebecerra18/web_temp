import { useState } from 'react';
import { Link } from "react-router-dom";

import {AiOutlineSearch,} from 'react-icons/ai'
import { FaPlusCircle} from 'react-icons/fa'
import { IoHomeOutline ,IoChatbubblesOutline,IoChatbubbleOutline,IoSearchOutline,IoHome} from "react-icons/io5";
import './Topbar.css'
// import { useSignOutAccount } from "@/lib/react-query/queries";

const Topbar = () => {
  const [userStatus, setUserStatus] = useState('logIn');//this needs to come from firebase or local data
  const [selectedTabBarIcon, setSelectedTabBarIcon] = useState('Home');//this needs to come from firebase or local data
//   useEffect(() => {
//     if (isSuccess) navigate(0);
//   }, [isSuccess]);
const profileGuessUI =()=>{
    if(userStatus === 'logIn'){
        return (
            <Link to={`/`} className="profile-icon">
                <img
                    src={ "/assets/icons/profile-placeholder.svg"}
                    alt="profile"
                    className="profile-image"
                    style={{width: '100%',}}
                />
                <h1 className='icons-title' style={{fontSize:12,marginTop:2}}>Profile</h1>
            </Link>   
        )
    }else{
        return (
            <Link to={`/sign-up`} className="profile-icon">
                <img
                    src={ "/assets/icons/profile-placeholder.svg"}
                    alt="profile"
                    className="profile-image"
                    style={{width: '100%',}}
                />
                <h1 className='icons-title' style={{fontSize:12,marginTop:2}}>Log in</h1>
            </Link>   
        )
    }
}
  return (
    <section className="topbar-meins">
      <div className="flex-between py-4 px-5">
        <div className='open-in-app'>
   
          <Link to="/"  className="flex gap-3 items-center">
            <img
              src="/assets/logo.png"
              alt="logo"
              width={50}
              height={50}
              style={{borderRadius:10,}}
            />
          </Link>
            <Link to={`https://meins.page.link/nPwh`} className='open-in-app-button'>
                        <h1 style={{fontSize:12}}>Open in App</h1>
            </Link>
        </div>
       
        
        <Link to="/" className='link-search' >
            <div >
              <AiOutlineSearch size={35} className='icon-search' />
            </div>
            <div className='div-search'>
                <h1 style={{color: 'purple', marginLeft: 10}}>Search in</h1>
                <h2  translate="no" style={{color: 'red', marginLeft: 5,fontWeight: 'bold', fontSize:20}}>MEINS</h2>
            </div>
        </Link>

        <div>
            <div className='open-in-app-button-small-div'>
                <Link to={`https://meins.page.link/nPwh`} className='open-in-app-button-small'>
                    <h1 style={{fontSize:12}}>Open in App</h1>
                </Link>
            </div>
            <div className='menu-plus-person-div'>
                <div className="icon-search-small">
                    <IoSearchOutline  style={{width: '100%',}}/>
                </div>
                <div className="icons-home-chats-post">
                    {selectedTabBarIcon === 'Home'? <IoHome color={'#da2a3a'} style={{width: '100%',}}/>: <IoHomeOutline style={{width: '100%',}}/> }
                   
                    <h1 className='icons-title' style={{fontSize:12, color:selectedTabBarIcon === 'Home'?'#da2a3a': 'black'}}>Home</h1>
                </div>
                <div className="icons-home-chats-post" >
                    <IoChatbubblesOutline style={{width: '100%',}}/>
                    <h1 className='icons-title' style={{fontSize:12,whiteSpace: 'nowrap',}}>Group Chat</h1>
                </div>
                <div className="icons-home-chats-post" >
                    <FaPlusCircle style={{width: '100%',}}/>
                    <h1 className='icons-title' style={{fontSize:12,}}>Posts</h1>
                </div>
                <div className="icons-home-chats-post" >
                    <IoChatbubbleOutline style={{width: '100%',}}/>
                    <h1 className='icons-title' style={{fontSize:12,whiteSpace: 'nowrap',}}>My Chat</h1>
                </div>
              {profileGuessUI()}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
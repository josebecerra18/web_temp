import React, { useState } from 'react';
import { RiHomeLine, RiChatSmileLine, RiUserLine, RiNotificationLine, RiSettings3Line } from 'react-icons/ri';

const TopBar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string | null>("Home");

    const handleItemClick = (itemName: string) => {
        setActiveItem(prevActiveItem => prevActiveItem === itemName ? null : itemName);
    };

    return (
        <div className="w-full h-20 bg-meins-background flex items-center justify-between px-14">
            <h1 className="font-extrabold text-white text-2xl mr-12">MEINS</h1>
            <input className="text-black border-2 border-gray-200 rounded-2xl py-2 px-4 h-12 w-full bg-gray-100 focus:outline-none" type="text" placeholder="Busqueda"/>
            <div className="ml-8 min-w-96">
                <ul className="flex space-x-4">
                    <li className={`flex items-center rounded-2xl py-2 px-4 cursor-pointer font-bold transition duration-200 ease ${activeItem === 'Home' ? 'bg-gray-50/10' : ''}`} onClick={() => handleItemClick('Home')}>
                        <RiHomeLine className={`text-2xl ${activeItem === 'Home' ? 'text-white' : 'text-gray-50/60'}`} />
                        {activeItem === 'Home' && <span className="ml-1 text-white">Home</span>}
                    </li>
                    <li className={`flex items-center rounded-2xl py-2 px-4 cursor-pointer font-bold transition duration-200 ease ${activeItem === 'Chats' ? 'bg-gray-50/10' : ''}`} onClick={() => handleItemClick('Chats')}>
                        <RiChatSmileLine className={`text-2xl ${activeItem === 'Chats' ? 'text-white' : 'text-gray-50/60'}`} />
                        {activeItem === 'Chats' && <span className="ml-1 text-white">Chats</span>}
                    </li>
                    <li className={`flex items-center rounded-2xl py-2 px-4 cursor-pointer font-bold transition duration-200 ease ${activeItem === 'Friends' ? 'bg-gray-50/10' : ''}`} onClick={() => handleItemClick('Friends')}>
                        <RiUserLine className={`text-2xl ${activeItem === 'Friends' ? 'text-white' : 'text-gray-50/60'}`} />
                        {activeItem === 'Friends' && <span className="ml-1 text-white">Friends</span>}
                    </li>
                    <li className={`flex items-center rounded-2xl py-2 px-4 cursor-pointer font-bold transition duration-200 ease ${activeItem === 'Notifications' ? 'bg-gray-50/10' : ''}`} onClick={() => handleItemClick('Notifications')}>
                        <RiNotificationLine className={`text-2xl ${activeItem === 'Notifications' ? 'text-white' : 'text-gray-50/60'}`} />
                        {activeItem === 'Notifications' && <span className="ml-1 text-white">Notifications</span>}
                    </li>
                </ul>
            </div>
            <div className="flex items-center ml-10 w-fit min-w-80">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://images.pexels.com/photos/921231/pexels-photo-921231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-full w-full object-cover" alt="Imagen redonda" />
                </div>
                <p className="text-gray-50/90 font-bold ml-4">Carolina Rivas</p>
                <span className="ml-8"><RiSettings3Line className="text-gray-50/90 text-3xl cursor-pointer" /></span>
            </div>
        </div>
    );
};

export default TopBar;

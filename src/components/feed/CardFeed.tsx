import React from "react";
import { RiHeartLine, RiChat4Line, RiShareForwardLine, RiSendPlane2Line } from 'react-icons/ri';

interface CardFeedProps {
    item: any;
}
const CardFeed: React.FC<CardFeedProps> = ({ item }) => {
    return (
        <div className="bg-white rounded-2xl min-h-fit p-4 min-w-[350px] max-w-full">
            <div className="flex items-center mt-2">
                <div className="h-16 w-16 rounded-full border-4 border-white overflow-hidden">
                    <img src={item.userPhotoURL} className="h-full w-full object-cover" alt="Imagen redonda" />
                </div>
                <div className="ml-4">
                    <p className="text-black font-bold">{item.userName}</p>
                    <p className="text-gray-400 text-sm">hace 12 minutos</p>
                </div>
            </div>
            <div className="my-4 ml-4">
                <p className="text-black">{item.description}</p>
            </div>
            <div className="w-full p-2">
                <div className="h-96 max-h-[800px] w-full min-w-full rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src={item.mediaPhotos} alt="Imagen" />
                </div>
            </div>
            <div className="w-full flex justify-between items-center px-6 mt-2">
                <div className="flex">
                    <span className="text-black font-semibold flex items-center"><RiHeartLine className="text-2xl cursor-pointer"/> <p className="text-black ml-2">{item.likesCount}</p></span>
                    <span className="text-black font-semibold mx-4 flex items-center"><RiChat4Line className="text-2xl cursor-pointer" /> <p className="text-black ml-2">{item.commentsCount}</p></span>
                    <span className="text-black font-semibold flex items-center"><RiShareForwardLine className="text-2xl cursor-pointer"/> <p className="text-black ml-2">89</p></span>
                </div>
                <div>
                    <span className="text-black font-semibold"><RiSendPlane2Line className="text-2xl cursor-pointer transform -rotate-45" /></span>
                </div>
            </div>
            <div className="flex items-center my-4 pl-2 pr-4">
                <div className="h-16 w-16 rounded-full border-4 border-white overflow-hidden mr-4">
                    <img src="https://images.pexels.com/photos/921231/pexels-photo-921231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-full w-full object-cover" alt="Imagen redonda" />
                </div>
                <input className="focus:outline-2 outline-meins-background text-black border-2 border-gray-200 rounded-2xl py-2 px-4 h-12 w-full bg-gray-100" type="text" placeholder="Escribe tu comentario"/>
            </div>
        </div>
    )
}

export default CardFeed;
import React from "react";
import { RiEarthLine, RiCamera2Line, RiImageLine, RiArrowDownSLine } from 'react-icons/ri';

const ShareComponent: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl min-h-fit p-4 min-w-full w-full flex flex-col justify-center items-center">
            <div className="flex items-center w-full pr-2">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img src="https://images.pexels.com/photos/921231/pexels-photo-921231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-full w-full object-cover" alt="Imagen redonda" />
                </div>
                <input className="text-black border-2 border-gray-200 rounded-2xl py-2 px-4 h-12 w-full bg-gray-100 focus:outline-2 outline-meins-background" type="text" placeholder="Comparte algo..."/>
            </div>
            <div className="flex justify-between w-full mt-4 px-24">
                <div className="flex">
                    <span className="text-black flex justify-center items-center cursor-pointer"><RiImageLine className="text-2xl mr-2" /> Imagen</span>
                    <span className="text-black ml-8 flex justify-center items-center cursor-pointer"><RiCamera2Line className="text-2xl mr-2" /> Video</span>
                </div>
                <div>
                    <span className="text-black flex justify-center items-center cursor-pointer"><RiEarthLine className="text-2xl mr-2" /> Público <RiArrowDownSLine /></span>
                </div>
            </div>
        </div>
    )
}

export default ShareComponent;
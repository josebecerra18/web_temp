import React from 'react';
import CustomButton from "@/components/shared/ui/CustomButton.tsx";

const CardProfileInfo: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl min-h-fit p-4">
            <div className="relative">
                <div className="h-32 w-full rounded-2xl overflow-hidden">
                    <img src="https://media.istockphoto.com/id/672425798/es/foto/pareja-en-tumbonas-en-la-playa-en-maldivas.jpg?s=612x612&w=0&k=20&c=4O7S08qW9MrAMJgw8E_S9xH49km4wwpxKeE-9UND2pI=" />
                </div>
                <div className="w-full flex justify-center absolute bottom-[-40px]">
                    <div className="h-20 w-20 rounded-full border-4 border-white overflow-hidden">
                        <img src="https://images.pexels.com/photos/921231/pexels-photo-921231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-full w-full object-cover" alt="Imagen redonda" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-14">
                <p className="text-black font-bold">Carolina Rivas</p>
                <p className="text-gray-400">@carolina_rivas</p>
            </div>
            <div className="w-full flex justify-center mb-4 mt-4">
                <ul className="w-full flex justify-between rounded-2xl bg-gray-100 p-4">
                    <li className="flex flex-col justify-center items-center">
                        <p className="text-black font-bold">250</p>
                        <p className="text-gray-400">Post</p>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <p className="text-black font-bold">2022</p>
                        <p className="text-gray-400">Followers</p>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <p className="text-black font-bold">590</p>
                        <p className="text-gray-400">Following</p>
                    </li>
                </ul>
            </div>
            <CustomButton />
        </div>
    )
}

export default CardProfileInfo;
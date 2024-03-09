import React from "react";

const CardSuggestedFriends: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl min-h-fit p-4 min-w-[350px]">
            <div className="flex justify-between mt-2 mb-4">
                <h3 className="text-black font-bold ml-4">Contactos sugeridos</h3>
                <a className="text-gray-400 mr-2 cursor-pointer">Ver todos</a>
            </div>
            <hr />
            <div className="mt-2">
                <ul>
                    <li className="flex items-center mb-4 relative">
                        <div className="h-16 w-16 rounded-full border-4 border-white overflow-hidden">
                            <img src="https://www.blogdelfotografo.com/wp-content/uploads/2019/08/mujer-retrato.webp" className="h-full w-full object-cover" alt="Imagen redonda" />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-black font-bold ml-4">Sofia Martinez</p>
                            <p className="text-gray-400 ml-4 text-sm">Amiga de Sheila Dara</p>
                        </div>
                        <div className="flex justify-end absolute right-0">
                            <p className="font-bold text-gray-400 cursor-pointer">Siguiendo</p>
                        </div>
                    </li>
                    <li className="flex items-center mb-4 relative">
                        <div className="h-16 w-16 rounded-full border-4 border-white overflow-hidden">
                            <img src="https://media.gq.com.mx/photos/6203c5ba43f71a078a355054/16:9/w_2560%2Cc_limit/atractivo.jpg" className="h-full w-full object-cover" alt="Imagen redonda" />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-black font-bold ml-4">Alejandro Marx</p>
                            <p className="text-gray-400 ml-4 text-sm">Amigo de Najid Owld</p>
                        </div>
                        <div className="flex justify-end absolute right-0">
                            <p className="font-bold text-gray-400 cursor-pointer">Siguiendo</p>
                        </div>
                    </li>
                    <li className="flex items-center mb-4 relative">
                        <div className="h-16 w-16 rounded-full border-4 border-white overflow-hidden">
                            <img src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/mujer-feliz_0.jpg.webp?itok=qVurZLE7" className="h-full w-full object-cover" alt="Imagen redonda" />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-black font-bold ml-4">Ana Gonzales</p>
                            <p className="text-gray-400 ml-4 text-sm">Amiga de Juan Zue</p>
                        </div>
                        <div className="flex justify-end absolute right-0">
                            <p className="font-bold text-blue-600/70 cursor-pointer">Seguir</p>
                        </div>
                    </li>
                    <li className="flex items-center mb-4 w-full relative">
                        <div className="h-16 w-16 rounded-full border-4 border-white overflow-hidden">
                            <img src="https://st3.depositphotos.com/1743476/16188/i/450/depositphotos_161885998-stock-photo-mature-mixed-race-man-smiling.jpg" className="h-full w-full object-cover" alt="Imagen redonda" />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-black font-bold ml-4">Marcos Olivera</p>
                            <p className="text-gray-400 ml-4 text-sm">Amigo de Javier Arleen</p>
                        </div>
                        <div className="flex justify-end absolute right-0">
                            <p className="font-bold text-blue-600/70 cursor-pointer">Seguir</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardSuggestedFriends;
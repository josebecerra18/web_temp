import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";


interface PhotoCollectionProps {
    children: React.ReactNode;
}

const PhotoCollection: React.FC<PhotoCollectionProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const increaseIndex = () => {
        setCurrentIndex((current) => (current === children?.length - 1 ? 0 : current + 1));
    };

    const decreaseIndex = () => {
        setCurrentIndex((current) => (current === 0 ? children?.length -1 : current - 1));
    };

    return (
        <div className="overflow-hidden h-full relative">
            <div className="flex items-start object-center max-h-full size-full transition-transform ease-out duration-500"
                 style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
                    {children}
            </div>
            {
                children?.length > 1 ? (
                    <div className="absolute inset-0 flex items-end justify-between p-4">
                        <button onClick={decreaseIndex} className="text-2xl p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                            <RiArrowLeftSLine />
                        </button>
                        <span>
                            <p
                                className="text-gray-800 bg-white/80 rounded-full px-2 hover:cursor-default"
                            >
                                {`${currentIndex+1}/${children?.length}`}
                            </p>
                        </span>
                        <button onClick={increaseIndex} className="text-2xl p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                        <RiArrowRightSLine />
                        </button>
                    </div>) : <div></div>}
        </div>
    );
};

export default PhotoCollection;

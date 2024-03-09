import React from 'react';
import CardProfileInfo from "@/components/cards/CardProfileInfo.tsx";
import PopularContacts from "@/components/cards/PopularContacts.tsx";

const SideLeft: React.FC = () => {
    return (
        <div className="min-h-screen p-4" style={{minWidth: "20vw"}}>
            <div>
                <CardProfileInfo />
            </div>
            <div className="mt-4">
                <PopularContacts />
            </div>
        </div>
    )
}

export default SideLeft;
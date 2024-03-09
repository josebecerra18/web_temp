import React from 'react';
import CardActiveContacts from "@/components/cards/CardActiveContacts.tsx";
import CardSuggestedFriends from "@/components/cards/CardSuggestedFriends.tsx";

const SideRight: React.FC = () => {
    return (
        <div className="min-h-screen p-4" style={{minWidth: "20vw"}}>
            <div>
                <CardActiveContacts />
            </div>
            <div className="mt-4">
                <CardSuggestedFriends />
            </div>
        </div>
    )
}

export default SideRight;
import React from 'react';

const SearchInput: React.FC = () => {
    return (
        <input
            type="text"
            placeholder="Search"
            className="w-full h-10 border border-gray-300 rounded-lg px-4 focus:outline-none"
        />
    );
};

export default SearchInput;

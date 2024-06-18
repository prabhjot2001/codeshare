import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
    const colors = [
        '#FFD1DC', // Pastel Pink
        '#AEC6CF', // Pastel Blue
        '#77DD77', // Pastel Green
        '#FDFD96', // Pastel Yellow
        '#CFCFC4', // Pastel Purple
        '#FFB347', // Pastel Orange
        '#FF6961', // Pastel Red
        '#99C5C4', // Pastel Teal
        '#B39EB5', // Pastel Violet
        '#B2F2BB', // Pastel Mint
        '#7BD3EA', // Pastel Cyan
        '#FFDAB9', // Peach Puff
        '#87CEEB', // Sky Blue
        '#98FB98', // Pale Green
        '#F0E68C', // Khaki
        '#FFA07A', // Light Salmon
        '#AFEEEE', // Pale Turquoise
        '#FFB6C1', // Light Pink
        '#ADD8E6', // Light Blue
        '#FFE4E1', // Misty Rose
        '#90EE90', // Light Green
        '#FFC0CB', // Pink
        '#FF6347', // Tomato
        '#00CED1', // Dark Turquoise
        '#DB7093', // Pale Violet Red
        '#F08080', // Light Coral
        '#00FA9A', // Medium Spring Green
        '#FFA500', // Orange
        '#20B2AA', // Light Sea Green
        '#FF4500', // Orange Red
        '#DA70D6', // Orchid
    ];
    

    // Select a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className='flex items-center gap-2 py-1 bg-gray-100 border rounded-md p-1 mb-1'>
            <Avatar name={username} size={30} round={true} color={randomColor}/>
            <span className='text-sm font-medium'>{username}</span>
        </div>
    );
};

export default Client;

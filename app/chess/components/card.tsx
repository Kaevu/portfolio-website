import React from 'react';

interface CardProps {
    title: string;
    stat: number;
}

export const Card: React.FC<CardProps> = ({ title, stat }) => {
    return (
        <div className="card bg-grey-600 shadow-lg rounded-lg p-4">
            <h3 className="font-bold">{title}</h3>
            <p className='text-center'>{stat}</p>
        </div>
    );
};

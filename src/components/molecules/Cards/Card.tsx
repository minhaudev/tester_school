import {title} from "process";
import React from "react";

interface CardProps {
    title: string;
    content: React.ReactNode;
}
const Card = ({title, content}: CardProps) => {
    return (
        <div className=" rounded overflow-hidden   p-4">
            <div className="flex items-center mb-4 justify-center">
                <h2 className="text-xl font-bold ">{title}</h2>
            </div>
            <div className="text-gray-700 ">{content}</div>
        </div>
    );
};

export default Card;

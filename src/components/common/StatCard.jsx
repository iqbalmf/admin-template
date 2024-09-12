import React from 'react';
import {motion} from "framer-motion";

const StatCard = ({name, icon: Icon, value, color}) => {
    return (
        <motion.div
            className={'bg-gray-300 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-400'}
            whileHover={{y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"}}
        >
            <div className={"px-4 py-5 sm:px-6"}>
                <span className={"flex items-center text-sm font-medium text-gray-400"}>
                    <Icon size={24} style={{color: color}}/>
                    {name}
                </span>
                <p className={"mt-1 text-3xl font-semibold text-gray-900"}>
                    {value}
                </p>
            </div>

        </motion.div>
    );
};

export default StatCard;
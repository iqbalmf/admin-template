import React from 'react';
import Header from "../components/common/Header.jsx";
import {motion} from "framer-motion";
import StatCard from "../components/common/StatCard.jsx";
import {Zap, Users, ShoppingBag, BarChart2} from "lucide-react";

const OverviewPage = () => {
    return (
        <div className={'flex-1 overflow-auto relative'}>
            <Header title={'Overview'}/>
            <main className={"max-w-7xl mx-auto py-6 px-4 lg:px-8"}>
                <motion.div
                    className={"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1,}}
                >
                    <StatCard name={'Total Sales'} value={'$123,456'} color={'#10b981'} icon={Zap}/>
                    <StatCard name={'New Users'} value={'123.456'} color={'#10b981'} icon={Users}/>
                    <StatCard name={'Total Products'} value={'456'} color={'#10b981'} icon={ShoppingBag}/>
                    <StatCard name={'Convertion Rates'} value={'12%'} color={'#10b981'} icon={BarChart2}/>
                </motion.div>
            </main>
        </div>
    );
};

export default OverviewPage;
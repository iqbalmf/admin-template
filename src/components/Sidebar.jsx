import React, {useState} from 'react';
import {
    BarChart2,
    DollarSign,
    Menu,
    Settings,
    ShoppingBag,
    ShoppingCart,
    TrendingUpIcon,
    Users,
    LogOut
} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";

const SIDEBAR_ITEMS = [
    {
        name: "Overview", icon: BarChart2, color: "#6366f1", path: "/"
    },
    {
        name: "Products", icon: ShoppingBag, color: "#10b981", path: "/products"
    },
    {
        name: "Users", icon: Users, color: "#8b5cf6", path: "/users"
    },
    {
        name: "Sales", icon: DollarSign, color: "#ec4899", path: "/sales"
    },
    {
        name: "Orders", icon: ShoppingCart, color: "#F59E0B", path: "/orders"
    },
    {
        name: "Analytics", icon: TrendingUpIcon, color: "#3B82F6", path: "/analytics"
    },
    {
        name: "Settings", icon: Settings, color: "#6EE7B7", path: "/settings"
    }
]
const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <motion.div
            className={`relative transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            animate={{width: isSidebarOpen ? 256 : 80}}
        >
            <div
                className={'h-full bg-gray-200 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-400'}>
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={'p-2 rounded-full hover:bg-gray-400 transition-colors max-w-fit'}
                >
                    <Menu size={24}></Menu>
                </motion.button>


                <nav className={'mt-6 flex-grow'}>
                    {SIDEBAR_ITEMS.map((item) => (
                        <Link key={item.path} to={item.path}>
                            <motion.div
                                className={'flex items-center py-4 px-2 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors mb-2'}>
                                <item.icon size={24} style={{color: item.color, minWidth: "20px"}}/>
                                <AnimatePresence>
                                    {isSidebarOpen && <motion.span className={'ml-4 whitespace-nowrap'}
                                                                   initial={{opacity: 0, width: 0}}
                                                                   animate={{opacity: 1, width: "auto"}}
                                                                   exit={{opacity: 0, width: 0}}
                                                                   transition={{duration: 0.2, delay: 0.3}}>
                                        {item.name}
                                    </motion.span>
                                    }
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
                <Link to={"/logout"} key={"/logout"}>
                    <motion.div
                        className={'flex items-center py-4 px-2 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors mb-2'}>
                        <LogOut size={24} style={{color: '#000000', minWidth: "20px"}}/>
                        <AnimatePresence>
                            {isSidebarOpen && <motion.span className={'ml-4 whitespace-nowrap'}
                                                           initial={{opacity: 0, width: 0}}
                                                           animate={{opacity: 1, width: "auto"}}
                                                           exit={{opacity: 0, width: 0}}
                                                           transition={{duration: 0.2, delay: 0.3}}>
                                Logout
                            </motion.span>
                            }
                        </AnimatePresence>
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    );
};

export default Sidebar;
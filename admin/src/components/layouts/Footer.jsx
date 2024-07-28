import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' flex flex-col gap-4 xl:flex-row items-center justify-between py-4 px-8'>
            <div className=' flex-wrap text-gray-500 justify-center flex items-center gap-1 text-center'> © 2023, mad with <figure><AiFillHeart /></figure> by <Link to={"/"}>OCPl</Link> for better web.</div>

            <div className=' flex text-gray-500 font-semibold gap-4'>
                <Link to={"/"}>OCPL</Link>
                <Link to={"/"}>About Us</Link>
            </div>
        </div>
    );
};

export default Footer;
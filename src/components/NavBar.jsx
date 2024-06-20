import React from 'react'

import menu from '../assets/images/icon-menu.svg'

export default function NavBar() {
    return (
        <>
        <ul className=' hidden sm:flex text-[18px] 
        sm:w-[438px] sm:place-content-around sm:text-[16px]
        sm:items-center'>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">New</a>
            </li>
            <li>
                <a href="">Popular</a>
            </li>
            <li>
                <a href="">Trending</a>
            </li>
            <li>
                <a href="">Gategories</a>
            </li>
        </ul>
        <img className='w-10 h-6 cursor-pointer sm:hidden' src={menu} alt="menu" />
        </>
    )
}

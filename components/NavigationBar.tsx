"use client"
import React, { useState } from "react"
import Image from 'next/image'
import MenuButton from "./MenuButton"

const links = [
    {title : "HOME" , href:"/"},
    {title : "ABOUT" , href:"/"},
    {title : "EXPLORE", href:"/"},
    {title : "CONTACT" , href:"/"}

]

const NavigationBar = () => {
    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen)
    }
    return (
        <div>
            <div className="nav-bar">
                <div>
                    <Image src="/car-icon-black.svg" alt="logo" height={30} width={30}></Image>
                </div>
                <button onClick={toggleMenu} className="xs:hidden">
                    <MenuButton width={34} height={34} source="/open.svg" alt="hamburger" />
                </button>
                <div className="hidden xs:flex">
                    <ul className="links">
                        <li className="content-center">About Us</li>
                        <li className="content-center">Contact</li>
                        <li className="content-center">Explore</li>
                        <li>
                            <button className="flex">
                                <Image src="/dl_apple.svg" alt="app_store_button" width={110} height ={110}></Image>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div className = "menu">
                
                    <div className="menu-button-wrapper">
                        <Image src="/car-icon-white.svg" alt="logo" height={30} width={30}></Image>

                        <button onClick={toggleMenu}>
                            <MenuButton width={24} height={24} source="/close.svg" alt="close" />
                        </button>
                    </div>

                    <ul className="menu-options">
                        {links.map((link,index) => (
                            <li key = {index} className="menu-text-wrapper">
                                <a href={link.href} className="menu-text">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                </div>
            )

            }
            
        </div>
    )
}


export default NavigationBar
"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
    const [activeLink, setActiveLink] = useState('/');
    const [scrollerStyle, setScrollerStyle] = useState({});

    // Refs for each link to track position
    const artRef = useRef(null);
    const mobileRef = useRef(null);
    const nappageRef = useRef(null);
    const materailRef = useRef(null);
    const cuisineRef = useRef(null);
    const barbecueRef = useRef(null);
    const tenteRef = useRef(null);
    const chauffRef = useRef(null);
    const podiumRef = useRef(null);
    const sonRef = useRef(null);
    const packRef = useRef(null);
    const consoRef = useRef(null);

    const handleLinkClick = (link, ref) => {
        setActiveLink(link); // Set the active link
        const offsetLeft = ref.current.offsetLeft;
        const width = ref.current.offsetWidth;
        setScrollerStyle({
            left: `${offsetLeft - 19}px`, // Move the scroller to the clicked link
            width: `${width + 36}px`      // Adjust the width of the scroller
        });
    };

    useEffect(() => {
        const updateScrollerPosition = () => {
            const activeRefMap = {
                '/': artRef,
                '/mobile': mobileRef,
                '/nappage': nappageRef,
                '/materail': materailRef,
                '/cuisine': cuisineRef,
                '/barbecue': barbecueRef,
                '/tente': tenteRef,
                '/chauff': chauffRef,
                '/podium': podiumRef,
                '/son': sonRef,
                '/pack': packRef,
                '/conso': consoRef,
            };

            const activeRef = activeRefMap[activeLink];
            if (activeRef && activeRef.current) {
                const { offsetLeft, offsetWidth } = activeRef.current;
                setScrollerStyle({
                    left: `${offsetLeft - 19}px`,
                    width: `${offsetWidth + 36}px`,
                });
            } else {
                console.error("Active reference or element is missing.");
            }
        };

        updateScrollerPosition(); // Initial calculation
        window.addEventListener('resize', updateScrollerPosition);

        return () => window.removeEventListener('resize', updateScrollerPosition);
    }, [activeLink]);

    return (
        <header className="h-[156px] flex flex-col gap-[3rem] border-b bg-white py-4">
            <div className="flex items-center px-8">
                {/* Logo */}
                <div className="flex flex-col gap-2 items-center w-[133.01px] h-[65px] relative top-[0.7rem]">
                    <Image width={500} height={500} src='/logo/logo.png' alt="Logo" className="w-[64.12px] h-[37.12px]" />
                    <Image width={500} height={500} src='/logo/logotext.png' alt="Logo" className="w-[133.01px] h-[14.2px]" />
                </div>

                {/* Search Bar */}
                <div className="flex bg-[#F9FAFB] ml-[1.5rem] w-[700px] h-[50px] px-[15px] rounded-[6px]">
                    <input
                        id='search-bar'
                        type="text"
                        placeholder="Rechercher un produit"
                        className="flex-grow bg-[#F9FAFB] border-none focus:outline-none placeholder:font-[--font-geist-mono] placeholder:text-[#667482]"
                    />
                    <label htmlFor="search-bar" className='flex bg-[#F9FAFB] items-center'>
                        <Image src="/navbar/search.png" width={1000} height={1000} alt="Search" className="h-[24px] w-[24px] cursor-text" />
                    </label>
                </div>

                {/* User Options */}
                <div className="flex items-center relative left-[50px] space-x-6 m-auto">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Image src="/navbar/inspiration.png" width={1000} height={1000} alt="inspirations" className="h-[18px] w-[18px]" />
                        <span className='font-[poppins] font-[500] text-[14px]'>Inspirations</span>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer relative">
                        <Image src="/navbar/favorite.png" width={1000} height={1000} alt="favorite" className="h-[18px] w-[18px]" />
                        <span className='font-[poppins] font-[500] text-[14px]'>Mes favoris</span>
                        <div className="bg-[#CAD2D566] flex justify-center items-center w-[28px] h-[18px] rounded-[30px]">
                            <span className='font-[poppins] font-[500] text-[10px]'>24</span>
                        </div>
                    </div>
                    <div className="flex w-[105px] h-[48px] items-center justify-center bg-[#0093D0] border-[#007AAD] border-[1px] space-x-2 cursor-pointer rounded-[6px]">
                        <Image src="/navbar/cart.png" width={1000} height={1000} alt="cart" className="h-[20px] w-[20px]" />
                        <span className='font-[poppins] font-[500] text-[14px] text-[#FFFFFF]'>Panier</span>
                    </div>

                    <div className='bg-[#EAEDEE] w-[44px] h-[44px] rounded-[46px] cursor-pointer'></div>
                    <div className="flex justify-center items-center gap-2 font-[montserrat] text-[14px] text-[#1F2A37] font-[500] cursor-pointer">
                        <span>FR</span>
                        <Image src="/navbar/arrow-down.png" width={1000} height={1000} alt="arrow-down" className="w-[10px] h-[10px]" />
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="h-[37.78px]">
                <div className="flex justify-center items-center">
                    <ul className="relative flex flex-wrap items-center space-x-8 gap-[4px] mr-[3rem] text-sm font-medium">
                        {/* Slider */}
                        <div className="absolute top-[25px] bottom-0 h-[2px] rounded-t-[50px] bg-[#0093D0]" style={scrollerStyle}></div>

                        {/* Navigation Links */}
                        <li
                            ref={artRef}
                            onClick={() => handleLinkClick('/', artRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Art de la Table
                        </li>
                        <li
                            ref={mobileRef}
                            onClick={() => handleLinkClick('/mobile', mobileRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/mobile' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Mobilier
                        </li>
                        <li
                            ref={nappageRef}
                            onClick={() => handleLinkClick('/nappage', nappageRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/nappage' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Nappage
                        </li>
                        <li
                            ref={materailRef}
                            onClick={() => handleLinkClick('/materail', materailRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/materail' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Matériel de Salle
                        </li>
                        <li
                            ref={cuisineRef}
                            onClick={() => handleLinkClick('/cuisine', cuisineRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/cuisine' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Cuisine
                        </li>
                        <li
                            ref={barbecueRef}
                            onClick={() => handleLinkClick('/barbecue', barbecueRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/barbecue' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Barbecue
                        </li>
                        <li
                            ref={tenteRef}
                            onClick={() => handleLinkClick('/tente', tenteRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/tente' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Tente
                        </li>
                        <li
                            ref={chauffRef}
                            onClick={() => handleLinkClick('/chauff', chauffRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/chauff' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Chauffage
                        </li>
                        <li
                            ref={podiumRef}
                            onClick={() => handleLinkClick('/podium', podiumRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/podium' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Podium - Piste de Danse
                        </li>
                        <li
                            ref={sonRef}
                            onClick={() => handleLinkClick('/son', sonRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/son' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Son et Lumière
                        </li>
                        <li
                            ref={packRef}
                            onClick={() => handleLinkClick('/pack', packRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/pack' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Packs
                        </li>
                        <li
                            ref={consoRef}
                            onClick={() => handleLinkClick('/conso', consoRef)}
                            className={`cursor-pointer hover:text-[#0093D0] uppercase ${activeLink === '/conso' ? 'text-[#0093D0] font-bold' : ''
                                }`}
                        >
                            Consommables
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;

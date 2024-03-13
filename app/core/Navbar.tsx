"use client";
import { NavigationMenuModel } from '@/shared/models/butterCmsModels';
import { BUTTER_CMS_NAVIGATION_MENU_ITEMS_KEY } from 'constants/buttercmsConstants';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getNavigationMenuItem } from 'services/butterCmsService';
import { loaderState } from './Contentcontainer';

const Navbar = () => {
    let { setLoadingState } = useContext(loaderState);
    const [pageData, setPageData] = useState<NavigationMenuModel[]>();
    const pathname = usePathname();
    const commonSpanClass = `block absolute h-0.5 w-full transition-all duration-700 ease-in-out bg-gray-900`;
    const [open, setOpen] = useState(false);
    const handleHamburgerClick = () => {
        setOpen(!open);
    }

    useEffect(() => {
        getNavigationMenuItem(BUTTER_CMS_NAVIGATION_MENU_ITEMS_KEY).then((response: any) => {
            setPageData(response.navigation_menu.find((item: any) => item.name === 'GOJ MENU').menu_items);
            setLoadingState(false)
        });
    }, [])
    return (
        <>
            <header className={`px-2 sm:px-6 2xl:px-40 fixed top-0 left-0 right-0 bottom-auto z-50 py-0.5 sm:py-3 bg-gray-50`}>
                <nav className="flex justify-between">
                    <div className={`w-[130px] md:w-[200px]`}>
                        <Link href="/">
                            <Image
                                className="w-36"
                                src="https://cdn.buttercms.com/4eJCVIs8SX6OSHcV2Mju"
                                alt="Next.js Logo"
                                width={320}
                                height={20}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className={`${open ? 'left-[0%] bg-carbon-950 border-t border-primary-500' : 'left-[-100%]'} bg-gray-50 navLinks duration-500 absolute md:static md:w-auto
                            w-full md:h-auto h-[92vh] flex md:items-center gap-[1.5vw] top-[100%]`}>
                            <ul className="flex md:flex-row flex-col md:items-center gap-0 md:gap-[3vw]">
                                {pageData && pageData.map((data) => {
                                    return (
                                        <li key={data.label} onClick={() => setOpen(false)} className={`${open ? 'ps-2 sm:ps-6' : ''} ${pathname === '/' + data.url ? 'underline underline-offset-4 text-primary-700' : 'text-gray-950'}
                                        font-semibold lg-bold first-letter:uppercase my-5 hover:underline-offset-4 hover:underline decoration-2 decoration-primary-700 cursor-pointer`}>
                                            <Link href={data.url}>{data.label}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="w-6 h-[20px] cursor-pointer md:hidden" onClick={handleHamburgerClick}>
                            <div className="relative transition-all duration-700 ease-in-out">
                                <div
                                    className={`${commonSpanClass} ${open ? 'rotate-[135deg] top-[10px]' : 'rotate-0 top-1'}`}></div>
                                <div className={`${commonSpanClass} ${open ? 'hidden' : 'rotate-0 top-3'}`}></div>
                                <div
                                    className={`${commonSpanClass} ${open ? '-rotate-[135deg] top-[10px]' : 'rotate-0 top-5'}`}></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
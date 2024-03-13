"use client";
import Link from "next/link";
import Image from "next/image";
import { BUTTER_CMS_FOOTER_PAGE_KEY } from "constants/buttercmsConstants";
import { useContext, useEffect, useState } from "react";
import { getCollectionDataFromButterCMS } from "services/butterCmsService";
import { FooterContentModel } from "@/shared/models/butterCmsModels";
import { loaderState } from "./Contentcontainer";

const Footer = () => {
    let { setLoadingState } = useContext(loaderState);
    const [collectionData, setPageData] = useState<FooterContentModel>();
    useEffect(() => {
        getCollectionDataFromButterCMS(BUTTER_CMS_FOOTER_PAGE_KEY).then((response: any) => {
            setPageData(response.goj_footer[0]);
            setLoadingState(false)
        });
    }, [])
    return (
        <>
            {collectionData && <div className="bg-gradient-to-r from-base-black to-gray-700 px-2 sm:px-10 py-8">
                <div className="grid grid-cols-12 gap-2 sm:gap-4 gap-y-3 md:gap-y-0">
                    <div className="col-span-12 sm:col-span-2 md:col-span-2 order-1 my-auto">
                        <Link href="/">
                            <Image
                                className="w-36"
                                src={collectionData.logo}
                                alt="Gojoko Logo"
                                width={320}
                                height={20}
                            />
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3 order-2 my-auto">
                        <div className="text-base-white md-regular" dangerouslySetInnerHTML={{ __html: collectionData.description }}>
                        </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-2 text-base-white order-4 md:order-3 my-auto">
                        <ul>
                            <li className="lg-bold">About us</li>
                            {collectionData.goj_menu_links.map((links, index) => {
                                return (
                                    <li key={links.url + index}>
                                        <Link href={links.url}>{links.label}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-span-6 sm:col-span-3 md:col-span-2 text-base-white order-5 md:order-4 my-auto">
                        <ul>
                            <li className="lg-bold">Legal</li>
                            {collectionData.goj_legal_links.map((links, index) => {
                                return (
                                    <li key={links.url + index}>
                                        <Link href={links.url}>{links.label}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-span-12 sm:col-span-4 md:col-span-3 row-span-1 sm:row-span-2 text-base-white order-5 sm:order-3 md:order-5 border-0 sm:border-l border-white">
                        <ul className="ps-0 sm:ps-6">
                            <div dangerouslySetInnerHTML={{ __html: collectionData.contact_us }}>

                            </div>
                            <li className="mt-6" dangerouslySetInnerHTML={{ __html: collectionData.copy_right_content }}>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Footer;
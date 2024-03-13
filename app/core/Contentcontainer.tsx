"use client";

import { createContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export const loaderState = createContext({
    setLoadingState: (state: boolean) => { }
});

const routesWithLoader = ['/', '/about']

const Contentcontainer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const pathname = usePathname();
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        setShowLoading(routesWithLoader.includes(pathname))
    }, [pathname]);
    return (
        <>
            <Navbar />
            <main className="mt-12 sm:mt-20 z-10">
                <loaderState.Provider value={{ setLoadingState: setShowLoading }}>
                    {
                        showLoading &&
                        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-white">
                            <div className="relative -translate-x-8 -translate-y-8">
                                <div className="absolute h-16 w-16 rounded-full border-4 border-solid border-primary-100"></div>
                                <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary-600 border-t-transparent"></div>
                            </div>
                        </div>
                    }
                    {children}
                </loaderState.Provider>
            </main>
            <Footer />
        </>
    )

}

export default Contentcontainer;
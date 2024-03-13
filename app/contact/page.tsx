"use client";

import { loaderState } from "@/core/Contentcontainer";
import Contactform from "@/shared/components/contact/Contactform";
import Container from "@/shared/components/Container";
import { BUTTER_CMS_HOMEPAGE_KEY } from "constants/buttercmsConstants";
import { useContext, useEffect } from "react";
import { getPageDataFromButterCMS } from "services/butterCmsService";

export default function About() {
    let { setLoadingState } = useContext(loaderState);
    useEffect(() => {
        // setLoadingState(false)
        getPageDataFromButterCMS(BUTTER_CMS_HOMEPAGE_KEY).then((response: any) => {
            // setPageData(response.data);
            setLoadingState(false)
        });
    }, [])
    return (
        <Container>
            <div className="grid grid-cols-12">
                <div className="col-span-5">
                    dbdjkbk
                </div>
                <div className="col-span-7">
                    <Contactform />
                </div>
            </div>
        </Container>
    )
}
'use client';
import MoreThanJustFintech from "@/shared/components/home/MoreThanJustFintech";
import WeWouldLoveToHear from "@/shared/components/WeWouldLoveToHear";
import { getPageDataFromButterCMS } from "services/butterCmsService";
import { BUTTER_CMS_HOMEPAGE_KEY } from "constants/buttercmsConstants";
import { useContext, useEffect, useState } from "react";
import { HomePageModel } from "./shared/models/butterCmsModels";
import OurPartners from "./shared/components/home/OurPartners";
import TeamsSection from "./shared/components/home/TeamsSection";
import { loaderState } from "./core/Contentcontainer";
import CreditUnionsEra from "./shared/components/home/CreditUnionsEra";



export default function Home() {
  const [pageData, setPageData] = useState<HomePageModel | null>(null);
  let { setLoadingState } = useContext(loaderState);

  useEffect(() => {
    getPageDataFromButterCMS(BUTTER_CMS_HOMEPAGE_KEY).then((response: any) => {
      setPageData(response.data);
      setLoadingState(false)
    });
  }, [])


  if (pageData) return (
    <>
      <MoreThanJustFintech BannerData={pageData.fields.more_than_just_a_fintech} />
      <CreditUnionsEra BannerData={pageData.fields.new_era} />
      <TeamsSection />
      <OurPartners PartnersData={pageData.fields.our_partners} />
      <WeWouldLoveToHear componentData={pageData.fields.we_would_love_to_hear_from_you} />
    </>
  );

}
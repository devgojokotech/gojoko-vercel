"use client";

import { loaderState } from "@/core/Contentcontainer";
import { AboutPageModel } from "@/shared/models/butterCmsModels";
import { BUTTER_CMS_ABOUTPAGE_KEY } from "constants/buttercmsConstants";
import { useContext, useEffect, useState } from "react";
import { getPageDataFromButterCMS } from "services/butterCmsService";
import WhoIsGojoko from "./components/WhoIsGojoko";
import WeWouldLoveToHear from "@/shared/components/WeWouldLoveToHear";
import ReadyForChallenge from "./components/ReadyForChallenge";
import OurExpertise from "./components/OurExpertise";
import WhyChooseUs from "./components/WhyChooseUs";


export default function About() {
  const [pageData, setPageData] = useState<AboutPageModel | null>(null);
  let { setLoadingState } = useContext(loaderState);

  useEffect(() => {
    getPageDataFromButterCMS(BUTTER_CMS_ABOUTPAGE_KEY).then((response: any) => {
      setPageData(response.data);
      setLoadingState(false)
    });
  }, [])

  if (pageData) return (
    <>
      <WhoIsGojoko componentData={pageData.fields.who_is_gojoko} />
      <ReadyForChallenge componentData={pageData.fields.we_are_ready_for_challenges} />
      <WhyChooseUs componentData={pageData.fields.why_choose_us} />
      <OurExpertise componentData={pageData.fields.our_expertise} />
      <WeWouldLoveToHear componentData={pageData.fields.we_would_love_to_hear_from_you} />
    </>
  );
}
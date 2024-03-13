"use client";
import Container from "@/shared/components/Container";
import Fadeinsection from "@/shared/components/FadeInSection";
import { WhyChooseUsModel } from "@/shared/models/butterCmsModels";
import { isOdd } from "@/shared/utils/utils";

const WhyChooseUs = ({ componentData }: { componentData: WhyChooseUsModel }) => {

    return (
        <div className="bg-wave bg-no-repeat bg-bottom xl:bg-contain">
            <Container>
                <div className="grid grid-cols-12 max-h-[30rem] overflow-y-scroll">
                    <div className="col-span-12 md:col-span-6">
                        <h2 className="text-primary-600 display-1 mb-10 md:mb-0 md:sticky md:top-0">
                            {componentData.heading}
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        {componentData.why_choose_us_repeater.map((item, index) => {
                            return (
                                <Fadeinsection fromBottom threshold={0} key={item.heading}>
                                    <div className={`flex flex-col ${isOdd(index) && 'my-6'}`}>
                                        <div className="flex justify-center items-center h-24 w-24 bg-primary-600 text-base-white display-2">
                                            0{index + 1}.
                                        </div>
                                        <p className="text-base-black display-3 my-3">
                                            {item.heading}
                                        </p>
                                        <div dangerouslySetInnerHTML={{ __html: item.paragraph_content }}></div>
                                    </div>
                                </Fadeinsection>
                            )
                        })}
                    </div>
                </div >
            </Container >
        </div>
    )
}

export default WhyChooseUs;
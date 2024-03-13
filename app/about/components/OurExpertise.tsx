import Container from "@/shared/components/Container";
import { FeatureCardBaseModel, OurExpertiseModel } from "@/shared/models/butterCmsModels";
import { isOdd } from "@/shared/utils/utils";
import Image from "next/image";

const OurExpertise = ({ componentData }: { componentData: OurExpertiseModel }) => {
    return (
        <Container>
            <div className="grid grid-cols-12 gap-y-8">
                <div className="col-span-12 place-self-center">
                    <h2 className="display-1 bg-clip-text bg-gradient-to-r from-primary-600  to-primary-800 text-transparent inline-block">Our Expertise</h2>
                </div>
                {componentData.our_expertise_repeater.map((item: FeatureCardBaseModel, index: number) => {
                    return (
                        <div className="col-span-12 text-base-white" key={item.title}>
                            <div className="grid grid-cols-12 gap-0">
                                <div className={`col-span-12 sm:col-span-4 ${isOdd(index) ? 'sm:order-2' : 'sm:order-1'}`}>
                                    <Image src={item.icon} width="700" height="320" className="h-full w-full object-cover max-h-80" alt={item.meta.id.toString()} />
                                </div>
                                <div className={`col-span-12 sm:col-span-8 bg-primary-600 p-4 md:p-6 lg:p-8 xl:p-12 ${isOdd(index) ? 'sm:order-1' : 'sm:order-2'}`}>
                                    <div className="flex flex-col">
                                        <h3 className="mb-12 display-3 text-left">{item.title}</h3>
                                        <div dangerouslySetInnerHTML={{
                                            __html: item.description
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export default OurExpertise;
import Container from "@/shared/components/Container";
import Fadeinsection from "@/shared/components/FadeInSection";
import { WeAreAlwaysReady } from "@/shared/models/butterCmsModels";
import Image from "next/image";

const ReadyForChallenge = ({ componentData }: { componentData: WeAreAlwaysReady }) => {
    return (
        <Container bgStyle="bg-gradient-to-r from-primary-600 to-primary-800">
            <h1 className="display-1 text-base-white max-w-2xl">
                {componentData.heading}
            </h1>
            <div className="flex content-center flex-wrap gap-12 m-0 sm:m-8">
                {componentData.services.map((item, index) => {
                    return (
                        <div className={`md:flex md:w-1/2 lg:w-1/3 justify-center mx-auto min-w-72 sm:min-w-80 max-w-80`} key={item.title}>
                            <Fadeinsection fromBottom>
                                <div className="md:flex-1 py-16 rounded shadow-lg bg-white border-b border-r border-grey-dark p-6">
                                    <Image src={item.icon} className="mx-auto h-40 w-40 object-contain mb-4" height="154" width="154" alt="icon" />
                                    <h2 className="display-3 text-base-black text-center">{item.title}</h2>
                                    <div className="lg-regular text-gray-600 text-center" dangerouslySetInnerHTML={{
                                        __html: item.description
                                    }}></div>
                                </div>
                            </Fadeinsection>
                        </div>
                    )
                })}

            </div>
        </Container>
    )
}

export default ReadyForChallenge;
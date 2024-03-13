import Container from "@/shared/components/Container";
import { ComponentBaseModel } from "@/shared/models/butterCmsModels";
import Image from "next/image";

const Banner = ({ BannerData }: { BannerData: ComponentBaseModel }) => {

    if (BannerData) return (
        <div className="bg-gradient-to-r from-primary-600 to-primary-800">
            <Container className="mb-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6 my-auto">
                        <div className="display-1" dangerouslySetInnerHTML={{ __html: BannerData.heading }} />
                        <p className="my-5 sm:mt-5 text-base-white lg-regular">
                            {BannerData?.paragraph_content}
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 my-auto place-self-center">
                        <Image
                            priority
                            className="-mb-10 w-auto"
                            src={BannerData?.background_image}
                            alt="banner image"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Banner;
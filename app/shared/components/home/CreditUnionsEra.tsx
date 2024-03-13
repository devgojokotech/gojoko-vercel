import Container from "@/shared/components/Container";
import { ComponentBaseModel } from "@/shared/models/butterCmsModels";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ BannerData }: { BannerData: ComponentBaseModel }) => {
  if (BannerData)
    return (
      <div className="bg-wave bg-no-repeat bg-bottom xl:bg-contain">
        <Container>
          <div className="grid grid-cols-12 mb-44">
            <div className="col-span-12 text-center">
              <h2
                className="bg-gradient-to-r from-primary-600 to-primary-800  inline-block text-transparent bg-clip-text display-1 font-josephin-sans"
                dangerouslySetInnerHTML={{ __html: BannerData.heading }}
              />

              <p className="my-5 sm:mt-5 text-gray-600 lg-regular mx-auto max-w-3xl">
                {BannerData.paragraph_content}
              </p>
              <Link href="/network">
                <button className="btn secondary w-full sm:w-[300px] my-2">
                  About our network
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
};
export default Banner;

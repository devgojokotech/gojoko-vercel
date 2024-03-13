import Image from "next/image";
import Link from "next/link";
import { ComponentBaseModel } from "../models/butterCmsModels";
import Container from "./Container";


const WeWouldLoveToHear = ({ componentData }: { componentData: ComponentBaseModel }) => {

    return (
        <Container bgStyle="bg-gradient-to-r from-primary-600 to-primary-800" styles="py-0">
            <div className="grid grid-cols-12 gap-0">
                <div className="col-span-12 sm:col-span-5">
                    <Image
                        className="max-w-full w-full h-auto object-cover max-h-[39.188rem]"
                        src={componentData?.background_image}
                        alt="image"
                        height={600}
                        width={600}
                    />
                </div>
                <div className="col-span-12 sm:col-span-7 my-auto sm:py-10 p-12">
                    <h2 className="display-2 text-base-white mb-6 max-w-md">{componentData.heading}</h2>
                    <Link href="/contact">
                        <button className="btn secondary-outline w-full sm:w-72">Contact us</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default WeWouldLoveToHear;
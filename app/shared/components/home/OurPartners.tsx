import Container from "@/shared/components/Container";
import { OurPartnersModel } from "@/shared/models/butterCmsModels";
import Image from "next/image";

const OurPartners = ({ PartnersData }: { PartnersData: OurPartnersModel }) => {
    return (
        <Container>
            <div className="flex flex-col">
                <div className="text-center w-full display-1">
                    <h2 className="mb-10 display-1 text-gray-900">{PartnersData.heading}</h2>
                </div>
                <div className="flex flex-row gap-4 sm:gap-6 justify-center flex-wrap mx-10">
                    {PartnersData.partners.map((partner, index) => {
                        return (
                            <div key={partner.partner_name} className="h-20 w-40 py-4 flex items-center gap-2">
                                <Image
                                    className="object-contain w-full h-full"
                                    key={index}
                                    src={partner.partner_logo}
                                    alt={partner.partner_name}
                                    width={200}
                                    height={100}
                                    objectFit="scale-down"
                                />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </Container>
    )
}

export default OurPartners;
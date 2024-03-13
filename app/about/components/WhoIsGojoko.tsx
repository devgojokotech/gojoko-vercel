import Container from '@/shared/components/Container';
import { ComponentBaseModel } from '@/shared/models/butterCmsModels';
import Image from 'next/image';

const WhoIsGojoko = ({ componentData }: { componentData: ComponentBaseModel }) => {
  return (
    <Container styles="py-0">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 place-self-center goj-cpm">
          <div className="display-1" dangerouslySetInnerHTML={{ __html: componentData.heading }} />
          <div
            dangerouslySetInnerHTML={{
              __html: componentData.paragraph_content
            }}
          />
        </div>
        <div className="col-span-12 md:col-span-4 d-none lg:d-block">
          <Image className="max-h-80  w-full h-full md:max-h-full object-cover" src={componentData?.background_image} alt="image" height={800} width={600} />
        </div>
      </div>
    </Container>
  );
};

export default WhoIsGojoko;

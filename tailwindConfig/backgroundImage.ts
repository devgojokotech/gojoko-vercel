type BackgroundImage = {
  name: string;
  url: string;
};

/***
 * If you will go in https://buttercms.com/media/library and you will do search it by name you will get it i butter cms 
 * so Name should be same as in butter CMS
 */
const backgroundImageArray: BackgroundImage[] = [
  {
    name: 'wave',
    url: 'https://cdn.buttercms.com/EUOoM9qhT8mIIAJPnJ4J'
  },
];

const finalObject: Record<string, string> = {};

backgroundImageArray.forEach(({ name, url }) => {
  finalObject[name] = `url(${url})`;
});

export const transformedBackgroundImages = finalObject;

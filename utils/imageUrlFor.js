import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const imageUrlFor = (source) => {
  return imageUrlBuilder(sanityClient).image(source);
};

export default imageUrlFor;

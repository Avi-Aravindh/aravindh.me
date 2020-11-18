import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'o34cf3jf',
  dataset: 'production',
  useCdn: false,
});

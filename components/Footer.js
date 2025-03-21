import Social from './Social';

const Footer = () => {
  return (
    <div
      className='bg-gray flex mt-10 md:mt-10 mb-10 md:pl-12 md:pr-12 items-center 
    flex-col md:flex-row justify-between'
    >
      <Social />
      <div className='font-SegoeUIRegular text-siteText text-xs md:text-sm mt-3 md:mt-0'>
        © 2021 Aravindh Sankaranarayanan. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

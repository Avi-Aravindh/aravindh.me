var classNames = require('classnames');
import imageUrlFor from '../utils/imageUrlFor';

const Post = ({ title, description, tags, buttons, screenshot, index }) => {
  let postLayoutClass = classNames(
    'w-full justify-center flex flex-col items-center md:justify-between md:items-center mt-0 md:mt-md1 p-12 md:p-0',
    {
      'md:flex-row': index % 2 == 0,
      'md:flex-row-reverse': index % 2 !== 0,
    }
  );

  return (
    <div className={postLayoutClass}>
      <div className='md:w-2/5 rounded-md border-3 md:border-8 border-white shadow-profile'>
        <img
          className='w-full'
          src={imageUrlFor(screenshot).url()}
          alt='blog'
        ></img>
      </div>
      <div className='md:w-3/6 items-center flex flex-col'>
        <div className='flex flex-row flex-wrap w-full'>
          {tags.map((tag, index) => (
            <div className='mr-5 rounded flex justify-center items-center mt-3 md:mt-0 '>
              <span className='text-blueText mr-5 font-bold font-SegoeUIRegular mt-5 text-md md:text-md lg:text-xl'>
                {tag}
              </span>
            </div>
          ))}
        </div>
        <h2 className='w-full font-SegoeUIBold text-black flex justify-start text-2xl font-medium mt-5 mb-5'>
          {title}
        </h2>
        <p className='w-full font-SegoeUIRegular text-siteText text-md md:text-xl'>
          {description}
        </p>
        <div className='flex items-center flex-wrap pb-4 mb-4 mt-4 w-full'>
          {buttons.map((button, index) => (
            <a
              href={button.url}
              target='_blank'
              className='text-blue inline-flex items-center  font-SegoeUIRegular text-xl md:text-xl mr-6'
            >
              <div className='flex items-center'>
                {button.label}
                <svg
                  className='w-5 h-5 ml-1 mt-1 md:mt-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                  fill='none'
                >
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;

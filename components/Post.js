var classNames = require('classnames');
import imageUrlFor from '../utils/imageUrlFor';

const Post = ({ title, description, tags, buttons, screenshot, index }) => {
  let postLayoutClass = classNames(
    'p-12 md:p-1 flex flex-col items-start md:justify-between md:items-end mt-1 md:mt-five',
    {
      'md:flex-row': index % 2 == 0,
      'md:flex-row-reverse': index % 2 !== 0,
    }
  );

  console.log('post', { title, description, tags, buttons, screenshot, index });
  return (
    <div className={postLayoutClass}>
      <div className='lg:h-54 md:h-36 md:w-2/5 rounded-md border-3 md:border-8 border-white shadow-profile'>
        <img
          class='w-full'
          src={imageUrlFor(screenshot).url()}
          alt='blog'
        ></img>
      </div>
      <div className='md:w-3/6 items-center flex flex-col'>
        <div className='flex flex-row flex-wrap w-full'>
          {tags.map((tag, index) => (
            <div className='bg-blueBackground  p-3 mr-3 rounded flex justify-center items-center mt-3 md:mt-0 '>
              <span class='text-blueText font-bold font-SegoeUIRegular text-md md:text-lg'>
                {tag}
              </span>
            </div>
          ))}
        </div>
        <h2 class='w-full font-SegoeUIBold text-black flex justify-start text-3xl font-medium mt-4 mb-4'>
          {title}
        </h2>
        <p class='w-full font-SegoeUIRegular text-siteText text-md md:text-xl'>
          {description}
        </p>
        <div class='flex items-center flex-wrap pb-4 mb-4 mt-4 w-full'>
          {buttons.map((button, index) => (
            <a
              href={button.url}
              target='_blank'
              class='text-blue inline-flex items-center  font-SegoeUIRegular text-xl md:text-2xl mr-6'
            >
              {button.label}
              <svg
                class='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
                fill='none'
              >
                <path d='M5 12h14'></path>
                <path d='M12 5l7 7-7 7'></path>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;

var classNames = require('classnames');
import imageUrlFor from '../utils/imageUrlFor';

const Post = ({ title, description, tags, buttons, screenshot, index }) => {
  let postLayoutClass = classNames(
    'p-12 md:p-1  flex flex-col items-start md:justify-between md:items-end',
    {
      'md:flex-row': index % 2 == 0,
      'md:flex-row-reverse': index % 2 !== 0,
      'md:mt-5': index != 0,
      'md:mb-5': index != 0,
    }
  );

  console.log('post', { title, description, tags, buttons, screenshot, index });
  return (
    <div className={postLayoutClass}>
      <img
        class='lg:h-54 md:h-36 md:w-2/5 object-cover object-center mb-5'
        src={imageUrlFor(screenshot).url()}
        alt='blog'
      ></img>
      <div className='md:w-3/6'>
        <div className='flex flex-row flex-wrap w-full'>
          {tags.map((tag, index) => (
            <div className='bg-blueBackground  p-3 mr-3 rounded flex justify-center items-center'>
              <span class='text-blueText font-bold font-SegoeUIRegular text-md'>
                {tag}
              </span>
            </div>
          ))}
        </div>
        <h2 class=' font-SegoeUIBold text-black text-3xl font-medium text-gray-900 mt-4 mb-4'>
          {title}
        </h2>
        <p class='font-SegoeUIRegular text-siteText text-md md:text-xl'>
          {description}
        </p>
        <div class='flex items-center flex-wrap pb-4 mb-4 mt-auto w-full'>
          {buttons.map((button, index) => (
            <a
              href={button.url}
              target='_blank'
              class='text-indigo-500 inline-flex items-center  font-montserrat mr-6'
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

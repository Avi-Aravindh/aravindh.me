var classNames = require('classnames');
import imageUrlFor from '../utils/imageUrlFor';

const Post = ({ title, description, tags, buttons, screenshot, index }) => {
  let postLayoutClass = classNames(
    'p-12 md:p-12  md:w-1/2 flex flex-col items-start md:justify-center md:items-center',
    {
      //   'md:flex-row': index % 2 == 0,
      //   'md:flex-row-reverse': index % 2 !== 0,
      //   'md:mt-8': index != 0,
    }
  );

  console.log('post', { title, description, tags, buttons, screenshot, index });
  return (
    <div className={postLayoutClass}>
      <img
        class='lg:h-54 md:h-36 object-cover object-center mb-5'
        src={imageUrlFor(screenshot).url()}
        alt='blog'
      ></img>
      <div>
        <div className='flex flex-row flex-wrap'>
          {tags.map((tag, index) => (
            <span class='mr-3 inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm tracking-widest font-montserrat-bold font-bold'>
              {tag}
            </span>
          ))}
        </div>
        <h2 class=' font-montserrat sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4'>
          {title}
        </h2>
        <p class='leading-relaxed mb-8 font-Roboto font-light'>{description}</p>
        <div class='flex items-center flex-wrap pb-4 mb-0 mt-auto w-full'>
          {buttons.map((button, index) => (
            <a
              href={button.url}
              target='_blank'
              class='text-indigo-500 inline-flex items-center  font-montserrat limr-6'
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

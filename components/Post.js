const Post = ({ text }) => {
  return (
    <div class='p-12 md:p-1 md:pr-12 md:w-1/2 flex flex-col items-start'>
      <img
        class='lg:h-54 md:h-36 w-full object-cover object-center mb-3'
        // src='https://dummyimage.com/720x400'
        src='./skyline.png'
        alt='blog'
      ></img>
      <div className='flex flex-row flex-wrap'>
        <span class='mr-3 inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm tracking-widest font-montserrat-bold font-bold'>
          React
        </span>
        <span class='mr-3 inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm tracking-widest font-montserrat-bold font-bold'>
          React Native
        </span>
      </div>
      <h2 class=' font-montserrat sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4'>
        Skyline Ivy
      </h2>
      <p class='leading-relaxed mb-8  font-montserrat'>{text}</p>
      <div class='flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-200 mt-auto w-full'>
        <a
          href='https://skylineivy-react.netlify.app/'
          target='_blank'
          class='text-indigo-500 inline-flex items-center  font-montserrat mr-6'
        >
          Live Demo
          <svg
            class='w-4 h-4 ml-2'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='M5 12h14'></path>
            <path d='M12 5l7 7-7 7'></path>
          </svg>
        </a>
        <a
          href='https://github.com/Avi-Aravindh/skylineivy-react'
          class='text-indigo-500 inline-flex items-center  font-montserrat mr-6'
        >
          Code
          <svg
            class='w-4 h-4 ml-2'
            viewBox='0 0 24 24'
            stroke='currentColor'
            stroke-width='2'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='M5 12h14'></path>
            <path d='M12 5l7 7-7 7'></path>
          </svg>
        </a>
      </div>
      {/* <a class='inline-flex items-center'>
        <img
          alt='blog'
          src='https://dummyimage.com/104x104'
          class='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
        />
        <span class='flex-grow flex flex-col pl-4'>
          <span class='title-font font-medium text-gray-900'>
            Holden Caulfield
          </span>
          <span class='text-gray-500 text-sm'>UI DEVELOPER</span>
        </span>
      </a> */}
    </div>

    // <div className='p-4 md:w-1/3'>
    //   <div class='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
    //     <img
    //       class='lg:h-48 md:h-36 w-full object-cover object-center'
    //       src='https://dummyimage.com/720x400'
    //       alt='blog'
    //     ></img>
    //     <div class='p-6'>
    //       <h2 class='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>
    //         CATEGORY
    //       </h2>
    //       <h1 class='title-font text-lg font-medium text-gray-900 mb-3'>
    //         The Catalyzer
    //       </h1>
    //       <p class='leading-relaxed mb-3'>
    //         Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
    //         microdosing tousled waistcoat.
    //       </p>
    //       <div class='flex items-center flex-wrap '>
    //         <a class='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
    //           Learn More
    //           <svg
    //             class='w-4 h-4 ml-2'
    //             viewBox='0 0 24 24'
    //             stroke='currentColor'
    //             stroke-width='2'
    //             fill='none'
    //             stroke-linecap='round'
    //             stroke-linejoin='round'
    //           >
    //             <path d='M5 12h14'></path>
    //             <path d='M12 5l7 7-7 7'></path>
    //           </svg>
    //         </a>
    //         <span class='text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300'>
    //           <svg
    //             class='w-4 h-4 mr-1'
    //             stroke='currentColor'
    //             stroke-width='2'
    //             fill='none'
    //             stroke-linecap='round'
    //             stroke-linejoin='round'
    //             viewBox='0 0 24 24'
    //           >
    //             <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
    //             <circle cx='12' cy='12' r='3'></circle>
    //           </svg>
    //           1.2K
    //         </span>
    //         <span class='text-gray-600 inline-flex items-center leading-none text-sm'>
    //           <svg
    //             class='w-4 h-4 mr-1'
    //             stroke='currentColor'
    //             stroke-width='2'
    //             fill='none'
    //             stroke-linecap='round'
    //             stroke-linejoin='round'
    //             viewBox='0 0 24 24'
    //           >
    //             <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
    //           </svg>
    //           6
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden p-4 md:w-1/3'>
    //   <div>Image</div>
    //   <div>Title</div>
    //   <div>Description</div>
    //   <div>Tags</div>
    //   <div>Buttons</div>
    // </div>
  );
};

export default Post;

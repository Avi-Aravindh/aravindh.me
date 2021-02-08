var classNames = require('classnames');
import ReactPlayer from 'react-player';

import imageUrlFor from '../utils/imageUrlFor';

const Demo = ({ title, description, tags, buttons, screenshot, index }) => {
  let postLayoutClass = classNames(
    'w-full justify-center flex flex-col items-start md:justify-between md:items-center mt-0',
    {
      'md:flex-row': index % 2 == 0,
      'md:flex-row-reverse': index % 2 !== 0,
    }
  );

  return (
    <div className={postLayoutClass}>
      <p className='w-full font-SegoeUIRegular flex justify-center text-siteText text-md md:text-xl'>
        <ReactPlayer
          url='https://wash-wash-demo.s3.amazonaws.com/WashWashDemo.mov'
          // controls={true}
          height='812px'
          width='375px'
          controls={true}
          playing={true}
          playIcon={true}
          muted={true}
          //   light={true}
        />
      </p>
    </div>
  );
};

export default Demo;

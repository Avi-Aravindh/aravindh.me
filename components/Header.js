import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
var classNames = require('classnames');

export default function Header() {
  const router = useRouter();
  const [expand, setExpand] = useState();

  const getLinkStyles = (href) => {
    let linkClass = classNames(
      'flex text-black ml-6 mr-6 text-2xl cursor-pointer tracking-widest uppercase font-SegoeUIRegular',
      {
        'font-SegoeUISemiBold': router.pathname == href,
        'cursor-none': router.pathname == href,
      }
    );

    return linkClass;
  };

  let linkBlock = classNames(
    'w-full block flex-grow items-center md:flex md:w-auto md:items-center justify-end',
    {
      hidden: expand,
      hidden: !expand,
    }
  );

  let hamburgerStyle = classNames(
    'md:hidden mr-5 hover:bg-gray-300 hover:border-none'
  );
  let navButtonStyle = classNames(
    'items-center px-3 py-2  border rounded text-gray-500 border-gray-500 '
  );
  let closeButtonStyle = classNames(navButtonStyle, { hidden: !expand });
  let expandButtonStyle = classNames(navButtonStyle, { hidden: expand });

  return (
    <div className='flex-wrap bg-white flex items-center justify-between border-b border-gray leading-normal pb-2'>
      <div>
        <Link href='/'>
          <div className='text-2xl pl-12 cursor-pointer tracking-widest font-SegoeUIBold'>
            AVI
          </div>
        </Link>
      </div>
      <div className={hamburgerStyle}>
        <button
          className={(navButtonStyle, expandButtonStyle)}
          onClick={() => setExpand(true)}
        >
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
        <button
          className={(navButtonStyle, closeButtonStyle)}
          onClick={() => setExpand(false)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='fill-current h-3 w-3'
            viewBox='0 0 24 24'
          >
            <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
          </svg>
        </button>
      </div>
      <div className={linkBlock}>
        <Link href='/'>
          <div className={getLinkStyles('/')}>Home</div>
        </Link>

        <Link href='/lab'>
          <div className={getLinkStyles('/lab')}>Lab</div>
        </Link>

        {/* <Link href='/blog'>
          <div className={getLinkStyles('/blog')}>Blog</div>
        </Link> */}
      </div>
    </div>
  );
}

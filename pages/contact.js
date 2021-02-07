import React, { Fragment, useState, useEffect } from 'react';

import Head from 'next/head';

const Lab = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleSend = () => {
    console.log('handle send, email', email);
  };

  return (
    <form class='w-full max-w-lg flex flex-col'>
      <div class='flex flex-wrap  mb-6'>
        <div class='w-full  px-3 mb-6 md:mb-0'>
          <label
            class=' font-SegoeUIBold text-sm block uppercase tracking-wide text-gray-700 font-bold mb-2'
            for='grid-first-name'
          >
            Name
          </label>
          <input
            class='appearance-none block w-11/12 bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
            id='grid-first-name'
            type='text'
            placeholder=''
          />
        </div>
      </div>
      <div class='flex flex-wrap mb-6'>
        <div class='w-full px-3'>
          <label
            class='font-SegoeUIBold text-sm block uppercase tracking-wide text-gray-700 font-bold mb-2'
            for='grid-password'
          >
            E-mail
          </label>
          <input
            class='appearance-none block w-11/12 bg-gray-200 text-gray-700 
            border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            id='email'
            type='email'
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onBlur={() =>
              email && setInvalidEmail(!email.match(/\S+@\S+\.\S+/))
            }
          />
          {invalidEmail && (
            <p class='text-gray-600 text-xs italic'>Invalid Email</p>
          )}
        </div>
      </div>
      <div class='flex flex-wrap mb-6'>
        <div class='w-full px-3'>
          <label
            class=' font-SegoeUIBold text-sm block uppercase tracking-wide text-gray-700 font-bold mb-2'
            for='grid-password'
          >
            Message
          </label>
          <textarea
            class=' no-resize appearance-none block w-11/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
            id='message'
          ></textarea>
          {/* <p class='text-gray-600 text-xs italic'>
            Re-size can be disabled by set by resize-none / resize-y / resize-x
            / resize
          </p> */}
        </div>
      </div>
      <div class='w-full md:w-full md:flex md:items-center'>
        <div class='w-full flex justify-center md:w-full'>
          <button
            class='w-1/3 shadow bg-blue hover:bg-opacity-75	focus:shadow-outline
            focus:outline-none text-white font-bold py-2 rounded text-center'
            type='button'
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Lab;

import React from 'react';
import {BsArrowLeft} from 'react-icons/bs';

export default function Header(props) {
  return (
    <div className="">
      <div>
          <p><a className='textGray' href="#/"> <BsArrowLeft /> All products</a></p>
      </div>
    </div>
  );
}

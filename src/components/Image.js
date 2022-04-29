import React from 'react';
export default function Image(props) {
  const img = `./img/ath-msr7-${props.imgSrc}.jpg`;
  return (
      <div>
      <img className="medium" src={img} alt={props.imgSrc} />
      </div>
  );
}

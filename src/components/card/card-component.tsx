import React from "react";
import './card.scss'

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
  rotation: number;
  rotate: (id: string, deg: number) => void;
  id: string;
  isStar: boolean;
}

export const Card = ({ title, description, imgUrl, rotation, rotate, id, isStar }: CardProps): JSX.Element => {
  return (
    <div className='card-item'>
      <div className='card-image' >
        <img alt='' src={imgUrl} style={{transform: `rotate(${rotation}deg)`}} />
      </div>
      <div className='card-bottom-section'>
        <div className='card-info'>
          <div className='card-title'>{title}</div>
          <div className='card-description'>{description}</div>
        </div>
        <div className='card-rotate'>
          <button onClick={() => rotate(id, 90)}></button>
        </div>
      </div>
      {
        isStar ? <div className='card-star'></div> : null
      }
    </div>
  );
}

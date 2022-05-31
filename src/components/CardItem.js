import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
        <li className='cards__item'>
            <Link onClick={props.onClick} to={props.path} className='cards__item__link'>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Travel' className='cards__item__img'></img>
                </figure>
                <div className='cards__item__info'>
                    <h1 className='cards__item__text'>{props.text}</h1>
                </div>    
            </Link>
        </li>
    </>
  )
}

export default CardItem
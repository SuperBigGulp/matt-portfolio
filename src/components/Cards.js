import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Projects!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src='images/img-1.jpg' text='project 1 the quick brown fox' path='/'/>
                    <CardItem src='images/img-2.jpg' text='project 2 the quick brown fox' path='/'/>   
                </ul>
                <ul className='cards__items'>
                    <CardItem src='images/img-3.jpg' text='project 3 the quick brown fox' path='/'/>
                    <CardItem src='images/img-1.jpg' text='project 4 the quick brown fox' path='/'/>        
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
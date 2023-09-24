import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/img-9.jpg"
                    text="Expore the hidden waterfall deep insite the Amazon Jungle"
                    label='Adventure'
                    path='/services'
                    />
                     <CardItem
                    src="images/img-2.jpg"
                    text="Travel Through the Islands of Bali in a Privae Cruise"
                    label='Luxary'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src="images/img-9.jpg"
                    text="Expore the hidden waterfall deep insite the Amazon Jungle"
                    label='Adventure'
                    path='/services'
                    />
                     <CardItem
                    src="images/img-2.jpg"
                    text="Travel Through the Islands of Bali in a Privae Cruise"
                    label='Luxary'
                    path='/services'
                    />
                     <CardItem
                    src="images/img-2.jpg"
                    text="Travel Through the Islands of Bali in a Privae Cruise"
                    label='Luxary'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards

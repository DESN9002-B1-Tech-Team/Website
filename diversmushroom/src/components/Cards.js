import React from 'react';
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
    <div className='cards'>
        <h1>Highlighted Posts</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src="/images/cardboard-mushroom.jpg"
                              text="Mushrooms can be grown on cardboard!"
                              label="Interesting Facts"
                              path="/posts/mushrooms-and-cardboard"/>
                </ul>
            </div>
        </div>
    </div>
)}

export default Cards;

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
                              text="Mushrooms can be grown on cardboard! Here's How..."
                              label="Tutorial"
                              path="/posts/mushrooms-and-cardboard"/>
                    <CardItem src="/images/mushroom-packaging.jpg"
                              text="Did you know mushrooms can be used for packaging?"
                              label="Interesting Facts"
                              path="/posts/mushrooms-and-packaging" />
                </ul>
                <ul className='cards__items'>
                    <CardItem src="/images/mushrooms-Massy-France.jpg"
                              text="Literally called the Deadly Dappering, the poison..."
                              label="Interesting Facts"
                              path="/posts/mushrooms-deadly-dappering" />
                    <CardItem src="/images/mushroom-biggest.jpg"
                              text="Located in Oregon, the world's biggest mushroom is..."
                              label="Interesting Facts"
                              path="/posts/mushrooms-biggest" />
                    <CardItem src="/images/mushroom-spore-reuse.jpg"
                              text="Re-use the spores from your current mushroom farm to..."
                              label="Tutorial"
                              path="/posts/mushrooms-spore-reuse" />
                </ul>
            </div>
        </div>
    </div>
)}

export default Cards;

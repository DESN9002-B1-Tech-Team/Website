import React from 'react';
import PostCardItem from './posts_carditem'
import './posts_card.css'

function PostCards() {
    return (
        <div className='post_container'>
            <div className='post_wrapper'>
            
           		<div className="post_items">
                    <PostCardItem src="/images/cardboard-mushroom.jpg"
                              text="Mushrooms can be grown on cardboard! Here's How..."
                              label="Tutorial"
                              path="/posts/mushrooms-and-cardboard"
                              subtext="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. "/>
                    <PostCardItem src="/images/mushroom-packaging.jpg"
                              text="Did you know mushrooms can be used for packaging?"
                              label="Interesting Facts"
                              path="/posts/mushrooms-and-packaging" 
                              subtext="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. "/>
                    <PostCardItem src="/images/mushrooms-Massy-France.jpg"
                              text="Literally called the Deadly Dappering, the poison..."
                              label="Interesting Facts"
                              path="/posts/mushrooms-deadly-dappering"
                              subtext="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. " />
                    <PostCardItem src="/images/mushroom-biggest.jpg"
                              text="Located in Oregon, the world's biggest mushroom is..."
                              label="Interesting Facts"
                              path="/posts/mushrooms-biggest"
                              subtext="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. " />
                    <PostCardItem src="/images/mushroom-spore-reuse.jpg"
                              text="Re-use the spores from your current mushroom farm to..."
                              label="Tutorial"
                              path="/posts/mushrooms-spore-reuse"
                              subtext="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. " />
            	</div>
            </div>
        </div>
)}

export default PostCards;

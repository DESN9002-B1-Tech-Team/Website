import React from 'react';
import '../../App.css'
import Posts from '../Posts'
import IMG from '../images/cardboard-mushroom.jpg'


function MushroomCardboard() {
    return (
        <Posts title="Mushroom can be grown on cardboard! Here's How..." summary="Coming Soon!"
            data="Article Coming Soon!!" src={IMG} />
    )
}

export default MushroomCardboard;

import React from 'react';
import '../../App.css'
import Posts from '../Posts'
import IMG from '../images/mushroom-spore-reuse.jpg'


function MushroomDeadly() {
    return (
        <Posts title="Re-use the spores from your current mushroom farm to..." summary="Coming Soon!"
            data="Article Coming Soon!!" src={IMG} />
    )
}

export default MushroomDeadly;

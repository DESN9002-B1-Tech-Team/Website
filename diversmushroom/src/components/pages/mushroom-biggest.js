import React from 'react';
import '../../App.css'
import Posts from '../Posts'
import IMG from '../images/mushroom-biggest.jpg'


function MushroomBiggest() {
    return (
        <Posts title="Located in Oregon, the world's biggest mushroom is..." summary="Coming Soon!"
            data="Article Coming Soon!!" src={IMG} />
    )
}

export default MushroomBiggest;

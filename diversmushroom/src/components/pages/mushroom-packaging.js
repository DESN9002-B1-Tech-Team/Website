import React from 'react';
import '../../App.css'
import Posts from '../Posts'
import IMG from '../images/mushroom-packaging.jpg'


function MushroomPackaging() {
    return (
        <Posts title="Did yoy know mushrooms can be used for packaging?" summary="Coming Soon!"
            data="Article Coming Soon!!" src={IMG} />
    )
}

export default MushroomPackaging;

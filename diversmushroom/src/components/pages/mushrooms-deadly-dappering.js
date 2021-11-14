import React from 'react';
import '../../App.css'
import Posts from '../Posts'
import IMG from '../images/mushrooms-Massy-France.jpg'


function MushroomDeadly() {
    return (
        <Posts title="Literally called the Deadly Dappering, the poison..." summary="Coming Soon!"
            data="Article Coming Soon!!" src={IMG} />
    )
}

export default MushroomDeadly;

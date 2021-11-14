import '../../App.css'
import Posts from '../Posts'
import KIT from '../images/kit.jpg'

function Tutorial() {
    return (
        <>
          <Posts title="How to use the Kit?" summary="Here's how to grow your newly purchased NeoMush kit..."
          data="Coming Soon!" src={KIT} />
        </>
    )
}

export default Tutorial;
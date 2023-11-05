import { Banner } from '../../containers/banner/Banner';

import { CollectionCarts } from '../../containers/collection-carts/CollectionCarts';


import './Home.css'
 
export function Home() {

    return(

        <div className="home">
         <Banner />
         <CollectionCarts />
        </div>
    )
}
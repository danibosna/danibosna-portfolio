import React, {useContext} from 'react';
import github from '@images/github_social_icon.png';
import twitter from '@images/twitter_social_icon.png';
import linkedin from '@images/linkedin_social_icon.png';
import shoppingCart from '@images/icon_shopping_cart.svg';
import ShoppingCartContext from '@context/ShoppingCartContext.js';

const SocialBox = ({GitHub, Twitter, LinkedIn}) => {
    const {objState, viewMyOrders} = useContext(ShoppingCartContext);

    return (
        <div className="social-box">
            <a href={GitHub} target={'_blank'}><img src={github} /></a>
            <a href={Twitter} target={'_blank'}><img src={twitter} /></a>
            <a href={LinkedIn} target={'_blank'}><img src={linkedin} /></a>
            <a target={'_blank'} className="navbar-shopping-cart" onClick={viewMyOrders}>
                <img src={shoppingCart} />
                {objState.cart.length > 0 ? <div className='notification'>{objState.cart.length}</div> : null}
            </a>
        </div>
    );
}

export default SocialBox;
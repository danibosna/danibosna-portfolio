import React from 'react';
import github from '@images/github_social_icon.png';
import twitter from '@images/twitter_social_icon.png';
import linkedin from '@images/linkedin_social_icon.png';

const SocialBox = ({GitHub, Twitter, LinkedIn}) => {
    return (
        <div className="social-box">
            <a href={GitHub} target={'_blank'}><img src={github} /></a>
            <a href={Twitter} target={'_blank'}><img src={twitter} /></a>
            <a href={LinkedIn} target={'_blank'}><img src={linkedin} /></a>
        </div>
    );
}

export default SocialBox;
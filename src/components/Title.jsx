import React from 'react';
import { Link } from 'react-router-dom';

const Title = ({title, subTitle}) => {
    return (
        <div className="title-box">
            <Link to="/" id="title" className="title">
                <h1>
                    {title}<br />
                    <span>{subTitle}</span>
                </h1>
            </Link>
        </div>
    );
}

export default Title;
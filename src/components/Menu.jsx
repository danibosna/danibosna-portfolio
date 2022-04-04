import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({activeModal}) => {
    return (
        <nav id="menu" className="menu menu-close">
                <ul className="nav_list">
                    <li>
                        <Link to="/" id="me" onClick={activeModal}>
                            <i className="far fa-id-badge"></i>
                            <span>Me</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" id="port">
                            <i className="fas fa-folder-open"></i>
                            <span>Portafolio</span>
                            <i className="fas fa-chevron-down arrow"></i>
                        </Link>
                        <ul className="sub-mn">
                            <li>
                                <h3 className="link_name">Portafolio</h3>
                            </li>
                            <li>
                                <Link to="/boskicookbook">BoskiCookBook</Link>
                            </li>
                            <li>
                                <Link to="/simonnstattoo">SimonnsTattoo</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/" id="experience">
                            <i className="fas fa-code"></i>
                            <span>Experiences</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" id="especialities">
                            <i className="fas fa-chart-bar"></i>
                            <span>Especialties</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" id="skills">
                            <i className="fas fa-braille"></i>
                            <span>Skills</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" id="contact">
                            <i className="far fa-comments"></i>
                            <span>Conversemos</span>
                        </Link>
                    </li>
                </ul>
            </nav>
    );
}

export default Menu;
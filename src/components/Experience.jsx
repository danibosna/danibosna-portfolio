import React from 'react'

const Experience = ({logo, title, info, date, href}) => {
  return (
    <li className="experience-card">
      <img src={logo} alt="" />
      <h3>{title}</h3>
      <p>
        {info}
        <br />
        <strong>{date}</strong>
      </p>
      <a href={href}>
        <i className="fas fa-external-link-alt"></i>
      </a>
    </li>
  )
}

export default Experience;
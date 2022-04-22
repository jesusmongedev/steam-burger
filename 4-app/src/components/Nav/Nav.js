import React from 'react'
import Cta from '../Cta/Cta'
import './Nav.scss'

const Nav = ({ content, type }) => {
  const cssClass = 'Nav'
  const uiConfig = {
    cta: 'cuaternary',
    icon: 'secondary',
  }

  return (
    <div className={`${cssClass} ${cssClass}--${type}`}>
      <div className="grid">
        <div className={`${cssClass}-button`}>
          <Cta
            type={uiConfig.cta}
            icon={content.icon}
            iconType={uiConfig.icon}
          />
        </div>
        <ul className={`${cssClass}-list`}>
          {content.items.map((item, i) => (
            <li key={i} className={`${cssClass}-item`}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Nav

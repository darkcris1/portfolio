import Link from './common/Link'
import onViewport from '../utils/onViewport'
import { useEffect } from 'react'

const Banner = ({ title, link, linkLabel }) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.banner > *')

    const observer = onViewport(elems, (el, i) => {
      el.style.animationDelay = i * 200 + 'ms'
      el.className += ' scale-in-ver-bottom'
    })
    return observer.clean
  })
  return (
    <div className="banner">
      <h1>{title}</h1>
      <Link className="btn primary" target="_blank" href={link}>
        {linkLabel}
      </Link>
    </div>
  )
}

export default Banner

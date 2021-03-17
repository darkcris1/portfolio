import Link from './common/Link'
import onViewport from '../utils/onViewport'
import { useEffect } from 'react'

const Banner = ({ title, link, linkLabel }) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.banner > *')

    onViewport(elems, (el, i) => {
      el.style.animationDelay = i * 200 + 'ms'
      el.className += ' scale-in-ver-bottom'
    })
  }, [])
  return (
    <div className="banner">
      <h1>{title}</h1>
      <Link
        role="navigation"
        rel="noopener noreferrer"
        target="_blank"
        className="btn primary"
        href={link}
      >
        {linkLabel}
      </Link>
    </div>
  )
}

export default Banner

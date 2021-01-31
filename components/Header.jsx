import { useEffect } from 'react'
import onViewport from '../utils/onViewport'
import { useRouter } from 'next/router'
const Header = ({ title, subText, children, image, ...props }) => {
  const { asPath } = useRouter()
  useEffect(() => {
    const elems = document.querySelectorAll('.header-background .content > *')
    const observer = onViewport(elems, (el, i) => {
      el.style.animationDelay = i * 200 + 'ms'
      el.className += ' scale-in-ver-bottom'
    })
    return () => observer.clean()
  }, [asPath, title])

  return (
    <div
      className="header-background"
      style={{ '--url': `url(${image || 'assets/fr.png'})` }}
      {...props}
    >
      <div className="content">
        <h1 className="title">
          {title}
          <hr color="grey" />
        </h1>
        <p className="sub-text mt-1">{subText}</p>
        {children}
      </div>
    </div>
  )
}

export default Header

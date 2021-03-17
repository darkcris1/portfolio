import { useEffect, useRef, useState } from 'react'
import Link from './common/Link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const Navbar = ({ data }) => {
  const [show, setShow] = useState(false)
  const { asPath } = useRouter()
  const nav = useRef()
  function handleShow() {
    setShow(!show)
  }
  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    const navbar = nav.current
    function navScroll() {
      if (this.pageYOffset > 80) navbar.classList.add('scrolled')
      else navbar.classList.remove('scrolled')

      const offsetBegin = 200
      const currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos || currentScrollPos <= offsetBegin) {
        navbar.style.transform = 'translateY(0)'
      } else {
        navbar.style.transform = 'translateY(-100%)'
      }
      prevScrollpos = currentScrollPos
    }
    // Initialize in first load
    navScroll.apply(window)

    window.onscroll = navScroll
  }, [])

  const burgerClass = classNames('burger', { show })

  return (
    <nav ref={nav} style={{ boxShadow: '' }}>
      <div className="logo">
        <Link href="/">{data.logo}</Link>
      </div>
      <ul className={`nav-links ${show ? 'show' : ''}`}>
        {data.links.map(({ href, text, className, ...rest }) => {
          return (
            <li key={href}>
              <Link
                {...rest}
                href={href}
                className={classNames({ active: asPath === href }, className)}
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className={burgerClass} onClick={handleShow}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {show && <div className="modal" onClick={handleShow}></div>}
    </nav>
  )
}

export default Navbar

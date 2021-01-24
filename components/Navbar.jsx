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
    function navScroll() {
      if (this.pageYOffset > 80) nav.current.classList.add('scrolled')
      else nav.current.classList.remove('scrolled')
    }
    // Initialize in first load
    navScroll.apply(window)
    window.onscroll = navScroll
  })
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

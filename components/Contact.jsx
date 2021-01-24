import React, { useEffect } from 'react'
import onViewport from '../utils/onViewport'
import Link from './common/Link'

const Contact = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.paragraphs > *, form > *')
    const observer = onViewport(elems, (el, i) => {
      el.style.animationDelay = i * 100 + 'ms'
      el.className += ' scale-in-ver-bottom'
    })
    return observer.clean
  })
  return (
    <section className="contact-section">
      <div className="contact-body">
        <div className="paragraphs">
          <h2>I am happy to hear if you are interested of my works</h2>
          <p>
            You can contact me anytime via this form, make sure your email is
            correct so I can get in touch to you immediately after I received
            the mails.
          </p>
          <h4>You can also contact me via the following:</h4>
          <div className="account-list">
            <Link href="https://facebook.com/crisjunjun123">
              <img src="/facebook.svg" width="50" alt="" />
            </Link>
            <Link href="mailto:sircnujnuj@gmail.com?subject=Get in touch">
              <img src="/gmail.svg" width="50" alt="" />
            </Link>
          </div>
        </div>
        <form method="POST" action="api/contact">
          <h1>Contact</h1>
          <input
            type="text"
            required
            name="name"
            className="name-input"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            required
            className="name-input"
            placeholder="Email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Messages..."
          ></textarea>
          <button className="btn primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

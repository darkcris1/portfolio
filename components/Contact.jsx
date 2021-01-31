import jm from 'json-msg'
import React, { useEffect, useState } from 'react'
import onViewport from '../utils/onViewport'
import Input from './common/Input'
import Link from './common/Link'
import Spinner from './common/Spinner'

jm.defaultMessage({
  string: {
    min: '%label% must be atleast %keyValue% characters',
  },
})
const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)

  const dataSchema = {
    name: jm.str({ min: 4, max: 20, alphanum: true, label: 'Name' }),
    email: jm.str({ email: true, max: 50, label: 'Email' }),
    message: jm.str({ min: 10, max: 255, label: 'Message' }),
  }

  function handleChange({ target }) {
    const value = target.value
    setData((prevData) => {
      const cloneData = { ...prevData }
      cloneData[target.name] = value
      return cloneData
    })

    const error = jm.validate(value, dataSchema[target.name])
    setError((prevError) => {
      prevError[target.name] = error
      return prevError
    })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const errors = jm.validate(data, dataSchema, { abortEarly: false })
    if (errors) return setError(errors)

    setError({})
    setLoading(true)
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = await res.text()
    const { default: calert } = await import('calerts')
    setLoading(false)

    calert({
      icon: res.status === 200 ? 'success' : 'error',
      title: result,
      timer: 2000,
      confirmButton: false,
    })
    setData({ name: '', email: '', message: '' })
  }
  useEffect(() => {
    const elems = document.querySelectorAll('.paragraphs > *, form > *')
    onViewport(elems, (el, i) => {
      el.style.animationDelay = i * 100 + 'ms'
      el.className += ' scale-in-ver-bottom'
    })
  }, [])

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
              <img src="icons/facebook.svg" width="50" alt="" />
            </Link>
            <Link href="mailto:sircnujnuj@gmail.com?subject=Get in touch">
              <img src="icons/gmail.svg" width="50" alt="" />
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Contact</h1>
          <Input
            onChange={handleChange}
            value={data.name}
            name="name"
            error={error.name}
          />
          <Input
            onChange={handleChange}
            name="email"
            value={data.email}
            error={error.email}
          />
          <Input
            textarea={true}
            value={data.message}
            onChange={handleChange}
            error={error.message}
            name="message"
          />
          <button type="submit" disabled={loading} className="btn primary">
            {loading ? <Spinner color="white" size="16px" /> : 'Send'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

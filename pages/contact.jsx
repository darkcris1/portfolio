import React from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import SEO from '../components/common/SEO'

const contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Header title="Contact" subText="Get in touch if you have any offer" />
      <Contact />
    </>
  )
}

export default contact

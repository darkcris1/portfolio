import React from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import SEO from '../components/common/SEO'

const contact = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch to me if you have inquiries"
      />
      <Header title="Contact" subText="Get in touch to me" />
      <Contact />
    </>
  )
}

export default contact

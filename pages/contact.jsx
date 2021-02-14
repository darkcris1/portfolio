import React from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import SEO from '../components/common/SEO'
import { domain } from '../const'
const contactDomain = domain + '/contact'

const contact = () => {
  return (
    <>
      <SEO
        title="Contact - Get in touch"
        description="Get in touch to me if you have inquiries"
        canonical={contactDomain}
        image={domain + '/fr.png'}
        ogImage={domain + '/fr.png'}
      />
      <Header title="Contact" subText="Get in touch to me" />
      <Contact />
    </>
  )
}

export default contact

import SEO from './common/SEO'
import Footer from './Footer'
import Navbar from './Navbar'

const navData = {
  logo: <h1>Cris....</h1>,
  links: [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/blog', text: 'Blog' },
    { href: '/contact', text: 'Contact' },
  ],
}
const Layout = ({ title, children }) => {
  return (
    <div className="container">
      <SEO title={title} description="Docs">
        <meta name="theme-color" content="#ee2e31" />
        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
      </SEO>
      <Navbar data={navData} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

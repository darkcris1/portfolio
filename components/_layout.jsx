import SEO from './common/SEO'
import Footer from './Footer'
import Navbar from './Navbar'

const navData = {
  logo: 'Cris...',
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
        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/icon-192x192.png" />
      </SEO>
      <Navbar data={navData} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

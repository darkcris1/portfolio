import SEO from './common/SEO'
import Footer from './Footer'
import Navbar from './Navbar'
const navData = {
  logo: <h1> Logo</h1>,
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
        <meta name="theme-color" content="#dacb02" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.5.0/themes/prism-vsc-dark-plus.css"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"
        ></script>
        <link rel="shortcut icon" href="./logo.svg" type="image/svg" />
        <link rel="manifest" href="manifest.json" />
        <script async src="fontawesome.js"></script>
      </SEO>
      <Navbar data={navData} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

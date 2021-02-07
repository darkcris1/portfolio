import '../styles/global.scss'
import Layout from '../components/_layout.jsx'
import { Router } from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
nProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeComplete', nProgress.done)
Router.events.on('routeChangeError', nProgress.done)

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

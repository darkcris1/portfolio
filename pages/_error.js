import { useRouter } from 'next/router'
import Header from '../components/Header'
import SEO from '../components/common/SEO'

function Error({ message = 'Page Not Found' }) {
  const { replace } = useRouter()
  return (
    <>
      <SEO title={message} description={message} />
      <Header title={message} subText="">
        <button className="btn primary" onClick={() => replace('/')}>
          Back to /
        </button>
      </Header>
    </>
  )
}

export default Error

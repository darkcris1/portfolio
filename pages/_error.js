import { useRouter } from 'next/router'
import Header from '../components/Header'
import SEO from '../components/common/SEO'
import { useState, useEffect } from 'react'

function Error({ message = 'Page Not Found' }) {
  const { replace } = useRouter()
  const [msg, setMsg] = useState(message)
  const [subText, setSubtext] = useState('')

  useEffect(() => {
    const isOnline = window.navigator.onLine
    setMsg(() => {
      return isOnline ? msg : 'Yikes! You are offline'
    })
    setSubtext(() => {
      return isOnline ? '' : 'Please refresh the page if you are connected'
    })
  }, [])
  return (
    <>
      <SEO title={msg} description={msg} />
      <Header title={msg} subText={subText}>
        <button className="btn primary" onClick={() => replace('/')}>
          Back to /
        </button>
      </Header>
    </>
  )
}

export default Error

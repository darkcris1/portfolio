import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Spinner from './Spinner'
import onViewport from '../../utils/onViewport'

const Img = ({ src, ...rest }) => {
  const [source, setSource] = useState('')
  const [loaded, setLoaded] = useState(false)
  const spinner = useRef(null)

  useEffect(() => {
    onViewport(spinner.current, () => {
      setSource(src)
      const image = new Image()
      image.src = src
      image.onload = () => setLoaded(true)

      image.onerror = () => setLoaded(true)
    })
  }, [])
  return loaded ? <img src={source} {...rest} /> : <Spinner ref={spinner} />
}

export default Img

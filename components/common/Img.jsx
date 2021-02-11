import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Spinner from './Spinner'
import onViewport from '../../utils/onViewport'

const Img = ({ src, spinnerColor, ...rest }) => {
  const [loaded, setLoaded] = useState(false)
  const spinner = useRef(null)

  useEffect(() => {
    onViewport(spinner.current, () => {
      const image = new Image()
      image.src = src
      image.onload = () => {
        setLoaded(true)
      }
    })
  }, [])
  return loaded ? (
    <img src={src} {...rest} />
  ) : (
    <Spinner ref={spinner} color={spinnerColor} />
  )
}

export default Img

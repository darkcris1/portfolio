import React, { useEffect } from 'react'
import onViewport from '../utils/onViewport'
import Link from './common/Link'
import Img from './common/Img'

const Cards = ({
  data,
  alt,
  btnText,
  size = 3,
  defaultImage,
  animation = true,
}) => {
  const computedData = data.slice(0, size)
  useEffect(() => {
    if (!animation) return
    const cards = document.querySelectorAll('.cards .card')
    onViewport(cards, (el, i) => {
      el.style.animationDelay = i * 100 + 'ms'
      el.className += ' bounce-in-fwd'
    })
  }, [])

  return (
    <div className="cards mt-2">
      {computedData.map((obj, i) => {
        const { title, image, text, link, description } = obj
        return (
          <div key={title + i} className="card">
            <div className="image-text">
              <Link href={link} className="image">
                <Img
                  src={image || defaultImage}
                  alt={alt || 'sample picture'}
                />
              </Link>
              <div className="texts">
                <h3 className="title">{title}</h3>
                <p className="text">{text || description}</p>
              </div>
            </div>
            <Link className="btn primary" href={link}>
              {btnText || 'View Website'}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Cards

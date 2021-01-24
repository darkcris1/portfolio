import { useEffect } from 'react'
import onViewport from '../utils/onViewport'

const ListBar = ({ data }) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.progress-bar')
    const observer = onViewport(elems, (el, i) => {
      el.style.transitionDelay = i * 100 + 'ms'
      el.className += ' load-anim'
    })
    return observer.clean
  })
  return (
    <div className="skills-list">
      <h2>{data.listName}</h2>
      {data.lists.map((obj) => {
        const { label, color = 'yellow', percent = 50 } = obj
        return (
          <div key={label} className="bar mt-2 mb-2">
            <div className="label">{label || 'Javascript'}</div>
            <div
              className="progress-cont"
              style={{ '--bar-width': `${percent}%` }}
            >
              <div className="progress-bar" style={{ background: color }}></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListBar

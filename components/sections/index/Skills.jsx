import ListBar from '../../ListBar'
import Img from '../../common/Img'
import { useEffect } from 'react'
import onViewport from '../../../utils/onViewport'
const languageList = {
  listName: 'Language',
  lists: [
    { label: 'HTML', color: '#F9AE40', percent: 100 },
    {
      label: 'CSS/SASS',
      color: 'linear-gradient(171deg, #1E2EF3, #DC00FB)',
      percent: 97,
    },
    {
      label: 'Javascript/Node',
      color: 'linear-gradient(171deg, #F7FF23, #49DC28)',
      percent: 90,
    },
  ],
}

const frameworkList = {
  listName: 'Frameworks',
  lists: [
    {
      label: 'React/Next.js',
      color: 'linear-gradient(171deg, #78E1F3, rgba(0,0,0,.7))',
      percent: 80,
    },
    { label: 'Express', color: '#49DC28', percent: 70 },
    {
      label: 'Svelte/Sapper',
      color: 'linear-gradient(171deg, #F9AE40, #49DC28)',
      percent: 60,
    },
  ],
}

const Skills = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(
      '.skills-description .content > *, .service-list > *',
    )
    const observer = onViewport(elems, (el, i) => {
      el.style.animationDelay = i * 100 + 'ms'
      el.className += ' scale-in-ver-bottom'
    })
    return observer.clean
  })
  return (
    <>
      <section className="skills-section">
        <h1>Skills</h1>
        <div className="list-section">
          <ListBar data={languageList} />
          <ListBar data={frameworkList} />
        </div>
      </section>
      <section className="skills-description">
        <div className="content">
          <h1 className="title">Service</h1>
          <ul className="service-list">
            <li>
              <i className="far fa-check-circle mr-1"></i>
              {/* <img src="icons/check.svg" alt="check image" /> */}
              <span>Front-End Development</span>
            </li>
            <li>
              <i className="far fa-check-circle mr-1"></i>
              <span>Back-End Development</span>
            </li>
            <li>
              <i className="far fa-check-circle mr-1"></i>
              <span>Blogging</span>
            </li>
          </ul>
        </div>
        <div className="computer-vector">
          <Img src="assets/web-developer.svg" alt="laptop boy" />
        </div>
      </section>
    </>
  )
}

export default Skills

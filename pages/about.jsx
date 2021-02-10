import SEO from '../components/common/SEO'
import Img from '../components/common/Img'
import Header from '../components/Header'
import { useEffect } from 'react'
import onViewport from '../utils/onViewport'

const about = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.about-section .paragraph > *')
    onViewport(elems, (el, i) => {
      el.style.animationDelay = i * 100 + 'ms'
      el.className += ' scale-in-ver-bottom'
    })
  }, [])
  return (
    <>
      <SEO
        title="About Me | Cris Fandiño Jr."
        description="Cris Fandino Jr. A Brief introduction about my self"
      ></SEO>
      <Header title="About" subText="Brief introduction about my self" />
      <section className="about-section">
        <div className="avatar">
          <Img src="assets/my-picture-transparent.png" />
        </div>
        <article className="paragraph">
          <h1>Hi! I am Cris Fandiño Jr.</h1>
          <p>
            I am 18 years old from the Philippines a self taught web developer
            with 1 year of experience. I build websites according to web
            standards guidelines. I have experience few of the languages and
            frameworks such as HTML, CSS ,Javascript, Nodejs, Bootstrap,
            TailwindCSS, Sass, React/Next.js and Svelte.
          </p>
          <p>
            At first I intended to be a web designer but my pulse was truly more
            on programming. I tried back-end development since it was more on
            programming and building API from sratch using nodejs and mongoDB.
          </p>
          <p>
            When building websites, I usually use Next.js as a default default
            framework for faster development. I built some my own libraries in
            npm as you can see on my{' '}
            <a href="https://github.com/darkcris1">Github</a> Page
          </p>
        </article>
      </section>
    </>
  )
}

export default about

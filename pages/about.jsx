import SEO from '../components/common/SEO'
import Img from '../components/common/Img'
import Header from '../components/Header'

const about = () => {
  return (
    <>
      <SEO
        title="About Me 😁"
        description="Cris Fandino Jr. A Brief introduction about my self"
      ></SEO>
      <Header title="About" subText="Brief introduction about my self" />
      <section className="about-section">
        <div className="avatar">
          <Img src="assets/my-picture-transparent.png" />
        </div>
        <div className="paragraph">
          <h1>Hi! I am Cris Fandiño Jr.</h1>
          <p>
            I am 18 years old from the Philippines a self taught web developer
            with 1 year of experience. I build websites according to web
            standards guidelines. I have experience few of the languages and
            frameworks such as HTML, CSS ,Javascript, Nodejs, Bootstrap, Sass
            React/Next.js and Svelte.
          </p>
          <p>
            At first I intended to be a web designer but my pulse was truly more
            on programming. I tried back-end development since it was more on
            programming and building API from sratch using nodejs and mongoDB.
          </p>
          <p>
            When building websites, I usually use Next.js as a default default
            framework for faster development. I built some my own libraries in
            npm packages as you can see on my
            <a href="https://github.com/darkcris1">Github</a> Page
          </p>
        </div>
      </section>
    </>
  )
}

export default about

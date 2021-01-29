import Header from '../components/Header'
import SEO from '../components/common/SEO'
import Link from '../components/common/Link'
import Work from '../components/sections/index/Work'
import Skills from '../components/sections/index/Skills'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

const index = ({ githubData }) => {
  const experience = new Date().getFullYear() - 2020
  return (
    <>
      <SEO title="Home" description="Basic" />
      <Header
        title="Cris Fandino Jr. "
        subText={`I am web developer with ${experience} year of experience`}
      >
        <div className="button my-2">
          <Link href="/#" className="btn primary mr-2">
            View CV
          </Link>
          <Link href="/contact" className="btn primary wobble-hor-top">
            Get in touch
          </Link>
        </div>
        <div className="account-icon">
          <Link
            data-tooltip="Sololearn"
            href="https://www.sololearn.com/Profile/17777591"
            target="_blank"
          >
            <img src="/sololearn.svg" alt="facebook link" />
          </Link>
          <Link
            data-tooltip="Github"
            href="https://github.com/darkcris1"
            target="_blank"
          >
            <img data-tooltip="Facebook" src="/github.svg" alt="github link" />
          </Link>
          <Link
            data-tooltip="Codewars"
            href="https://www.codewars.com/users/darkcris1"
            target="_blank"
          >
            <img src="/codewars.svg" alt="github link" />
          </Link>
        </div>
      </Header>
      <Skills />
      <Work githubData={githubData} />
      <Banner
        link="https://github.com/darkcris1?tab=repositories"
        linkLabel="See more"
        title="Want to see more about my projects?"
      />
      <Contact />
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/darkcris1')
  const data = await res.json()

  return {
    props: {
      githubData: data,
    },
  }
}
export default index

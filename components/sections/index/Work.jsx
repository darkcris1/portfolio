import React from 'react'
import Cards from '../../Cards'
import GithubCard from '../../GithubCard'

const cards = [
  {
    image: 'https://covid19-updates.vercel.app/coronavirus.png',
    title: 'Covid 19 Updates',
    text: 'Online covid tracker around the world',
    link: 'https://covid19-updates.vercel.app',
  },
  {
    image: 'https://json-msg.vercel.app/logo.svg',
    title: 'json-msg',
    text: 'lightweight json schema validator',
    link: 'https://json-msg.vercel.app',
  },
  {
    image: 'assets/clicker.png',
    title: 'clicker',
    text: 'Test your eyes and clicking speed on this simple game',
    link: 'https://clickers-game.netlify.app',
  },
]
const Work = ({ githubData }) => {
  return (
    <section className="work-section">
      <h1>Works</h1>
      <GithubCard data={githubData} />
      <img src="assets/card-bg.svg" alt="ard background" className="card-bg" />
      <Cards data={cards} alt="sample picture of site" />
    </section>
  )
}

export default Work

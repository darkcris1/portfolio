import { useEffect } from 'react'
import onViewport from '../utils/onViewport'
import Link from './common/Link'

const GithubCard = ({ data }) => {
  const { avatar_url, bio, login, public_gists, public_repos } = data
  useEffect(() => {
    const cards = document.querySelectorAll(
      '.github-user > *, .github-user .content > *',
    )
    onViewport(cards, (el, i) => {
      el.style.animationDelay = i * 200 + 'ms'
      el.className += ' scale-in-ver-bottom'
    })
  }, [])

  return (
    <div className="github-user">
      <div className="avatar">
        <img src={avatar_url} width="200" height="200" alt="github avatar" />
      </div>
      <div className="content">
        <div className="user">
          <Link rel="noopener noreferrer" href="https://github.com/darkcris1">
            github/{login}
          </Link>
        </div>
        <div className="bio">{bio}</div>
        <div className="counts">
          <div className="repo" data-tooltip={'Location'}>
            <i className="fa fa-location"></i>
            Philippines
          </div>
          <div className="repo" data-tooltip={'Gists'}>
            <i className="fa fa-code"></i>
            {public_gists}
          </div>
          <div className="repo" data-tooltip={'Repositories'}>
            <i className="fa fa-book"></i>
            {public_repos}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubCard

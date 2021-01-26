import Header from '../../components/Header'
import SEO from '../../components/common/SEO'
import Link from '../../components/common/Link'
import Cards from '../../components/Cards'
import { useState } from 'react'
import generateMdPaths from '../../utils/generateMdPaths'
import mdParse from '../../utils/mdParse'

const index = ({ blogposts }) => {
  const [size, setSize] = useState(3)
  const isFull = blogposts.length > size
  function handleSize(e) {
    e.preventDefault()
    setSize(size + 3) // 3 is how much size do you want to add
  }
  return (
    <>
      <SEO
        title="Blogposts"
        description="Knowledge is shareable and I am happy to share it to you"
      />
      <Header
        title="Blog"
        subText="I will share all my knowledge especially in technologies"
      />
      <section className="blog-section">
        <Cards
          data={blogposts}
          btnText="Read More"
          size={size}
          defaultImage={'/logo.svg'}
          animation={false}
        />
        {isFull && (
          <Link
            className="link"
            onClick={handleSize}
            style={{ fontSize: '1.2rem', fontWeight: 600 }}
          >
            Load More
          </Link>
        )}
      </section>
    </>
  )
}
export default index

export async function getStaticProps() {
  const data = []

  const paths = generateMdPaths('blogposts').map((val) =>
    val.params.slug.join('/'),
  )
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const { default: markdown } = await import(`../../blogposts/${path}.md`)
    const vars = mdParse(markdown).vars
    vars.link = '/blog/' + path
    data.push(vars)
  }
  const sortedData = data.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return {
    props: {
      blogposts: sortedData,
    },
  }
}

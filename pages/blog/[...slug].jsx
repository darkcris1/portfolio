import generateMdPaths from '../../utils/generateMdPaths'
import mdParse from '../../utils/mdParse'
import Header from '../../components/Header'
import SEO from '../../components/common/SEO'

const slug = ({ data }) => {
  const { title, description, image, date, author } = data.vars
  return (
    <>
      <SEO title={title} description={description} />
      <Header image={image} title={title} subText={description}>
        <div>
          <span className="mr-2">
            <strong>{author}</strong> on {date}
          </span>
        </div>
      </Header>
      <section className="blog-slug-section" style={{ textAlign: 'left' }}>
        <main>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: data.html }}
          />
        </main>
      </section>
    </>
  )
}
export default slug

export async function getStaticPaths() {
  const paths = generateMdPaths('blogposts')

  return {
    paths,
    fallback: false,
  }
}
const defaultVariables = {
  date: 'Jan 24, 2021',
  author: 'Cris Fandino Jr.',
}
export async function getStaticProps({ params }) {
  const fileName = params.slug.join('/')
  const { default: markdown } = await import(`../../blogposts/${fileName}.md`)
  const data = mdParse(markdown)
  data.vars = { ...defaultVariables, ...data.vars }
  return {
    props: {
      data,
    },
  }
}

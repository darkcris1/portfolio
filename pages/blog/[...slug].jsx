import generateMdPaths from '../../utils/generateMdPaths'
import mdParse from '../../utils/mdParse'
import Header from '../../components/Header'
import SEO from '../../components/common/SEO'

const slug = ({ data }) => {
  const { title, description, image, date, author, css, js } = data.vars
  return (
    <>
      <SEO title={title} description={description}>
        {css && <link href={css} rel="stylesheet" />}
        {js && <script src={js} defer></script>}
      </SEO>
      <Header image={image} title={title} subText={description}>
        <div>
          <span className="mr-2">
            <strong>{author}</strong> on {date}
          </span>
        </div>
      </Header>
      <section className="blog-slug-section" style={{ textAlign: 'left' }}>
        <main>
          <article
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

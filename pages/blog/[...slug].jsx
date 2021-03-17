import generateMdPaths from '../../utils/generateMdPaths'
import mdParse from '../../utils/mdParse'
import Header from '../../components/Header'
import SEO from '../../components/common/SEO'
import { domain } from '../../const'

const slug = ({ data, blogName }) => {
  const { title, description, image, date, author, css, js } = data.vars
  return (
    <>
      <SEO
        title={title}
        description={description}
        image={image}
        url={domain + '/blog/' + blogName}
      >
        {css && <link href={css} rel="stylesheet" />}
        {js && <script src={js} defer></script>}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.5.0/themes/prism-vsc-dark-plus.min.css"
        />
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
export async function getStaticProps({ params }) {
  const defaultVariables = {
    date: new Date().toDateString().slice(4),
    author: 'Cris Fandino Jr.',
  }
  const fileName = params.slug.join('/')
  const { default: markdown } = await import(`../../blogposts/${fileName}.md`)
  const data = mdParse(markdown)
  data.vars = { ...defaultVariables, ...data.vars }
  return {
    props: {
      data,
      blogName: fileName,
    },
  }
}

import Head from 'next/head'

const convertToMetaName = function (name) {
  name = name.match(/^og|^twitter|^theme/)
  if (!name) return name
  return name.input.toLowerCase().replace(name[0], `${name[0]}:`)
}

const SEO = ({ children, title, description, ...props }) => {
  const metas = Object.entries(props).map(([name, content]) => {
    if (/[A-Z]/.test(name)) name = convertToMetaName(name)
    return <meta key={name} name={name} content={content} />
  })

  return (
    <Head>
      <title> {title} </title>

      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta name="og:title" content={title} />
      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {metas}
      {children}
    </Head>
  )
}
export default SEO

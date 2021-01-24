import fs from 'fs'

const ignoreRegex = /_(.*?).md/
const isMd = (value) => /\.md$/.test(value)

function generateMdPaths(path, ext = '', slugName = 'slug') {
  return fs.readdirSync(path).reduce((acc, value) => {
    if (ignoreRegex.test(value)) return acc

    if (!isMd(value)) {
      // recursively generate tree files
      acc.push(
        ...generateMdPaths(`${path}/${value}/`, `${ext}${value}/`, slugName),
      )
    } else {
      // Convert into array since it was a spread dynamic page
      const slug = (ext + value.replace(/\.md$/, '')).split('/')
      acc.push({ params: { [slugName]: slug } })
    }
    return acc
  }, [])
}

export default generateMdPaths

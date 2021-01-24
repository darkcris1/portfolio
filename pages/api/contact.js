export default function handler(req, res) {
  if (req.method === 'POST') {
    res.redirect('/')
  } else {
    res.end('Hello world')
  }
}

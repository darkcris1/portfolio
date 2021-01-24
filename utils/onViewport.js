function onViewport(elem, callback, options = {}) {
  if (elem instanceof Element) elem = [elem]

  const { abortEarly = true } = options
  let counter = 0
  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        callback(el.target, counter)
        counter++
        abortEarly && self.unobserve(el.target)
      }
    })
  }, options)

  elem.forEach((el) => {
    observer.observe(el)
  })

  return {
    clean: () => {
      observer.disconnect()
    },
  }
}

export default onViewport

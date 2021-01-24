import { forwardRef } from 'react'

const Spinner = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="lds-ripple" {...props}>
      <div></div>
      <div></div>
    </div>
  )
})

export default Spinner

import { forwardRef } from 'react'

const Spinner = forwardRef(({ color, size = '72px', style, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="lds-dual-ring"
      {...props}
      style={{
        '--spinner-color': color || 'red',
        width: size,
        height: size,
        ...style,
      }}
    ></div>
  )
})

export default Spinner

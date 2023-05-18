import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <label className={props.classLabel}>
      <span className={props.classSpan}>{props.children}</span>
      <input ref={ref} {...props.input} onChange={props.onChange} />
    </label>
  )
})

export default Input

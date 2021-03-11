const Input = ({ textarea, error, name, ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{name.toUpperCase()}</label>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          cols="30"
          rows="10"
          {...props}
        ></textarea>
      ) : (
        <input type="text" id={name} name={name} {...props} />
      )}
      {error && <div className="alert-error">{error}</div>}
    </div>
  )
}

export default Input

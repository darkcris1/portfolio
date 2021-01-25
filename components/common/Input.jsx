const Input = ({ textarea, error, name, ...props }) => {
  return (
    <div className="form-input">
      {textarea ? (
        <textarea
          placeholder={name}
          name={name}
          cols="30"
          rows="10"
          {...props}
        ></textarea>
      ) : (
        <input type="text" placeholder={name} name={name} {...props} />
      )}
      {error && <div className="alert-error">{error}</div>}
    </div>
  )
}

export default Input

function Form(props) {
  // This is a functional component that renders a form

  return (
    // The form listens to the 'onSubmit' event and calls the 'handleLogin' function from props
    <form onSubmit={props.handleLogin}>
      <div className="mb-3">
        {/* Label for the input field */}
        <label htmlFor="username" className="form-label">
          Enter your name
        </label>
        {/* Input field for entering the name */}
        <input
          type="text"
          className="form-control"
          id="username"
          autoComplete="on"
          placeholder="Enter your name"
          // Listens to the 'onChange' event and calls the 'handleNameChange' function from props
          onChange={props.handleNameChange}
          // The value of the input field is bound to the 'name' prop
          value={props.name}
        />
      </div>
      {/* Submit button */}
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default Form;
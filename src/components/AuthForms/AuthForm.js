import React from "react";

export default function AuthForm(props) {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState(props.errors);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const onSubmit = e => {
    e.preventDefault();
    props.submit( {
        email, username, password, remember
    },setErrors);
  };
  return (
    <form>
      {props.username ? (
        <>
          <div className="form-group row col-md">
            <label htmlFor="username-input">Username: </label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username-input"
              placeholder="Type your username"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <Error content={errors.username}></Error>
        </>
      ) : (
        ""
      )}
      <div className="form-group row col-md">
        <label htmlFor="email-input">Email: </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email-input"
          placeholder="Type your email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <Error content={errors.email}> </Error>

      {props.password ? (
        <>
          <div className="form-group">
            <label htmlFor="password-input">Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password-input"
              placeholder="Type your password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Error content={errors.password}></Error>
        </>
      ) : (
        ""
      )}
      <div className="form-group row col-md justify-space-between align-items-center">
        {props.rememeber ? (
          <div className="form-check align-items-center">
            <input
              className="form-check-input float-right"
              type="checkbox"
              value=""
              id="remember-me"
              onChange={e => setRemember(e.target.value)}
            />
            <label className="form-check-label" htmlFor="remember-me">
              Remember me
            </label>
          </div>
        ) : (
          ""
        )}

        <button
          type="submit"
          onClick={onSubmit}
          className=" btn ml-auto btn-primary font-weight-light "
        >
          {props.submitLabel}
        </button>
      </div>

      <div className="from-group row col-md flex-nowrap">
        {props.haveAcc ? (
          <Link
            to="/login"
            className="text-decoration-none text-dark auth-link"
          >
            Already have account?
          </Link>
        ) : (
          ""
        )}
        {props.forgotPassword ? (
          <Link
            to="/resetpassword"
            className="text-decoration-none text-dark auth-link ml-auto"
          >
            Forgot password?
          </Link>
        ) : (
          ""
        )}
        {props.aintAcc ? (
          <Link
            to="/registration"
            className="text-decoration-none text-dark auth-link"
          >
            Not have account yet?
          </Link>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

function Error(props) {
  return props.content ? (
    <div className="form-group row col-md">
      <div className="alert alert-danger h6 w-100" role="alert">
        {props.content}
      </div>
    </div>
  ) : (
    ""
  );
}

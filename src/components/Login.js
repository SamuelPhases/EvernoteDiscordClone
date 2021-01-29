import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login__container">
      <div className="login__content">
        <div className="login">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="login-logo"
          />
          <p className="login-text">Remember everything important.</p>
          <button className="google-auth">
            <div className="google-login">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="google-logo"
              />
              <h2>Continue with Google</h2>
            </div>
          </button>
          <p className="login__separator">or</p>
          <form className="login__form">
            <div>
              <input type="email" placeholder="Email address or username" />
              <button className="login__continue">Continue</button>
            </div>
            <section>
              <input type="checkbox" />
              <label>Remember me for 30 days</label>
            </section>
          </form>
          <div className="create__account">
            <p>Don't have an account?</p>
            <h3>Create account</h3>
          </div>
        </div>
        <footer>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Copyright 2020 Evernote Corporation. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Login;
